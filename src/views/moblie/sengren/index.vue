<template>
  <div class="container">
    <van-row class="m-header">
      <van-col span="24">
        <van-icon name="arrow-left" class="m-header-icon" @click="prevv()"/>
        <div class="head">新增僧人</div>
      </van-col>
    </van-row>
    <!-- <van-loading v-model="loading" color="black"/> -->
    <van-card
      v-for="course in courses"
      :key="course.id"
      :thumb="course.publisherHeader"
      style="background:none;"
    >
      <div class="title" slot="title">
        <div class="pic">
          <img :src="courses.qrcodeimg">
        </div>

        <div></div>
      </div>
    </van-card>
  </div>
</template>
<script>
import { Loading } from "vant";
export default {
  data() {
    return {
      courses: [],
      course: {},
      isShowCourse: false,
      loading: true
    };
  },
  computed: {
    courseTitle() {
      return {
        title: this.course.courseName,
        picture: this.course.publisherHeader
      };
    }
  },

  mounted() {
    this.getma();
    this.$http
      .xinsengren({ status: "open" })
      .then(res => {
        console.log("获取返回", res);
        this.courses = res;
        this.loading = false;
      })
      .catch(err => {
        this.$toast.fail("获取失败", err);
        // this.$router.push({
        //   path: "/simiao"
        // });
      });
  },
  methods: {
    prevv() {
      this.$router.go(-1);
    },
    getma() {
      const toast = this.$toast.loading({
        duration: 500,
        forbidClick: false,
        loadingType: "spinner",
        message: "数据加载中..."
      });
    }
  }
};
</script>
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
  border-radius: 80px;
  margin-right: 10px;
}
.pic img {
  float: left;
  width: 100px;
  height: 100px;
  top: 50px;
  margin-right: 10px;
  /* text-align: center; */
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
}

.title {
  text-align: left;
  line-height: 22px;
  position: relative;
}
</style>
