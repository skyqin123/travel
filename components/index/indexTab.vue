<template>
  <div class="indexTab">
    <div class="tab_title">
      <div @click="handleClickTitle(index)" :class="{title_item:true,active:currentIndex === index}" v-for="(item,index) in tabList" :key="index"> {{item.title}}</div>
    </div>

    <div class="inp">
      <input type="text" :placeholder="tabList[currentIndex].ph">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabList:[
        {title: '攻略', ph:'攻略'},
        {title: '酒店', ph:'酒店'},
        {title: '机票'}
      ],
      currentIndex: 0
    }
  },
  methods: {
    handleClickTitle (index) {
      this.currentIndex = index

      if(index === 2) {
        this.$router.push('/air')
      }
    }
  }

}
</script>

<style lang="less" scoped>
.indexTab {
  width: 550px;
}
.tab_title{
  display: flex;
  padding: 10px;
  .title_item {
    padding: 5px;
    margin: 0 4px;
    font-size: 30px;
    background: rgba(0, 0, 0,.7);
    color: #fff;
  }
  .active {
    background: #eee;
    color: skyblue
  }
  
}
.inp {
      width: 100%;
      height: 50px;
    input{
      display: block;
      width: 100%;
      height: 50px;
      border: none;
      outline: none;
      font-size: 30px;
      padding-left:10px;
      border-radius: 4px;
    }
  }

</style>