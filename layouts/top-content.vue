<template>
  <div class="layout">
    <g-header />
    <div class="content">
      <nuxt />
    </div>
  </div>
</template>
<script>
import Vue from "vue";

export default Vue.extend({});
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  justify-content: start;
  .content {
    min-height: calc(100vh - 120px);
  }
}
</style>
