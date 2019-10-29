<template>
  <div class="register_form">
    <el-form :model="userForm" :rules="rules" ref="userForm" class="demo-ruleForm">
      <!-- 输入手机号 -->
      <el-form-item size="small" prop="username">
        <el-input class="inp" size="medium" v-model="userForm.username" placeholder="请输入手机号"></el-input>
      </el-form-item>

      <!-- 获取验证码 -->
      <el-form-item size="small" prop="captcha">
        <el-input class="inp" size="medium" v-model="userForm.captcha" placeholder="请输入验证码">
          <template slot="append">
            <div @click="handleGetCaptcha">
              <i v-show="showStatus">获取验证码</i>
              <em v-show="!showStatus">{{setTime}}</em>
            </div>
          </template>
        </el-input>
      </el-form-item>
      <!-- <el-input placeholder="请输入验证码" >
        <template slot="append">获取验证码</template>
      </el-input>-->

      <!-- 输入昵称 -->
      <el-form-item size="small" prop="nickname">
        <el-input class="inp" size="medium" v-model="userForm.nickname" placeholder="请输入昵称"></el-input>
      </el-form-item>

      <!-- 输入密码 -->
      <el-form-item size="small" prop="password">
        <el-input class="inp" size="medium" v-model="userForm.password" placeholder="请输入密码"></el-input>
      </el-form-item>

      <!-- 再次确认密码 -->
      <el-form-item size="small" prop="password2">
        <el-input class="inp" size="medium" v-model="userForm.password2" placeholder="请确认密码"></el-input>
      </el-form-item>

      <!-- 按键 -->
      <el-form-item>
        <el-button type="primary" @click="submitForm" style="width:100%">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    // value 的值一定要是在 userForm里面
    var validatePass2 = (rule, value, callback) => {
      console.log(rule)
    console.log(value)
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.userForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      setTime: 10,
      showStatus: true,
      // password2: "123456",
      userForm: {
        username: "13123456789",
        nickname: "qwer",
        captcha: "000000",
        password: "123456",
        password2: "123456"
      },
      rules: {
        username: [
          { required: true, message: "请输入中国大陆手机号", trigger: "blur" },
          {
            pattern: /^1[34578]\d{9}$/,
            message: "请输入中国大陆手机号",
            trigger: "blur"
          }
        ],
        nickname: [{ required: true, message: "请输入昵称", trigger: "blur" }],
        captcha: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { pattern: /^\d{6}$/, message: "请输入正确的验证码", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            pattern: /^[0-9a-zA-Z]{6,16}$/,
            message: "请输入6~16位数字或字母组合的密码",
            trigger: "blur"
          }
        ],
        password2: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
    // 获取验证码事件
    handleGetCaptcha() {
      console.log("获取验证码");
      let reg = /^[0-9a-zA-Z]{6,16}$/;
      if (reg.test(this.userForm.username)) {
        this.showStatus = !this.showStatus;
        let timeId = setInterval(() => {
          this.setTime = --this.setTime;
          if (this.setTime === 0) {
            clearInterval(timeId);
            this.showStatus = !this.showStatus;
            this.setTime = 10;
          }
        }, 1000);

        this.$axios
          .post("/captchas", { tel: this.userForm.username })
          .then(res => {
            console.log(res)
            if (res.status === 200 && res.statusText === "OK") {
            }
          });
      } else {
        this.$message.warning("手机号码不合法");
      }
    },

    // 注册事件
    submitForm(userForm) {
      this.$refs.userForm.validate(valid => {
        console.log(valid)// 如果表单验证成功 valid就是 true，否则时false
        if (valid) {
          console.log(123)
          let {password2,...userData} = this.userForm
          console.log(userData)
          this.$axios.post("/accounts/register",userData)
          .then(res => {
            console.log(res)
            if(res.status === 200) {
              this.$message.success('注册成功')
            }
          })
        } else {
          console.log(456)
          this.$message.warning('输入不合法')
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
</style>