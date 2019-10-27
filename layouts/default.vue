<template>
  <div class="default">
    <commonHeader></commonHeader>
    <!-- 这里的 <nuxt /> 就是page文件里的每一个 * .vue 文件 -->
    <nuxt />
    <commonFooter></commonFooter>
  </div>
</template>

<script>
import commonHeader from "@/components/commonHeader.vue"
import commonFooter from "@/components/commonFooter.vue"
export default {
  components: {
    commonHeader,
    commonFooter
  }
}
</script>

<style lang="less" scoped>

</style>