<template>
<div class="tab-control">
  <div v-for="(item,index) in titles"
       class="tab-control-item"
       :class="{active:index===currentindex}"
        @click="test(index)">
    <span>{{item}}</span>
  </div>
</div>
</template>

<script>
export default {
  name: "TabControl",
  props:{
    titles:{
      type:Array,
      default(){            //把要显示的三行文字传入
        return []
      }
    }

  },
  data(){
    return{
      currentindex : 0
    }
  },
  methods:{
    test(index){
      this.currentindex=index  //  数据缓存的方法写循环中的活跃显示
      this.$emit("tabclick",index)         //点击事件触发更换商品显示
    }
  }
}
</script>

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
}

.tab-control-item span {
  padding: 5px;
}

.active {
  color: var(--color-high-text);
}

.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>
