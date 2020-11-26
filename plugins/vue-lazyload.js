import Vue from "vue";
import VueLazyLoad from "vue-lazyload";

Vue.use(VueLazyLoad, {
  attempt: 1,
  loading: require("~/assets/img/img-loading.png"),
  error: require("~/assets/img/img-error.png")
});
