<template>
  <div class="flightHead">
    <!-- <h1>这是航班列表头部组件</h1> -->
    <div
      class="flightHead_item"
      v-for="(item,index) in ['航空信息','起飞时间','到达时间','价格']"
      :key="index"
    >{{item}}</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
  .flightHead {
    display: flex;
    justify-content: space-between;
    padding: 10px 0px;
    margin: 12px;
    border: 1px solid #000;
    background-color: #eee;
    
    .flightHead_item {
      text-align: center;
      flex: 1;
      font-size: 20px;

    }
  }
</style>