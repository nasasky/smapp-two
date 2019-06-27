<template>
  <div class="login-container">
    <img src="../../../assets/logo.png" alt class="logo">

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

    <van-row class="box">
      <!-- <van-button size="small" @click="handleRegister">
        {{ isLogin ? '注册' : '已有账号'}}
      </van-button>-->
      <van-button
        type="primary"
        size="small"
        class="login-btn"
        @click="handleLogin"
      >{{isLogin ? '登&nbsp;录' : '注册并且登录'}}</van-button>
    </van-row>
  </div>
</template>

<script>
import { login } from "@/api/user";
export default {
  data() {
    return {
      username: "zhen",
      password: "123456",
      repassword: "",
      isLogin: true
    };
  },
  methods: {
    showLoginTip() {
      const toast = this.$toast.loading({
        duration: 500,
        forbidClick: false,
        loadingType: "spinner",
        message: "登录中......"
      });
    },

    login() {
      let data = { username: this.username, password: this.password };

      login(data).then(response => {
        console.log("登录成功返回", response);
        console.log("返回code", response.data.code);
        if (response.data.code == 203) {
          this.$router.push({
            path: "/homex"
          });
          // this.$store.dispatch('setUser', )
          localStorage.setItem("ms_username", this.username);
          localStorage.setItem("token", "Bearer " + response.data.jwtToken);
        }
        if (response.status === "400") {
          console.log("登录失败", response);
          this.$toast.fail(response.info);
          return;
        }
      });
    },
    handleLogin() {
      if (!this.username) {
        this.$toast.fail("用户名不能为空");
        return;
      }
      if (!this.password) {
        this.$toast.fail("密码不能为空");
        return;
      }

      if (this.isLogin) {
        this.showLoginTip();
        this.login();
      } else {
        console.log("注册用户");
        if (this.password != this.repassword) {
          this.$toast.fail("两次输入密码不一致");
          return;
        }

        this.$http
          .register({
            username: this.username,
            password: this.password
          })
          .then(res => {
            console.log("注册成功返回", res.data);
            this.$toast.clear();
            // this.$store.dispath('setUser', res.data)
            this.$router.push({
              path: "/home"
            });
          })
          .catch(err => {
            this.$toast.fail(err);
          });
      }
    }
  }
};
</script>
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
.logo {
  height: auto;
  background-color: white;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  color: #fff;
  font-size: 17px;
}
.login-container .box[data-v-31013fbf] {
  margin-top: 30px;
  width: 100%;
}
.login-container .login-btn[data-v-31013fbf] {
  margin-left: 0px;
  width: 90%;
}
</style>
