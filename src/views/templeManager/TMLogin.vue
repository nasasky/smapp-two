<template>
  <div class="hc">
    <div class="login-container">
      <h3 class="title">寺庙管理员登录</h3>
      <van-cell-group>
        <van-field
          v-model="username"
          placeholder="请输入账号"
          label-align="left"
          label="账号"
          clearable
          required
        ></van-field>
        <van-field
          v-model="password"
          placeholder="请输入密码"
          label-align="left"
          label="密码"
          clearable
          required
          type="password"
        ></van-field>
        <van-field
          v-show="!isLogin"
          v-model="repassword"
          placeholder="请再次输入密码"
          label-align="left"
          label="重复密码"
          clearable
          required
          type="password"
        ></van-field>
      </van-cell-group>

      <van-row class="box" style="width:100%;">
        <van-button
          type="primary"
          size="small"
          class="login-btn"
          @click="handleLogin"
          style="width:100%;margin-left:0px;"
        >{{isLogin ? '登录' : '注册并且登录'}}</van-button>
      </van-row>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      username: "hu",
      password: "123456",
      repassword: "",
      isLogin: true
    };
  }

};
</script>
<style lang="scss" scoped>
.hc {
  position: relative;
}
.login-container {
  text-align: left;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: auto;
  width: 350px;
  position: absolute;
  left: 0;
  right: 0;
  top: 180px;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  -webkit-box-shadow: 0 0 30px #cac6c6;
  box-shadow: 0 0 30px #cac6c6;
}
.login-container .title {
  margin: 0px auto 30px auto;
  text-align: center;
  color: #505458;
}
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
  background-color: #409eff;
  border-color: #409eff;
}
.van-button--small {
  padding: 0 8px;
  height: 40px;
  min-width: 60px;
  font-size: 12px;
  line-height: 28px;
}
.van-button--small {
  font-size: 14px;
  line-height: 28px;
}
</style>
