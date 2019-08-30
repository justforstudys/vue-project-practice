<template>
  <section class="home-page">
    <el-container>
      <el-aside width="200px">
        <!-- 菜单 -->
        Aside
      </el-aside>
      <el-container>
        <el-header>
          <!-- 头部信息 -->
          Header
        </el-header>
        <el-main>
          <!-- 主体显示区 -->
          Main
        </el-main>
      </el-container>
    </el-container>
  </section>
</template>

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