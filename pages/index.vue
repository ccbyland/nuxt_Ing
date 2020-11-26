<template>
  <div class="index" :class="skinType">
    <index-contents :list="list"/>
    <no-ssr>
      <switch-skin @handleSwitchSkin="handleSwitchSkin"></switch-skin>
    </no-ssr>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      skinType: "white",
    };
  },
  async asyncData({ $axios }) {
    const list = await $axios.$get("/api/getIndex");
    return {list}
  },
  methods: {
    handleSwitchSkin(isWhite) {
      this.skinType = isWhite ? "white" : "black";
    },
  },
  middleware: [ "checkDate" , "checkLogin"],
  layout: "top-content-bottom",
  head() {
    return { title: "直播首页" };
  },
});
</script>

<style lang="scss" scoped>
.index {
  min-height: calc(100vh - 120px);
  &.white {
    filter: grayscale(0%);
  }
  &.black {
    filter: grayscale(100%);
  }
}
</style>
