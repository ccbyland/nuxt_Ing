<template>
  <div @click="switchSkin()" class="switch-skin" :class="isWhite ? 'white' : 'black'">
    <img v-if="isWhite" src="~/assets/img/taiyang.png" />
    <img v-if="!isWhite" src="~/assets/img/yueliang.png" />
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      isWhite: 1
    };
  },
  methods: {
    switchSkin() {
      this.isWhite = !this.isWhite;
      this.$emit("handleSwitchSkin", this.isWhite);
    }
  }
});
</script>
<style lang="scss" scoped>
.switch-skin {
  width: 60px;
  height: 60px;
  border-radius: 60px;
  position: fixed;
  display: flex;
  justify-self: center;
  align-items: center;
  right: -30px;
  top: 20%;
  &.black {
    background: #fff;
  }
  &.white {
    background: rgb(177, 164, 13);
  }
}
</style>
