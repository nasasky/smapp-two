<template>
  <div class="home">
    <van-search placeholder="请输入搜索关键词"/>
    <van-tabs v-model="active" swipeable>
      <van-tab v-for="(item,index) in navArr" :title="item.name" class="v-tab" :key="index">
        <div v-if="index==0" style="margin-top:20px;">
          <van-row gutter="20">
            <router-link :to="{name:'',params:{}}">
              <van-col span="6">
                <i class="fa fa-file-text fa-2x" style="color:red;"></i>
                <h6>佛教起源</h6>
              </van-col>
            </router-link>

            <router-link :to="{name:'',params:{}}">
              <van-col span="6">
                <i class="fa fa-clipboard fa-2x" style="color:orange;"></i>
                <h6>佛教经书</h6>
              </van-col>
            </router-link>

            <router-link :to="{name:'',params:{}}">
              <van-col span="6">
                <i class="fa fa-fire fa-2x" style="color:red;"></i>
                <h6>佛学文化</h6>
              </van-col>
            </router-link>

            <router-link :to="{name:'moblie/fashi',params:{}}">
              <van-col span="6">
                <i class="fa fa-envelope-open fa-2x" style="color:#1989fa;"></i>
                <h6>佛学诵文</h6>
              </van-col>
            </router-link>
          </van-row>
        </div>

        <div v-if="index==1" style="margin-top:20px;">
          <van-row gutter="20">
            <router-link :to="{name:'',params:{}}">
              <van-col span="6">
                <i class="fa fa-file-text fa-2x" style="color:red;"></i>
                <h6>佛教起源</h6>
              </van-col>
            </router-link>

            <router-link :to="{name:'',params:{}}">
              <van-col span="6">
                <i class="fa fa-clipboard fa-2x" style="color:orange;"></i>
                <h6>佛教经书</h6>
              </van-col>
            </router-link>
          </van-row>
        </div>
      </van-tab>
    </van-tabs>
    <div style="width:100%;height:10px;background:#ebebeb;"></div>

    <van-row>
      <div class="web-xian">
        <a class="web-xian-a">热门书籍</a>
      </div>
    </van-row>
    <van-row>
      <div class="list">
        <div class="img">
          <img src="../../../assets/test.png">
        </div>
        <div class="title">
          <h6 class="biaoti-b">书名：地藏菩萨本愿经</h6>
          <h6 class="biaoti-b">作者：实叉难陀</h6>
          <h6 class="biaoti-c">价格：99.00元</h6>
        </div>
      </div>
    </van-row>

    <van-row>
      <div class="list">
        <div class="img">
          <img src="../../../assets/test.png">
        </div>
        <div class="title">
          <h6 class="biaoti-b">书名：地藏菩萨本愿经</h6>
          <h6 class="biaoti-b">作者：实叉难陀</h6>
          <h6 class="biaoti-c">价格：99.00元</h6>
        </div>
      </div>
    </van-row>

    <van-row>
      <div class="list">
        <div class="img">
          <img src="../../../assets/test.png">
        </div>
        <div class="title">
          <h6 class="biaoti-b">书名：地藏菩萨本愿经</h6>
          <h6 class="biaoti-b">作者：实叉难陀</h6>
          <h6 class="biaoti-c">价格：99.00元</h6>
        </div>
      </div>
    </van-row>

    <van-row>
      <div class="list">
        <div class="img">
          <img src="../../../assets/test.png">
        </div>
        <div class="title">
          <h6 class="biaoti-b">书名：地藏菩萨本愿经</h6>
          <h6 class="biaoti-b">作者：实叉难陀</h6>
          <h6 class="biaoti-c">价格：99.00元</h6>
        </div>
      </div>
    </van-row>
    <div style="width:100%;height:80px;"></div>
  </div>
</template>


<script>
export default {
  name: "",
  data() {
    return {
      active: 0,
      navArr: [
        {
          name: "收费书籍类别"
        },
        {
          name: "免费书籍类别"
        }
      ]
    };
  }
};
</script>

<style>
.van-tabs__line {
  z-index: 1;
  left: 0;
  bottom: 15px;
  height: 3px;
  position: absolute;
  border-radius: 3px;
  background-color: #1989fa !important;
}
.web-xian {
  float: left;
  width: 100%;
  height: 20px;
  border-bottom: 1px solid #ebebeb;
  margin-bottom: 10px;
  margin-top: 5px;
}
.web-xian-a {
  float: left;
  text-align: left;
  margin-left: 5%;
  font-size: 14px;
  font-weight: 400;
  color: black;
}
</style>
<style lang="scss" scoped>
body {
  background: white !important;
}

#app {
  background: white !important;
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
  margin-bottom: 10px !important;
  font-size: 14px !important;
  font-weight: 400 !important;
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
  height: 25px;
  width: 98%;
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
