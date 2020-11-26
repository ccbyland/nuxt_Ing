import Vue from "vue";
Vue.directive("item-active", {
  inserted: function(el, binding) {
    const { index, text } = binding.value;
    if (index == 0) {
      el.innerHTML = `【 ${text} 】`;
      el.classList.add("active");
    }else{
      el.innerHTML = text;
    }
  }
});
