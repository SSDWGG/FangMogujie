<template>
  <swiper>
    <swiper-item v-for="(item,index)  in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem} from "components/common/swiper"

export default {
  name: "HomeSwiper",
  components:{
    Swiper,
    SwiperItem
  },
  props:{                 //要求传递过来一个参数 list然后上面使用这个list
    banners:{
      type:Array,
      default(){        //// 数组／对象的默认值应当由一个工厂函数返回
        return[]
      }
    }
  }
}

</script>

<style scoped>

</style>
