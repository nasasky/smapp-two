<template>
  <div id="app">
    <newhead></newhead>
    <banner></banner>

    <van-row gutter="20" style="margin-top:20px;">
      <router-link :to="{name:'moblie/fomenyaowen',params:{id:'1'}}">
        <van-col span="6">
          <van-icon name="newspaper-o"/>
          <h6>佛门要闻</h6>
        </van-col>
      </router-link>

      <router-link :to="{name:'moblie/simiaolie',params:{id:'1'}}">
        <van-col span="6">
          <van-icon name="shop-o"/>
          <h6>寺庙列表</h6>
        </van-col>
      </router-link>

      <router-link :to="{name:'moblie/fomenshangju',params:{}}">
        <van-col span="6">
          <van-icon name="shop-collect-o"/>
          <h6>佛门善举</h6>
        </van-col>
      </router-link>

      <router-link :to="{name:'',params:{}}">
        <van-col span="6">
          <van-icon name="description"/>
          <h6>佛门资料</h6>
        </van-col>
      </router-link>
    </van-row>

    <van-row gutter="20">
      <router-link :to="{name:'',params:{}}">
        <van-col span="6">
          <van-icon name="play-circle-o"/>
          <h6>佛门养生</h6>
        </van-col>
      </router-link>

      <router-link :to="{name:'',params:{}}">
        <van-col span="6">
          <van-icon name="todo-list-o"/>
          <h6>佛事办理</h6>
        </van-col>
      </router-link>

      <router-link :to="{name:'',params:{}}">
        <van-col span="6">
          <van-icon name="fire-o"/>
          <h6>建庙功德</h6>
        </van-col>
      </router-link>

      <router-link :to="{name:'moblie/fashi',params:{}}">
        <van-col span="6">
          <van-icon name="user-circle-o"/>
          <h6>法师介绍</h6>
        </van-col>
      </router-link>
    </van-row>

    <van-row>
      <div class="xian"></div>
    </van-row>

    <van-row>
      <div class="biaoti">
        <h6 class="biaoti-a">佛门要闻</h6>
      </div>
    </van-row>

    <van-row>
      <div class="list">
        <div class="img">
          <img src="../../../assets/test.png">
        </div>
        <div class="title">
          <h6 class="biaoti-b">Layout 组件提供了24列栅格，通过在Col上添加span属性设置列所占的宽度百分比</h6>
          <h6 class="biaoti-c">时间：2019-05-23</h6>
        </div>
      </div>
    </van-row>
    <van-row>
      <div class="list">
        <div class="img">
          <img src="../../../assets/test.png">
        </div>
        <div class="title">
          <h6 class="biaoti-b">Layout 组件提供了24列栅格，通过在Col上添加span属性设置列所占的宽度百分比</h6>
          <h6 class="biaoti-c">时间：2019-05-23</h6>
        </div>
      </div>
    </van-row>
    <van-row>
      <div class="list">
        <div class="img">
          <img src="../../../assets/test.png">
        </div>
        <div class="title">
          <h6 class="biaoti-b">Layout 组件提供了24列栅格，通过在Col上添加span属性设置列所占的宽度百分比</h6>
          <h6 class="biaoti-c">时间：2019-05-23</h6>
        </div>
      </div>
    </van-row>
    <van-row>
      <div class="list">
        <div class="img">
          <img src="../../../assets/test.png">
        </div>
        <div class="title">
          <h6 class="biaoti-b">Layout 组件提供了24列栅格，通过在Col上添加span属性设置列所占的宽度百分比</h6>
          <h6 class="biaoti-c">时间：2019-05-23</h6>
        </div>
      </div>
    </van-row>
    <van-row>
      <div class="list">
        <div class="img">
          <img src="../../../assets/test.png">
        </div>
        <div class="title">
          <h6 class="biaoti-b">Layout 组件提供了24列栅格，通过在Col上添加span属性设置列所占的宽度百分比</h6>
          <h6 class="biaoti-c">时间：2019-05-23</h6>
        </div>
      </div>
    </van-row>
  </div>
</template>

<script>
import Head from "@/components/dingwei";
import homebanner from "../../../components/homebanner/img";

export default {
  data() {
    return {};
  },

  name: "app",
  components: {
    newhead: Head,
    banner: homebanner
  },

  computed: {},
  mounted() {},
  methods: {
    prevv() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
body {
  background: white;
}

#app {
  background: white;
  height: auto !important;
  margin-bottom: 60px !important;
}
</style>
<style lang="scss" scoped>
.van-icon-shop-o {
  color: #fb7600;
  font-size: 35px;
}
.van-icon-newspaper-o {
  color: #0092ff;
  font-size: 35px;
}
.van-icon-user-o {
  color: #fb7600;
  font-size: 35px;
}

.van-icon-shop-collect-o {
  color: #4bcf3a;
  font-size: 35px;
}
.van-icon-description {
  color: #0082fe;
  font-size: 35px;
}

.van-icon-todo-list-o {
  color: #0082fe;
  font-size: 35px;
}

.van-icon-fire-o {
  color: #0082fe;
  font-size: 35px;
}

.van-icon-user-circle-o {
  color: #fb5f00;
  font-size: 35px;
}

.van-icon-play-circle-o {
  color: #4bcf3a;
  font-size: 35px;
}

.van-icon-manager {
  color: white;
  font-size: 50px;
}
.touxiang h6 {
  font-size: 16px !important;
  color: white;
  margin-top: 10px;
}

.admin {
  position: relative;
  width: 100%;
  height: 180px;
  background: #0082fe;
}

.touxiang {
  position: absolute;
  margin: auto;
  width: 100px;
  height: 100px;
  left: 0;
  right: 0;
  top: 40px;
  text-align: center;
}
.ban {
  margin-top: 0px;
}
.van-col--6 {
  text-align: center;
}
.van-col--6 h6 {
  color: black;
}
.van-row {
  margin-left: 0px !important;
  margin-right: 0px !important;
}
h6 {
  margin-top: 10px;
}
.van-col--6 h6[data-v-b3bb8542] {
  color: black;
  font-size: 13px !important;
}
.xian {
  float: left;
  width: 100%;
  height: 15px;
  background: #ebebeb;
}
.biaoti-a {
  float: left;
  font-size: 14px !important;
  color: black;
  margin-top: 5px;
  margin-left: 5px;
}
.biaoti {
  float: left;
  width: 100%;
  height: 25px;
  border-bottom: 1px solid #ebebeb;
}
.list {
  float: left;
  width: 100%;
  margin-top: 5px;
  border-bottom: 1px solid #ebebeb;
}
.img {
  float: left;
  width: 35%;
  height: 80px;

  margin-bottom: 5px;
}
.img img {
  float: left;
  width: 100%;
  height: 100%;
}
.title {
  float: left;
  width: 63%;
  margin-left: 1%;
}
.biaoti-b {
  float: left;
  font-size: 12px !important;
  color: black;
  margin-top: 5px;
  margin-left: 5px;
  text-align: left;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  height: 50px;
  margin-bottom: 0px !important;
}
.biaoti-c {
  float: left;
  font-size: 11px !important;
  color: black;
  margin-top: 5px;
  margin-left: 5px;
  text-align: left;
  font-weight: 400 !important;
  margin-bottom: 5px !important;
}
</style>

