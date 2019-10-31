<template>
  <div class="flights">
    <!-- <h1>这里是机票详情页面</h1> -->
    <div class="flightsDteal">
      <!-- 航班详情部分 -->

      <!-- 航班筛选 -->
      <FlightsFliter
        v-if="flightData.flights.length"
        :options="flightData.options"
        :info="flightData.info"
      ></FlightsFliter>
      <!-- 航班筛选 -->

      <!-- 航班表单头部 -->
      <FlightsHead></FlightsHead>
      <!-- 航班表单头部 -->

      <!-- 航班列表 -->
      <FlightsItem
        v-for="(item,index) in flightData.flights"
        :key="index"
        :flightInfo="item"
      ></FlightsItem>
      <!-- 航班列表 -->
    </div>
    <div class="flightsAaside">航班侧边栏部分</div>
  </div>
</template>

<script>
import FlightsFliter from "@/components/air/FlightsFliter.vue";
import FlightsHead from "@/components/air/FlightsHead.vue";
import FlightsItem from "@/components/air/FlightsItem.vue";
export default {
  data() {
    return {
      flightData: {
        flights: [],
        info: {},
        options: {}
      }
    };
  },
  components: {
    FlightsFliter,
    FlightsHead,
    FlightsItem
  },
  mounted() {
    // 页面刚加载就要根据用户传来的搜索信息进行数据的获取
    let obj = this.$route.query;
    // console.log(obj)
    this.$axios.get("/airs", { params: obj }).then(res => {
      console.log(res.data);
      this.flightData = res.data;
      console.log(this.flightData);
    });
  }
};
</script>

<style lang="less" scoped>
.flights {
  display: flex;
  width: 1200px;
  margin: 10px auto;
  // border: 1px solid #000;
}
.flightsDteal {
  flex: 5;
  // background-color: #ccc;
}
.flightsAaside {
  flex: 2;
  background-color: #999;
}
</style>