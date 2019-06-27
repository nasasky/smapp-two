<template>
  <div class="home">
    <van-row class="m-header">
      <van-col span="24">
        <div class="head">确认信息</div>
      </van-col>
    </van-row>
    <div class="sengtou">
      <div class="sengtou-img">
        <img
          src="https://bbs.luzhaoyao.club/uploads/avatar/20190519/2e66357ac824cf863d46ad2f60bbe1d2.jpg"
        >
      </div>
    </div>
    <div class="neirong">
      <ul>
        <li>昵称：张三</li>
        <li>性别：男</li>
        <li>验证信息： 灵隐寺开山祖师为西印度僧人慧理和尚。南朝梁武帝赐田并扩建。五代吴越王钱镠命请永明延寿大师重兴开拓，并赐名灵隐新寺。宋宁宗嘉定年间，灵隐寺被誉为江南禅宗“五山”之一。</li>
      </ul>
      <van-row class="box">
        <van-button
          style="margin-top:50px;"
          type="primary"
          size="small"
          class="login-btn"
          @click="tijiao"
        >同 意</van-button>
      </van-row>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  methods: {
    tijiao() {}
  }
};
</script>

<style>
.home {
}
.neirong {
  margin-top: 120px;

  width: 100%;
}
.neirong ul {
  float: left;
  width: 95%;
  margin-left: 2.5%;
  text-align: left;
  margin-top: 10px;
}
.neirong ul li {
  margin-top: 10px;
}
.sengtou {
  width: 100%;
  position: relative;
}
.sengtou-img {
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 10px;
  width: 100px;
  height: 100px;

  border-radius: 100px;
}
.sengtou-img img {
  float: left;
  width: 100%;
  height: 100%;
  border-radius: 100px;
}
</style>
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
textarea {
  height: 200px !important;
}
.van-uploader {
  position: relative;
  display: inline-block;
  margin-left: 10px;
  margin-top: 15px;
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
  width: 90%;

  margin-top: 20px;
}
.van-button--primary[data-v-08841328] {
  color: #fff;
  background-color: #0082fe;
  border: 1px solid #0082fe;
  width: 90%;

  margin-top: 20px;
}
.van-button--small {
  padding: 0 8px;
  height: 40px;
  min-width: 60px;
  font-size: 15px;
  line-height: 38px;
}
.van-cell {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  overflow: hidden;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #323233;
  font-size: 14px;
  line-height: 24px;
  border: 1px solid #ebebeb;
  padding: 10px 10px !important;
  /* padding: 10px 15px; */
}
</style>
