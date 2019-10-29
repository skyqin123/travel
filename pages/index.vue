<template>
  <div class="travel_index" style="border:6px solid red">
    <div class="index_swiper" >
      <el-carousel height="1000px" >
        <el-carousel-item  v-for="(item, index) in swiperList" :key="index">
          <!-- <h3>{{ item }}</h3> -->
          <div 
            class="bgc_img"
            :style="`background:url(${$axios.defaults.baseURL + item.url}) no-repeat center center;height:1000px`"
          ></div>
        </el-carousel-item>
      </el-carousel>

       <div class="index_search">
      <indexTab></indexTab>
    </div>
    </div>

   
  </div>
</template>

<script>
import indexTab from "@/components/index/indexTab.vue";
export default {
  data() {
    return {
      swiperList: []
    };
  },
  components: {
    indexTab
  },
  asyncData(context) {
    // console.log(context)
    return context.$axios.get("/scenics/banners").then(res => {
      // console.log(res)
      return { swiperList: res.data.data };
    });
  }
  // mounted () {
  //   this.$axios.get("/scenics/banners")
  //   .then (res => {
  //     console.log(res)
  //   })
  // }
};
</script>

<style lang="less" scoped>
.travel_index {
  
    position: relative;
  width: 100%;
  .index_swiper {
    width: 100%;
    .bgc_img {
      width: 100%;
      height: 1000px;
      background-size: 100% 100%;
    }
  }
  .index_search {
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
  }
}
</style>