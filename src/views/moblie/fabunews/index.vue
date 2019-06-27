<template>
  <div class="hello">
    <van-row class="m-header">
      <van-col span="24">
        <van-icon name="arrow-left" class="m-header-icon" @click="prevx()"/>
        <div class="head">发布资讯</div>
      </van-col>
    </van-row>

    <van-cell-group style="background:none;">
      <van-field
        v-model="title"
        placeholder="请输入资讯标题"
        label-align="left"
        label="标题："
        clearable
        required
      ></van-field>

      <van-field
        label-align="left"
        label="类型选择："
        placeholder="点击选择信息类型"
        @click="show = true"
        value
        v-model="nei"
        readonly="readonly"
        required
      ></van-field>

      <van-action-sheet
        show-toolbar
        v-model="show"
        :actions="actions"
        cancel-text="取消"
        @select="onSelect"
        @cancel="onCancel"
      />
      <van-field
        class="tess"
        v-model="content"
        type="textarea"
        placeholder="请输入详细内容"
        rows="1"
        autosize
        style="height:200px;"
      />
    </van-cell-group>

    <van-row class="box">
      <van-button
        type="primary"
        size="small"
        row="5"
        class="login-btn"
        @click="handleLogin"
      >{{isLogin ? '提交' : ''}}</van-button>
    </van-row>
  </div>
</template>
<script>
import { Cell, CellGroup, Popup, Field, Area, Picker } from "vant";
import { addUsizixun_mb, getleixing_mb } from "@/api/moblie-simiao";
export default {
  data() {
    return {
      title: "",
      content: "",
      juti: "",
      message: "",
      infoTypeId: "",
      isLogin: true,
      show: false,
      carmodel: "",
      keyId: "",
      nei: "",
      actions: [],
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
  mounted() {
    var _this = this;
    getleixing_mb()
      .then(res => {
        // console.log("获取课程列表返回", res);
        _this.actions = res.data;
      })
      .catch(err => {
        this.$toast.fail("获取课程列表失败", err);
      });
  },

  methods: {
    prevx() {
      this.$router.go(-1);
    },

    showLoginTip() {
      const toast = this.$toast.loading({
        duration: 500,
        forbidClick: false,
        loadingType: "spinner",
        message: "提交中......"
      });
    },

    login() {
      let data = {
        title: this.title,
        content: this.content,
        infoTypeId: this.infoTypeId
      };
      addUsizixun_mb(data).then(response => {
        // console.log("登录成功返回", response);
        // console.log("返回code", response.code);
        if (response.status == 200) {
          this.$router.push({
            path: "/homex/mine"
          });
          // this.$store.dispatch('setUser', )
        }
        if (response.code == 0) {
          //console.log("登录失败", response);
          this.$toast.fail(response.info);
          return;
        }
      });
    },
    handleLogin() {
      if (!this.title) {
        this.$toast.fail("标题不能为空");
        return;
      }
      if (!this.content) {
        this.$toast.fail("请选择内容类型");
        return;
      }
      if (!this.nei) {
        this.$toast.fail("详细内容不能为空");
        return;
      }

      if (this.isLogin) {
        this.showLoginTip();
        this.login();
      }
    },
    // onConfirm(value, index) {
    //   //console.log(value);
    //   console.log(this.columns);
    //   this.show = false;
    //   this.infoTypeId = value;
    // },

    onCancel() {
      this.show = false;
    },
    onSelect(item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      this.show = false;
      this.nei = item.name;
      this.infoTypeId = item.id;
      console.log(item.id);
      //Toast(item.name);
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
span {
  width: 100% !important;
  background: none !important;
}
.van-action-sheet {
  color: #323233;
  max-height: 50% !important;
}
</style>
