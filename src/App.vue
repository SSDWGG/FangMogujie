<template>
  <div id="app">
    <keep-alive>
      <!--  exclude="detail"  -->
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar
      class="maintabbar"
      v-if="this.$route.meta.showTab"
    ></main-tab-bar>
    <!--    <main-tab-bar v-show="mtb"></main-tab-bar>-->
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar";
export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style>
@import "assets/css/base.css";
.maintabbar {
  z-index: 99999999;
}
</style>
