<template>
  <div class="hello">
    <van-row class="m-header">
      <van-col span="24">
        <van-icon name="arrow-left" class="m-header-icon" @click="prev()"/>
        <div class="head">新增寺庙</div>
      </van-col>
    </van-row>

    <van-cell-group>
      <van-field
        v-model="username"
        placeholder="请输入寺庙名称"
        label-align="left"
        label="名称："
        clearable
        required
      ></van-field>
      <van-field
        v-model="password"
        placeholder="请输入寺庙负责人"
        label-align="left"
        label="负责人："
        clearable
        required
      ></van-field>
    </van-cell-group>

    <!-- <van-cell-group>
      
      <van-cell v-model="addrInfo" readonly="readonly" title="省/市/区" value="" @click="show = true" ></van-cell>
      <van-popup v-model="show" position="bottom">
        <van-area
          ref="area"
          value="110000"
          :area-list="areaList"
         @confirm="onAddrConfirm" 
         @cancel="onAddrCancel"
          
        />
      </van-popup>
    </van-cell-group>-->

    <van-field
      label-align="left"
      label="地区："
      placeholder="点击选择地区"
      @click="show = true"
      value
      v-model="addrInfo"
      readonly="readonly"
      required
    ></van-field>

    <van-popup v-model="show" position="bottom">
      <van-area
        ref="area"
        value="110000"
        :area-list="areaList"
        @confirm="onAddrConfirm"
        @cancel="onAddrCancel"
      />
    </van-popup>

    <van-field
      v-model="juti"
      placeholder="请输入寺庙具体地址"
      label-align="left"
      label="具体地址："
      clearable
      required
    ></van-field>

    <van-row class="box">
      <van-button
        type="primary"
        size="small"
        class="login-btn"
        @click="handleLogin"
      >{{isLogin ? '提交' : ''}}</van-button>
    </van-row>
  </div>
</template>
<script>
import { Cell, CellGroup, Popup, Field, Area, Picker } from "vant";
import areaList from "./../../../config/demo/area";

export default {
  data() {
    return {
      username: "",
      password: "",
      juti: "",
      isLogin: true,
      show: false,
      carmodel: "",
      areaList: areaList,
      showAddrPopup: false,
      addrInfo: "",
      showBankPopup: false
    };
  },

  components: {
    VanCell: Cell,
    VanCellGroup: CellGroup,
    VanPopup: Popup,
    VanField: Field,
    VanArea: Area,
    VanPicker: Picker
  },

  created() {
    console.log(this.$route.params.id);
    console.log(this.$route.query.id);
  },
  methods: {
    prev() {
      this.$router.go(-1);
    },

    showLoginTip() {
      const toast = this.$toast.loading({
        duration: 500,
        forbidClick: false,
        loadingType: "spinner",
        message: "登录中......"
      });
    },
    login() {
      this.$http
        .login({
          username: this.username,
          password: this.password,
          juti: this.juti
        })
        .then(response => {
          console.log("登录成功返回", response);
          console.log("返回code", response.code);
          if (response.code == 1) {
            this.$router.push({
              path: "/substitute"
            });
            // this.$store.dispatch('setUser', )
          }
          if (response.code == 0) {
            console.log("登录失败", response);
            this.$toast.fail(response.info);
            return;
          }
        });
    },
    handleLogin() {
      if (!this.username) {
        this.$toast.fail("寺庙名称不能为空");
        return;
      }
      if (!this.password) {
        this.$toast.fail("负责人不能为空");
        return;
      }

      if (this.isLogin) {
        this.showLoginTip();
        this.login();
      }
    },

    //  onChange (picker, value, index) {
    //         console.log('当前值：' + value + '当前索引：' + index)
    //         console.log(value)
    //         let areaName = ''

    //         this.carmodel = areaName
    //       }

    selAddr() {
      this.showAddrPopup = true;
    },
    onAddrConfirm(val) {
      this.show = false;
      this.addrInfo = val[0].name + " " + val[1].name + " " + val[2].name;
    },

    onAddrCancel() {
      this.show = false;
    }
  }
};
</script>





<style scoped>
.m-header {
  height: 40px;
  line-height: 40px;
  background: #0082fe;
  color: #fff;
}

.m-header-icon {
  position: absolute;
  top: 11px;
  left: 6px;
  font-size: 18px;
}
.head {
  text-align: center;
  font-size: 14px;
}
</style>
<style lang="scss" scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .logo {
    width: 100px;
    margin: 100px 0 30px;
  }
  .box {
    margin-top: 30px;
  }
  .login-btn {
    margin-left: 20px;
  }
}
.van-cell-group {
  background-color: #fff;
  width: 100%;
}
.login-container .box[data-v-37dfd6fc] {
  margin-top: 30px;
  width: 90%;
}
.login-container .login-btn[data-v-37dfd6fc] {
  margin-left: 0px;
  width: 100%;
}
.van-button--primary {
  color: #fff;
  background-color: #0082fe;
  border: 1px solid #0082fe;
}
.van-button--primary[data-v-08841328] {
  color: #fff;
  background-color: #0082fe;
  border: 1px solid #0082fe;
  width: 90%;
  margin-left: 5%;
  margin-top: 20px;
}

.van-button--primary[data-v-445139b6] {
  width: 90% !important;
  margin-top: 30px;
}
.van-button--small {
  font-size: 15px;
  height: 40px;
  line-height: 40px;
}
li {
  position: relative !important;
}
.van-button--small {
  width: 90% !important;
}
</style>
