<template>
  <!-- <h1>这是航班列表过滤组件</h1> -->
  <div class="flightsFilter">
    <div class="filter">
      <div class="filter_path">单程：{{info.departCity}} - {{info.destCity}} / {{info.departDate}}</div>

      <div class="filter_selec">
        <!-- 起飞机场 -->
        <div class="filter_item">
          <el-select size="medium " v-model="airport" clearable placeholder="起飞机场">
            <el-option
              v-for="item in filtersObj.airport"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <!-- 起飞机场 -->

        <!-- 起飞时间 -->
        <div class="filter_item">
          <el-select size="medium " v-model="flightTimes" clearable placeholder="起飞时间">
            <el-option
              v-for="item in filtersObj.flightTimes"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <!-- 起飞时间 -->

        <!-- 航空公司 -->
        <div class="filter_item">
          <el-select size="medium " v-model="company" clearable placeholder="航空公司">
            <el-option
              v-for="item in filtersObj.company"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <!-- 航空公司 -->

        <!-- 机型 -->
        <div class="filter_item">
          <el-select size="medium " v-model="sizes" clearable placeholder="机型">
            <el-option
              v-for="item in filtersObj.sizes"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <!-- 机型 -->
      </div>
    </div>

    <div class="btn">
      筛选:
      <el-button size="mini" type="primary" round>撤销</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: {}
    },
    info: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      airport: "",
      flightTimes: "",
      company: "",
      sizes: ""
    };
  },
  computed: {
    // 在这里要对夫组件(filghts.vue)传来的值（this.options）进行修改
    // label: 是用来做显示的  value：是用来获取数据的，
    filtersObj() {
      // 对起飞机场进行修改
      let airport = [];
      this.options.airport.forEach(e => {
        e && airport.push({ value: e, label: e });
      });
      // 对时间进行修改
      let flightTimes = this.options.flightTimes.map(e => ({
        value: e.from + "|" + e.to,
        label: `${e.from}:00 - ${e.to}:00`
      }));
      // 对航空公司进行修改
      let company = this.options.company.map(e => ({
        label: e,
        value: e
      }));
      // 补充机型
      let sizes = [
        { value: "L", label: "大" },
        { value: "M", label: "中" },
        { value: "S", label: "小" }
      ];

      return { airport, flightTimes, company, sizes };
    }
  },
  mounted() {
    // console.log(this.options);
    // console.log(this.info);
  }
};
</script>

<style lang="less" scoped>
.filter {
  display: flex;
  padding: 10px;
  .filter_path {
    flex: 3;
    font-size: 20px;
    line-height: 36px;
  }
  .filter_selec {
    flex: 5;
    display: flex;
    .filter_item {
      margin-left: 4px;
    }
  }
}
.btn {
  margin-left: 10px;
  font-size: 18px;
}
</style>