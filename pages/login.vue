<template>
  <div class="container">
    <input class="username" placeholder="请输入用户名" v-model="username" />
    <a class="btn" @click="login()">登陆</a>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  layout: "index",
  middleware: ["checkLogin"],
  data() {
    return {
      username: ""
    };
  },
  methods: {
    async login() {
      if (this.checkForm()) {
        const __token__ = await this.$axios.$post("/api/userLogin", {
          username: this.username
        });
        if (__token__) {
          this.$cookies.set("__token__", __token__);
          this.$router.push({ path: "./" });
        } else {
          alert("登陆失败");
        }
      }
    },
    checkForm() {
      if (!this.username) {
        alert("用户名不能为空");
        return false;
      }
      return true;
    }
  }
});
</script>

<style scoped>
.username {
  width: 220px;
  height: 40px;
  position: absolute;
  left: 50%;
  top: 20%;
  margin-left: -110px;
  border-radius: 5px;
  text-align: center;
}
.btn {
  display: block;
  width: 160px;
  height: 50px;
  background: #333;
  color: #fff;
  text-align: center;
  line-height: 55px;
  border-radius: 5px;
  font-size: 20px;
  position: absolute;
  left: 50%;
  top: 30%;
  margin-left: -80px;
}
</style>
