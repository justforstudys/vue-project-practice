<template>
  <section class="test">
    <span class="test-span">{{title}}</span>
    <el-button type="primary">确定</el-button>
  </section>
</template>
<script>
export default {
  data () {
    return {
      title: '测试代码'
    }
  }
}
</script>
<style lang="scss" scoped>
  .test {
    .test-span {
      font-size: 20px;
    }
  }
</style>