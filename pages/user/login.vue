<template>
  <div class="login">
    <div class="loginForm">
      <div class="login_title">
        <div>登录</div>
        <div>注册</div>
      </div>
      <div class="login_content">
        <RegisterForm></RegisterForm>
      </div>
    </div>
  </div>
</template>

<script>
import RegisterForm from "@/components/user/RegisterForm.vue";
export default {
  components: {
    RegisterForm
  }
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  min-width: 1000px;
  height: 700px;
  background: url(http://127.1:1337/assets/images/th03.jfif) no-repeat center
    center;
  position: relative;
}
.loginForm {
  // display: flex;
  // justify-content: space-around;
  position: absolute;
  width: 500px;
  background: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .login_title {
    display: flex;
    justify-content: space-between;

    div {
      flex: 1;
      text-align: center;
      font-size: 30px;
      background-color: #eee;
      padding: 10px 0px;
      // margin-bottom: 20px;
    }
    .active {
      position: relative;
      color:orange;
      background-color: #fff;
      &::before{
        content: "";
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 3px;
      }
    }
  }
  .login_content {
    padding: 20px;
  }
}
</style>