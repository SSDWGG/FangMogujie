<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommends",
  props:{
    recommends:{
      type:Array,
      default(){
        return[]
      }
    }
  }
}
</script>

<style scoped>
  .recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding-top: 2px;
    border-bottom: 8px solid #eeeeee;
  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item img{
    width: 50px;
    height: 50px;
    /*margin-bottom: 10px;*/
  }
</style>
