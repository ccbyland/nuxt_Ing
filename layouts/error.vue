<template>
  <div class="error">
    <div class="title">{{ statusCode }} - {{ message }}</div>
    <NuxtLink class="jump" :to="{ path: '/' }">回到首页</NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500;
    },
    message() {
      return (this.error && this.error.message) || "Error";
    }
  }
};
</script>
<style lang="scss" scoped>
.error {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  .title {
    margin: 100px 0 20px;
  }
  .jump {
    font-size: 20px;
    font-weight: bold;
    color: rgb(0, 111, 113);
    text-decoration: underline;
  }
}
</style>
