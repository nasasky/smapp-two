<template>
  <div>
    <van-row class="m-header">
      <van-col span="24">
        <van-icon name="arrow-left" class="m-header-icon" @click="prevv()"/>
        <div class="head">佛门善举</div>
      </van-col>
    </van-row>

    <van-search
      placeholder="请输入文章名称"
      v-model="searchTitle"
      :show-action="!!searchTitle"
      @search="onSearch"
      @blur="onSearch"
    >
      <div style="padding: 0 8px" slot="action" @click="onSearch">搜索</div>
    </van-search>

    <van-cell-group>
      <van-nav-bar v-if="!postList.length" title="暂无文章,快去发一篇吧!"/>

      <van-list
        v-model="loading"
        :immediate-check="false"
        :offset="20"
        :finished="finished"
        @load="onLoad"
      >
        <van-cell
          v-for="(item, index) in postList"
          :key="index"
          :title="'邮箱地址'+item.emailAddress"
          :value="'作者:'+ item.username"
          :label="'登录密码'+item.password"
        ></van-cell>
      </van-list>
    </van-cell-group>
  </div>
</template>

<script>
import { Dialog } from "vant";
import { getfomen } from "@/api/user-table";

export default {
  data() {
    return {
      postList: [],
      searchTitle: "",
      loading: false,
      finished: false,
      page: 0,
      size: 10,
      isSignIn: false
    };
  },
  mounted() {
    this.getList(false);
  },
  methods: {
    getList(boolean) {
      this.loading = true;
      // this.$axios({
      //   method: "GET",
      //   url: "/admin/templemanager_p",
      //   // headers: {
      //   //   Authorization: localStorage.getItem("token")
      //   // },

      //   params: {
      //     page: this.page,
      //     size: this.size
      //   }
      // })
      let data = {
        page: this.page,
        size: this.size
      };
      getfomen(data).then(res => {
        if (res.data) {
          if (res.data.content.length < this.size && !boolean) {
            this.postList = this.postList.concat(res.data.content);
            this.finished = true;
          } else {
            if (boolean) {
              this.postList = res.data.content;
            } else {
              this.postList = this.postList.concat(res.data.content);
            }
          }
        }
        this.loading = false;
      });
    },
    onSearch() {
      this.pg = 1;
      this.getList(true);
    },
    onLoad() {
      this.loading = true;
      setTimeout(() => {
        this.page++;
        this.getList(false);
      }, 1000);
    },

    prevv() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.van-nav-bar--fixed {
  z-index: 10 !important;
}
</style>



<style lang="scss" scoped>
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
.container {
  padding: 0;
}
.pic {
  float: left;
  width: 80px;
  height: 80px;

  margin-right: 10px;
}
.pic img {
  float: left;
  width: 100%;
  height: 100%;
}
.title {
  text-align: left;
  line-height: 22px;
}
</style>
