<template>
  <div id="app">
    <!--keep-alive让页面保持在我们上一次操作的位置，不让它被销毁,加上exclude这个属性是为了让这个页面重新被创建，不然的话获取的详情页的数据都是一样的-->
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <bottombar class="bottombar"></bottombar>
  </div>
</template>

<script>
  import bottombar from 'components/common/bottombar'

export default {
  name: 'App',
  components:{
    bottombar:bottombar,
  }
}
</script>

<style>
  @import "css/base.css";
  *{
    margin: 0;
    padding: 0;
  }
.bottombar{
  background-color: #fff;
}
</style>
