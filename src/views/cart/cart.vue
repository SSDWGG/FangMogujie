<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">购物车{{length}}</div>
    </nav-bar>
    <car-list class="carlist"></car-list>

  </div>

</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import  {mapGetters} from "vuex";
import CarList from "./childcomps/CarList";

export default {
  name: "cart",
  components:{
    NavBar,
    CarList
  },
  computed:{
    // length(){
    //   return this.$store.state.carlist.length
    // },
    //使用功能mapgetters  印射得到getter函数里面的方法
    ...mapGetters({
      length:'carlength',
      carlist:'carlist'
    })
  }
}
</script>

<style scoped>
.nav-bar{
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 800;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
}
.carlist{
  padding-top: 44px;
  padding-bottom: 49px;
  width: 100%;
}
</style>
