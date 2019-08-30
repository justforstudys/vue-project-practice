<template>
  <section class="login-page">
    <div class="wrapper">
      <div class="login-form-wrapper">
        <div class="login-form-header">
          <span>用户登录</span>
        </div>
        <div class="login-form-content">
          <el-form label-position="right" label-width="50px" ref="loginForm" :model="loginFormData" :rules="rules">
            <el-form-item label="用户" prop="username" class="without-true-required">
              <el-input v-model="loginFormData.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password" class="without-true-required">
              <el-input v-model="loginFormData.password"></el-input>
            </el-form-item>
            <el-form-item class="without-label">
              <el-button type="success" @click="login">登 录</el-button>
            </el-form-item>
          </el-form>
          <div class="register-wrapper">
            <span>还没有账号?请注册</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      title: '测试代码',
      loginFormData: {
        username: '',
        password: ''
      },
      rules: {
        username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
        password: [{required: true, message: '请输入密码', trigger: 'blur'}]
      }
    }
  },
  methods: {
    login () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$router.push('/home');
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .login-page {
    width: 100%;
    height: 100%;
    background: url('../../assets/login1.jpg') no-repeat center;
    background-size: cover;
  }
  .wrapper {
    width: 100%;
    height: 300px;
    position: relative;
    top: 50%; /*偏移*/
    transform: translateY(-50%);
  }
  .login-form-wrapper {
    width: 280px;
    height: 300px;
    border-radius: 6px;
    overflow: hidden;
    margin: 0 auto;
    box-shadow: 0px 0px 15px #333333;
    .login-form-header {
      height: 50px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f17a52;
      color: white;
    }
    .login-form-content {
      padding: 30px 20px 10px;
      background: white;
      height: 250px;
      .without-label .el-button {
        width: 100% !important;
      }
      .register-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        span {
          color: #f17a52;
          cursor: pointer;
        }
      }
    }
  }
</style>