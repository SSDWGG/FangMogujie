<template>
  <swiper>
    <swiper-item v-for="(item,index)  in detailswiper" :key="index">
      <img :src="item">
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem} from "components/common/swiper"
export default {
  name: "detailSwiper",
  components:{
    Swiper,
    SwiperItem
  },
  props:{                 //要求传递过来一个参数 list然后上面使用这个list
    detailswiper:{
      type:Array,
      default(){        //// 数组／对象的默认值应当由一个工厂函数返回
        return []
      }
    }
  }
}
</script>

<style scoped>

</style>
