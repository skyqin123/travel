<template>
  <div class="login_form">
    <el-form :model="userForm" :rules="rules" ref="userForm" class="demo-userForm">
      <!-- 用户名 -->
      <el-form-item prop="username">
        <el-input v-model="userForm.username" placeholder="请输入手机号"></el-input>
      </el-form-item>

      <!-- 密码 -->
      <el-form-item prop="password">
        <el-input v-model="userForm.password" placeholder="请输入密码"></el-input>
      </el-form-item>

      <!-- 登录按键 -->
      <el-form-item>
        <el-button style="width:100%" type="primary" @click="submitLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userForm: {
        username: "13123456789",
        password: "123456"
      },
      rules: {
        username: [
          { required: true, message: "请输入手机号", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitLogin() {
      //  this.$store.dispatch('user/setUser',this.userForm)
      //   .then( res => {
      //     console.log(123456)
      //     console.log(res)
      //   })
// console.log(this)
//       this.$store.dispatch("user/setUser", this.userForm).then(res => {
//         // 1 弹出提示
//         // 2 跳转页面
//         this.$message.success("登录成功");
//         setTimeout(() => {
//           this.$router.push("/");
//         }, 1000);
//       });
      this.$refs.userForm.validate(valid => {
        if (valid) {
          let aaa = this.$store.dispatch('user/setUser',this.userForm)
          console.log(aaa);  // 返回一个promise 对象
          
          aaa.then( res => {
            // console.log(123456)
            // console.log(res)// 此时返回的res是undefined
            this.$message.success('登录成功')
            setTimeout(() => {
              this.$router.push('/')
            }, 2000);
          })
        } else {
          this.$message.warning('输入有误，请重新输入')
          return false;
        }
      })
    }
  }
};
</script>

<style lang="less" scoped>
</style>