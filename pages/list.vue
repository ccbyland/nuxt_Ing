<template>
  <div class="container">
    <ul>
      <li v-for="(item, idx) in list" :key="idx">
        <nuxt-link :to="{ path: '/detail/' + item.id }">
          <img v-lazy="item.indexImage" />
          <div class="content">
            <span>{{ idx + 1 }} - {{ item.title }}</span>
            <span>{{ item.desc }}</span>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import reachBottom from "../mixins/reachBottom.js";

export default Vue.extend({
  data() {
    return {
      pageIndex: 0,
      list: []
    };
  },
  async asyncData({ $axios }) {
    const list = await $axios.$get(`/api/getList?pageIndex=0&pageSize=10`);
    return { list };
  },
  mixins: [reachBottom],
  middleware: ["checkLogin"],
  layout: "top-content",
  methods: {
    async getList() {
      if (this.isLastPage) {
        return;
      }
      this.pageIndex = ++this.pageIndex;
      const _list = await this.$axios.$get(
        `/api/getList?pageIndex=${this.pageIndex}&pageSize=10`
      );
      if (_list.length) {
        this.list = this.list.concat(_list);
      } else {
        this.isLastPage = true;
      }
    },
    reachBottom() {
      this.getList();
    }
  },
  head() {
    return { title: "直播列表页" };
  }
});
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: start;
  ul {
    padding: 10px;

    > li > a {
      border: 2px solid #eee;
      margin-bottom: 10px;
      height: 120px;
      display: flex;
      justify-content: start;
      border-radius: 10px;
      overflow: hidden;
      img {
        width: 120px;
        height: 120px;
      }

      .content {
        display: flex;
        flex-direction: column;
        justify-self: start;
        margin-left: 10px;
        flex: 1;
        span {
          &:nth-child(1) {
            margin: 40px 0 20px;
            color: #333;
            font-weight: bold;
            width: 90%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          &:nth-child(2) {
            color: #999;
          }
        }
      }
    }
  }
}
</style>
