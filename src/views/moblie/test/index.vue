<template>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                <van-list v-model="loading" :finished="finished" @load="onLoad">
                   <!-- 加载的内容-->
                </van-list>
  </van-pull-refresh>

</template>
<script>
export default {
    data() {
        return {
            deviceList: [],//用于存放加载的数据
            totalPage: 0,
            pageNumber: 0,
            loading: false,//控制上拉加载的加载动画
            finished: false,//控制在页面往下移动到底部时是否调用接口获取数据
            isLoading: false,//控制下拉刷新的加载动画
        };
    },
    created() {
 
    },
    methods: {
        init() {
            let data = {
                pageNumber: this.pageNumber + 1
            };
            let self = this;
            this.$http.getCourse(data, re => {
                // self.deviceList = re.info.list;
                // self.totalPage = re.info.totalPage;
                // self.isLoading = false; //关闭下拉刷新效果
                console.log(data)
            });
        },
        //下拉刷新
        onRefresh() {
            let self = this;
            setTimeout(() => {
                self.totalPage = 0;
                self.pageNumber = 0;
                self.init(); //加载数据
            }, 500);
        },
        //页面初始化之后会触发一次，在页面往下加载的过程中会多次调用【上拉加载】
        onLoad() {
            let self = this;
            setTimeout(() => {
                let data = {
                    pageNumber: self.pageNumber + 1
                };
                self.$http.getCourse(data, re => {
                    self.totalPage = re.info.totalPage;
                    self.deviceList = self.deviceList.concat(re.info.list);
                    self.loading = false;
                    self.pageNumber++;
                    if (self.pageNumber >= self.totalPage) {
                        self.finished = true;
                    }
                });
            }, 500);
        }
    }
};

</script>
<style lang="scss" scoped>
.m-header {
        height: 40px;
        line-height: 40px;
        background: #0082FE;
        color: #fff;
    }
    
    .m-header-icon {
        position: absolute;
        top: 11px;
        left: 6px;
        font-size: 18px;
    }
    .head{
      text-align: center;
       font-size: 14px;
    }
.container {
  padding: 0;
}
.pic {
  float: left;
  width: 80px;
  height: 80px;
  border-radius: 80px;
  margin-right: 10px;
}
.pic img {
  float: left;
  width: 100%;
  height: 100%;
  border-radius: 100%;
}


.title{
  text-align: left;
  line-height: 22px;

}
</style>
