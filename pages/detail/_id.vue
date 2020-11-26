<template>
  <div class="container" v-if="detail">
    <div class="anthor">
      <img :src="detail.userPic" />
      <span>{{ detail.userName }}</span>
    </div>
    <img class="loading" src="~/assets/img/loading.png" />
    <div class="title">{{ detail.title }}</div>
    <img class="cover" :src="detail.indexImage" />
  </div>
</template>
<script>
import Vue from "vue";

export default {
  data() {
    return {
      detail: null
    };
  },
  /**
   * 参数校验，必须为Number类型
   */
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  async asyncData({ $axios, params, error }) {
    const detail = await $axios.$get(`/api/getDetail?id=${params.id}`);
    if (detail) {
      return { detail: detail };
    } else {
      error({ statusCode: 404, message: "Post not found" });
    }
  },
  middleware: ["checkLogin"],
  head() {
    if (!this.detail) {
      return { title: `直播详情页` };
    }
    return { title: `直播详情页 - ${this.detail.title}` };
  }
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: start;
  overflow: hidden;
  .cover {
    min-width: 100%;
    min-height: 100%;
    filter: blur(15px);
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .anthor {
    position: absolute;
    left: 15px;
    top: 15px;
    display: flex;
    align-items: center;
    z-index: 100;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50px;
      overflow: hidden;
    }
    span {
      font-size: 20px;
      color: #fff;
      margin-left: 10px;
    }
  }
  .loading {
    position: fixed;
    left: 50%;
    top: 50%;
    width: 50px;
    height: 50px;
    z-index: 50;
    margin: -25px 0 0 -25px;
    animation: turn 1s linear infinite;
  }
  .title {
    text-align: center;
    width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: absolute;
    bottom: 5%;
    left: 5%;
    z-index: 50;
    font-size: 32px;
    color: rgb(0, 125, 129);
    font-weight: bold;
  }
}
@keyframes turn {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
