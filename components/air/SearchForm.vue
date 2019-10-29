<template>
  <div class="search_form">
    <div class="search_title">
      <div
        :class="{title_item:true,active:currentIndex == index}"
        v-for="(item,index) in ['单程','往返']"
        :key="index"
      >{{item}}</div>
    </div>

    <div class="search_content">
      <el-form label-width="80px">
        <!-- 出发城市开始 -->
        <el-form-item label="出发城市">
          <el-autocomplete
            v-model="form.departCity"
            :fetch-suggestions="querySearchAsync"
            placeholder="请输入内容"
            @select="handleSelect"
          ></el-autocomplete>
        </el-form-item>
        <!-- 出发城市结束 -->

        <!-- 到达城市开始 -->
        <el-form-item label="到达城市">
          <el-autocomplete
            v-model="form.destCity"
            :fetch-suggestions="querySearchAsync"
            placeholder="请输入内容"
            @select="handleSelect2"
          ></el-autocomplete>
        </el-form-item>
        <!-- 到达城市结束 -->

        <!-- 出发时间开始 -->
        <el-form-item label="出发日期" style="width:100%">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.departDate"></el-date-picker>
        </el-form-item>
        <!-- 出发时间结束 -->
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      form: {
        //  出发城市
        departCity: "广州市",
        // 出发城市 编码
        departCode: "CAN",
        // 到达城市
        destCity: "上海市",
        // 到达城市 编码
        destCode: "SHA",
        // 出发时间
        departDate: "2019-11-28"
      }
    };
  },
  methods: {
    // 当用户输入的时候就触发的事件
    // queryString: 所输入的内容
    // 回调函数
    querySearchAsync(queryString, callback) {
      console.log(queryString);
      console.log(callback);
    },
    handleSelect(item) {
      console.log(item);
    },
    handleSelect2(item) {
      console.log(item);
    }
  }
};
</script>

<style lang="less" scoped>
.search_title {
  height: 50px;
  background-color: #eee;
  display: flex;
  margin-bottom: 16px;
  .title_item {
    position: relative;
    flex: 1;
    justify-content: space-between;
    text-align: center;
    font-size: 20px;
    line-height: 50px;
  }
  .active {
    background-color: #fff;
    color: orange;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: orange;
    }
  }
}
</style>