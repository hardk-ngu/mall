<template>
  <div class="tabbar">
    <div class="tabbar_box" @click="test">
      <router-link class="tabbar_home tabbar_item" tag="div" to="/home" id="tabbar_home">
        <img src="../../assets/img/tabbar/home.png" alt="" class="icon" v-if="!isActive1">
        <img src="../../assets/img/tabbar/home_active.png" alt="" class="active_icon" v-else>
        <div :class="{active:show===1||isActive1}">首页</div>
      </router-link>
      <router-link class="tabbar_category tabbar_item" tag="div" to="/category" id="tabbar_category">
        <img src="../../assets/img/tabbar/category.png" alt="" class="icon" v-if="!isActive1">
        <img src="../../assets/img/tabbar/category_active.png" alt="" class="active_icon" v-else>
        <div :class="{active:show===2}">分类</div>
      </router-link>
      <router-link class="tabbar_cart tabbar_item" tag="div" to="/cart" id="tabbar_cart">
        <img src="../../assets/img/tabbar/cart.png" alt="" class="icon" v-if="!isActive1">
        <img src="../../assets/img/tabbar/cart_active.png" alt="" class="active_icon" v-else>
        <div :class="{active:show===3}">购物车</div>
      </router-link>
      <router-link class="tabbar_profile tabbar_item" tag="div" to="/profile" id="tabbar_profile">
        <img src="../../assets/img/tabbar/profile.png" alt="" class="icon" v-if="!isActive1">
        <img src="../../assets/img/tabbar/profile_active.png" alt="" class="active_icon" v-else>
        <div :class="{active:show===4}">我的</div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabbar",
    data() {
      return {
        path: '',
        show: ''
      }
    },
    computed: {
      isActive1() {
        return this.path === this.$route.path
      }
    },
    methods: {
      test(event) {
        if (event.target.id === "tabbar_home") {
          this.show = 1
        } else if (event.target.id === "tabbar_category") {
          this.show = 2
        } else if (event.target.id === "tabbar_cart") {
          this.show = 3
        } else if (event.target.id === "tabbar_profile") {
          this.show = 4
        }
      }
    },
    created() {
    }
  }
</script>

<style scoped>
  .tabbar {
    position: fixed;
    bottom: 0;
    width: 100%;
  }

  .tabbar_box {
    display: flex;
    height: 49px;
    text-align: center;
    font-size: 16px;
    box-shadow: 0 0 2px #666;
  }

  .tabbar_item {
    flex: 1;
    width: 100%;
    z-index: 1;
  }

  .icon {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-bottom: 5px;
  }

  .active_icon {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-bottom: 5px;
  }

  .active {
    color: indianred;
  }
</style>
