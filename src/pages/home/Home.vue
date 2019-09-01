<template>
  <section class="home-page">
    <el-container>
      <el-aside width="200px">
        <!-- 菜单 -->
        <div @click="toComputedCenter">计算中心</div>
        <div @click="toAssitsCenter">资源中心</div>
      </el-aside>
      <el-container>
        <el-header>
          <!-- 头部信息 -->
          Header
        </el-header>
        <el-main>
          <!-- 主体显示区 -->
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </section>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    toComputedCenter () {
      //路由跳转
      this.$router.push('/computed')
    },
    toAssitsCenter () {
      //路由跳转
      this.$router.push('/assets')
    }
  }
}
</script>

<style lang="scss" scoped>
  .home-page {
    width: 100%;
    height: 100%;
  }
  .el-container {
    height: 100%;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>