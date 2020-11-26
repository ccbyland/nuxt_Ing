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
      background: rgb(130, 57, 53);
    }
    &:nth-child(2) {
      background: rgb(137, 190, 178);
    }
    &:nth-child(3) {
      background: rgb(201, 186, 131);
    }
    &:nth-child(4) {
      background: rgb(222, 211, 140);
    }
    &:nth-child(5) {
      background: rgb(222, 156, 83);
    }
    &:nth-child(6) {
      background: rgb(69, 137, 148);
    }
    &:nth-child(7) {
      background: rgb(224, 160, 158);
    }
    &:nth-child(8) {
      background: rgb(30, 41, 61);
    }
    a.active {
      font-size: 55px;
    }
  }
}
</style>
