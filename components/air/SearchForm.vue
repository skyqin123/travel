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
      <el-form label-width="80px" :model="form" :rules="rules" ref="form">
        <!-- 出发城市开始 -->
        <el-form-item label="出发城市" prop="departCity">
          <el-autocomplete
            v-model="form.departCity"
            :fetch-suggestions="querySearchAsync"
            placeholder="请输入内容"
            @select="handleSelect"
          ></el-autocomplete>
        </el-form-item>
        <!-- 出发城市结束 -->

        <!-- 换 -->
        <div class="exchange" @click="handleExchange">换</div>
        <!-- 换 -->

        <!-- 到达城市开始 -->
        <el-form-item label="到达城市" prop="destCity">
          <el-autocomplete
            v-model="form.destCity"
            :fetch-suggestions="querySearchAsync"
            placeholder="请输入内容"
            @select="handleSelect2"
          ></el-autocomplete>
        </el-form-item>
        <!-- 到达城市结束 -->

        <!-- 出发时间开始 -->

        <el-form-item label="出发日期" prop="departDate">
          <el-date-picker
            style="width:100%"
            type="date"
            placeholder="选择出发日期"
            v-model="form.departDate"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
        </el-form-item>
        <!-- 出发时间结束 -->

        <!-- 提交按钮开始 -->
        <el-form-item>
          <el-button style="width:100%" type="primary" @click="submitSesrch">
            <i class="el-icon-search"></i>
            搜索
          </el-button>
        </el-form-item>
        <!-- 提交按钮结束 -->
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
        departCity: "广州",
        // 出发城市 编码
        departCode: "CAN",
        // 到达城市
        destCity: "上海",
        // 到达城市 编码
        destCode: "SHA",
        // 出发时间
        departDate: "2019-10-31"
      },
      rules: {
        departCity: [
          { required: true, message: "请输入出发城市", trigger: "blur" }
        ],
        destCity: [
          { required: true, message: "请输入到达城市", trigger: "blur" }
        ],
        departDate: [
          { required: true, message: "请输入出发时间", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    // 当用户输入的时候就触发的事件
    // queryString: 所输入的内容
    // 回调函数
    querySearchAsync(queryString, callback) {
      // console.log(queryString);
      // console.log(callback);
      console.log(123123)
      this.$axios
        .get("/airs/city", { params: { name: queryString } })
        .then(res => {
          console.log(res);
          let airArr = res.data.data
          airArr.forEach(e => {
            // **市里的 ‘市’字去掉，因为后面的提交是没有市字的
            // str.replace(str1,str2),把字符串str里的str1的字段用str2字段来代替
            e.name = e.name.replace("市", "");
            e.value = e.name; // 返回的数据中没有我们自己要的所以要增添一个 value 属性
          });
          callback(airArr);
        });
    },
    handleSelect(item) {
      // console.log(item);
      // this.formdepartCity = item.name;
      this.form.departCode = item.sort;
    },
    handleSelect2(item) {
      // console.log(item);
      // this.destCity = item.name;
      this.form.destCode = item.sort;
    },
    submitSesrch() {
      console.log(this.form);
      this.$refs.form.validate(valid => {
        // console.log(123);
        if (valid) {
          this.$router.push({ path: "/air/flights", query: this.form });
        } else {
          // console.log(222)
          this.$message("请输入完整的搜索内容");
          return false;
        }
      });
    },
    handleExchange () {
      console.log(123)
      let form = JSON.parse(JSON.stringify(this.form))
      // let form=JSON.parse(JSON.stringify(this.form));
      this.form.departCity=form.destCity;
      this.form.departCode=form.destCode;
      // ================
      this.form.destCity=form.departCity;
      this.form.destCode=form.departCode;
      // console.log(this.form)
      // console.log(form)
      // [this.form.departCity,this.form.departCode,this.form.destCity,this.form.destCode]=
      // [this.form.destCity,this.form.destCode,this.form.departCity,this.form.departCode];
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
.search_content {
  padding: 0px 67px 0px 10px;
  position: relative;

  .exchange {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    background: #ccc;
    position: absolute;
    top: 40px;
    right: 32px;
    cursor: pointer;
    &::before {
    content: "";
    width: 21px;
    height: 20px;
    border-top: 2px solid #ccc;
    border-right: 2px solid #ccc;
    position: absolute;
    top: -22px;
    left: -11px;
    }
    &::after {
    content: "";
    width: 21px;
    height: 20px;
    border-bottom: 2px solid #ccc;
    border-right: 2px solid #ccc;
    position: absolute;
    top: 23px;
    left: -11px;
    }
  }
}
</style>