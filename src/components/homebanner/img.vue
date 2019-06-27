<template>
  <div class="carousel">
    <transition-group tag="ul" class="slide" name="image">
      <li v-for="(image,index) in img" :key="index" v-show="index===mark">
        <a>
          <img :src="image">
        </a>
      </li>
    </transition-group>
    <div class="bullet">
      <span
        class="x-span"
        v-for="(item,index) in img.length"
        :class="{'active':index===mark}"
        @click="change(index)"
        :key="index"
      ></span>
    </div>
  </div>
</template>



<script>
export default {
  data: function() {
    return {
      mark: 0,
      timer: null,
      img: [
        "http://www.ysc66.com/Uploads//banner/2017-10-31/59f7f3a334aeb_1920x500.png",
        "http://www.ysc66.com/Public/Home/images/infomation/banner.png",
        "http://www.ysc66.com/Uploads//banner/2017-11-10/5a054c1c9376b_1920x500.png",
        "http://www.ysc66.com/Uploads//banner/2017-12-25/5a40b29eae795_1920x500.png"
      ]
    };
  },
  created() {
    this.play();
  },
  methods: {
    change(i) {
      this.mark = i;
    },
    autoPlay() {
      this.mark++;
      if (this.mark === 4) {
        this.mark = 0;
        return;
      }
    },
    play() {
      setInterval(this.autoPlay, 6000);
    }
  }
};
</script>



<style>
.carousel {
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}

.slide {
  width: 100%;
  height: 8rem;
}

li {
  position: absolute;
}

img {
  height: 8rem;
  width: 100%;
}

.bullet {
  width: 100%;
  position: absolute;
  bottom: 10px;
  margin: 0 auto;
  text-align: center;
  z-index: 10;
}

.x-span {
  width: 0.3rem;
  height: 0.3rem;
  background: white;
  display: inline-block;
  margin-right: 0.2rem;
  border-radius: 50%;
}

.active {
  background: #900000;
}

.image-enter-active {
  transform: translateX(0);
  transition: all 1s ease;
}

.image-leave-active {
  transform: translateX(-100%);
  transition: all 1s ease;
}

.image-enter {
  transform: translateX(100%);
}

.image-leave {
  transform: translateX(0);
}
</style>