<template>
  <div class="hello">
    <van-row class="m-header">
      <van-col span="24">
        <van-icon name="arrow-left" class="m-header-icon" @click="prevx()"/>
        <div class="head">发布商品</div>
      </van-col>
    </van-row>

    <van-cell-group>
      <van-field
        v-model="username"
        placeholder="请输入商品名称"
        label-align="left"
        label="商品名称："
        clearable
        required
      ></van-field>

      <van-field
        class="tess"
        v-model="message"
        type="textarea"
        placeholder="请输入商品内容"
        rows="1"
        autosize
        style="height:200px;"
      />
    </van-cell-group>

    <div class="imgUpload">
      <div class="dynamic-imgs">
        <p class="img-title">上传图片：（最多上传九张图片）</p>
        <div class="table-list">
          <div v-for="(img,index) in dynamicPics" :key="index">
            <img class="img-add" :src="img" @click="clickImg(img,index)">
          </div>
          <div v-show="isAddImg">
            <van-uploader :after-read="onRead" accept="image/*" multiple>
              <!-- <img class="img-add" src="./../../../assets/img.png"/> -->
              <van-icon name="photograph" style="font-size: 30px;"/>
            </van-uploader>
          </div>
        </div>
      </div>

      <dialog-view-img :isShow="isSelectImg" :imgInfo="viewImg" @showTag="previewImg"></dialog-view-img>
    </div>
    <!-- <van-uploader :after-read="onRead" accept="image/*" multiple>
      <img class="head-img" src="/static/images/addpic.png" ref="goodsImg"/>
    </van-uploader>-->

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
import dialogViewImg from "../../../components/viewImg/dialogViewImg";
export default {
  data() {
    return {
      username: "",
      password: "",
      juti: "",
      message: "",
      isLogin: true,
      dynamicPics: [], //存放添加图片
      isSelectImg: false, //开启弹窗标志
      viewImg: {}
    };
  },
  components: {
    dialogViewImg
  },

  computed: {
    isAddImg() {
      //如果已经9张了，isAddImg为false，隐藏加号
      if (this.dynamicPics.length >= 9) {
        return false;
      } else {
        return true;
      }
    }
  },

  methods: {
    // onRead(file) {
    //        console.log(file);
    //        //将原图片显示为选择的图片
    //        this.$refs.goodsImg.src = file.content;
    //    },
    onRead(file) {
      //添加图片
      this.dynamicPics.push(file.content);
    },
    //点击图片事件
    clickImg(url, index) {
      console.log(url, index);
      //获得图片的url和index，传给弹窗
      this.viewImg = {
        url: url,
        index: index
      };
      //打开弹窗
      this.isSelectImg = true;
    },

    //预览图片返回
    previewImg(value) {
      //关闭弹窗
      this.isSelectImg = false;
      //点击删除时，返回图片在数组中的index
      if (value !== null) {
        console.log("删除图片", value.index);
        this.dynamicPics.splice(value.index, 1);
      }
    },

    prevx() {
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

.imgUpload {
  height: auto;
  width: 100%;
  background: #f8f8f8;
  font-size: 14px;
  overflow-x: hidden;
  .dynamic-imgs {
    box-sizing: border-box;
    min-height: 152px;
    width: 100%;
    background-color: #ffffff;
    padding: 12px;
    margin-bottom: 6.5px;

    .img-title {
      margin-bottom: 12px;
      font-size: 14px;
      color: black;
      text-align: left;
      letter-spacing: 0.16px;
    }
    .table-list {
      width: 100%;
      display: flex;
      flex-wrap: wrap;

      .img-add {
        width: 96px;
        height: 96px;
        margin-right: 12px;
        margin-bottom: 12px;
      }
    }
  }
}

.van-icon-photograph {
  font-size: 30px !important;
}
</style>
