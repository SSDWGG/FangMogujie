<template>
  <div class="profile">
    <nav-bar class="nav-bar">
      <div slot="center">用户界面</div>
    </nav-bar>
    <div class="scroll-height">
      <login />
      <money />
      <div class="line"></div>
      <profile-list />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import Login from "./children/Login";
import Money from "./children/Money";
import ProfileList from "./children/profileList";


export default {
  name: "profile",
  components: { ProfileList, Money, Login, NavBar }
};
</script>

<style scoped>
.profile {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  scrollbar-color: transparent transparent;
  scrollbar-track-color: transparent;
  -ms-scrollbar-track-color: transparent;
}

.nav-bar {
  font-weight: 600;
  color: white;
  background-color: #ff8198;
}

.line {
  width: 100%;
  height: 10px;
  background-color: #eeeeee;
}

.scroll-height {
  width: 100%;
  height: 100%;
  padding-bottom: 45px;
}

</style>
