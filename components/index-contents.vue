<template>
  <ul class="index-contents">
    <li v-for="(item, idx) in list" :key="idx">
      <NuxtLink
        v-item-active="{ text: item.label, index: idx }"
        :to="{ path: item.path }"
      ></NuxtLink>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: []
    }
  }
};
</script>
<style scoped lang="scss">
.index-contents {
  padding: 10px;
  li {
    height: 120px;
    font-size: 45px;
    border-radius: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: bold;
    &:nth-child(1) {
      background: url('../assets/img/bg/1.jpeg') no-repeat center center;
      background-size: cover;
    }
    &:nth-child(2) {
      background: url('../assets/img/bg/2.jpeg') no-repeat center center;
      background-size: cover;
    }
    &:nth-child(3) {
      background: url('../assets/img/bg/3.jpeg') no-repeat center center;
      background-size: cover;
    }
    &:nth-child(4) {
      background: url('../assets/img/bg/4.jpeg') no-repeat center center;
      background-size: cover;
    }
    &:nth-child(5) {
      background: url('../assets/img/bg/5.jpeg') no-repeat center center;
      background-size: cover;
    }
    &:nth-child(6) {
      background: url('../assets/img/bg/6.jpeg') no-repeat center center;
      background-size: cover;
    }
    &:nth-child(7) {
      background: url('../assets/img/bg/7.jpeg') no-repeat center center;
      background-size: cover;
    }
    &:nth-child(8) {
      background: url('../assets/img/bg/8.jpeg') no-repeat center center;
      background-size: cover;
    }
    a.active {
      font-size: 55px;
    }
  }
}
</style>
