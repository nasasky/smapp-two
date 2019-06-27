<template>
  <div class="container">
    <van-row class="m-header">
      <van-col span="24">
        <van-icon name="arrow-left" class="m-header-icon" @click="prevv()"/>
        <div class="head">佛门善举</div>
      </van-col>
    </van-row>

    <van-card v-for="course in courses" :key="course.id" :thumb="course.publisherHeader">
      <div class="title" slot="title">
        <div class="pic">
          <img :src=" course.user_avatar">
        </div>

        <div></div>
        标题: {{course.title}}
        <div class="desc" slot="desc">
          时间： {{course.create_time}}
          <br>
          发布人： {{course.user_name}}
          <br>
        </div>
      </div>
    </van-card>

    <van-sku v-model="isShowCourse" :sku="course" :goods="courseTitle" close-on-click-overlay></van-sku>
  </div>
</template>
<script>
export default {
  data() {
    return {
      courses: [],
      course: {},
      isShowCourse: false
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
    this.$http
      .getCourse({ status: "open" })
      .then(res => {
        console.log("获取课程列表返回", res);
        this.courses = res.data;
      })
      .catch(err => {
        this.$toast.fail("获取课程列表失败", err);
      });
  },
  methods: {
    prevv() {
      this.$router.go(-1);
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
