<template>
  <van-row style="margin-top:10px;">
    <van-col span="24">
      <div class="admin">
        <div class="touxiang">
          <van-icon name="location" style="float:left;"/>
          <h6>{{data}}</h6>
        </div>
        <div class="sousuo"></div>
      </div>
    </van-col>
  </van-row>
</template>

<script>
export default {
  data() {
    return {
      data: "加载中..."
    };
  },
  computed: {},
  mounted() {},

  created() {
    this.getLocation();
  },
  // methods: {
  //     prevv () {
  //     this.$router.go(-1)
  //   },

  // }

  methods: {
    getLocation() {
      // 从高德地图api获取浏览器定位
      const that = this;
      AMap.plugin("AMap.Geolocation", function() {
        let geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000
        });

        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, "complete", onComplete);
        AMap.event.addListener(geolocation, "error", onError);

        function onComplete(data) {
          // data是具体的定位信息
          console.log(data);
          console.log(data.formattedAddress);
          const latitude = data.position.getLat(); // 纬度
          const longitude = data.position.getLng(); // 经度
          console.log("latitude", latitude, "longitude", longitude);
          that.data = data.addressComponent.city;
          console.log(data.addressComponent.city);
        }

        function onError(data) {
          // 定位出错
          that.getLatLngLocation();
        }
      });
    },
    getLatLngLocation() {
      AMap.plugin("AMap.CitySearch", function() {
        let citySearch = new AMap.CitySearch();
        citySearch.getLocalCity(function(status, result) {
          if (status === "complete" && result.info === "OK") {
            // 查询成功，result即为当前所在城市信息
            AMap.plugin("AMap.Geocoder", function() {
              let geocoder = new AMap.Geocoder({
                // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
                city: result.adcode
              });
              let lnglat = result.rectangle.split(";")[0].split(",");
              geocoder.getAddress(lnglat, function(status, data) {
                if (status === "complete" && data.info === "OK") {
                  // data为对应的地理位置详细信息
                }
              });
            });
          }
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.m-header {
  height: 40px;
  line-height: 40px;

  color: #fff;
}

.m-header-icon {
  position: absolute;
  top: 11px;
  left: 6px;
  font-size: 18px;
  color: #0082fe;
}
.head {
  text-align: center;
  font-size: 14px;
}
.container {
  padding: 0;
}
</style>


<style>
body {
  background: #ebebeb;
}
.van-button--normal {
  padding: 0 15px;
  font-size: 14px;
  width: 90%;
}
.van-button {
  height: 40px;
  line-height: 40px;
}
.touxiang h6 {
  font-size: 14px;
  color: black;
  float: left;
  margin-top: 10px;
}

.admin {
  position: relative;
  width: 100%;
  height: 34px;

  border-bottom: 1px solid #ebebeb;
}

.touxiang {
  position: absolute;
  margin: auto;

  height: auto;
  left: 0;

  top: 0px;
  text-align: center;
}
.ban {
  margin-top: 0px;
}
.van-icon-location {
  color: #0082fe;
  font-size: 20px;
  margin-top: 8px;
  margin-left: 5px;
}
.van-button__text {
  letter-spacing: 5px;
}
.sousuo {
  float: left;
  width: 60%;
  margin-left: 80px;
  height: 30px;
  background: white;
  border-radius: 5px;
}
</style>

