<template>
  <div class="flightList">
    <!-- <h1>这是航班列信息表组件</h1> -->
    <div class="flightItem">
      <div class="plane">{{flightInfo.airline_name}}{{flightInfo.flight_no}} - {{flightInfo.plane_size}}</div>
      <div class="dep_time">
        {{flightInfo.dep_time}}
        <p>{{flightInfo.org_airport_name}}{{flightInfo.org_airport_quay}}</p>
      </div>
      <div class="duration">2小时20分</div>
      <div class="arr_time">
        {{flightInfo.arr_time}}
        <p>{{flightInfo.dst_airport_name}}{{flightInfo.dst_airport_quay}}</p>
      </div>
      <div class="price">
        ￥
        <i>{{flightInfo.base_price * 0.3}}</i>起
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    flightInfo: {
      type: Object,
      default: {}
    }
  },
  mounted() {
    console.log("=====================");
    console.log(this.flightInfo);
  }
};
</script>

<style lang="less" scoped>
.flightList {
  .flightItem {
    border: 1px solid #000;
    margin: 12px;
    display: flex;
    justify-content: space-around;
    height: 90px;
    display: flex;
    align-items: center;
    font-size: 20px;
    :nth-child(2n) {
      font-size: 30px;
      color: red;
      > p {
        font-size: 10px;
        color: #666;
      }
    }
    .price {
      i {
        font-size: 36px;
        color: orange;
      }
    }
  }
}
</style>