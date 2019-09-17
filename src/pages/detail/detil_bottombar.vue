<template>
    <div class="bottom_bar">
        <div class="tabbar_box">
            <div class="tabbar_home tabbar_item">
                <img src="../../assets/img/tabbar/home.png" alt="" class="icon">
                <div>客服</div>
            </div>
            <div class="tabbar_category tabbar_item" >
                <img src="../../assets/img/tabbar/category.png" alt="" class="icon">
                <div>店铺</div>
            </div>
            <div class="tabbar_cart tabbar_item">
                <img src="../../assets/img/tabbar/cart.png" alt="" class="icon">
                <div>收藏</div>
            </div>
            <div class="cart tabbar_item1" @click="addcart">
                <div>加入购物车</div>
            </div>
            <div class="buy tabbar_item1">
                <div>购买</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bottom_bar",
        data(){
            return{

            }
        },
        methods:{
            addcart(){
                this.$emit('addcart')
            }
        }
    }
</script>

<style scoped>
    .tabbar_box {
        display: flex;
        height: 49px;
        text-align: center;
        font-size: 16px;
        box-shadow: 0 0 2px #666;
        background-color: #fff;
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
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
    .tabbar_item1{
        flex: 2;
        line-height: 49px;
    }
    .cart{
        background-color: yellow;
        font-size: 18px;
    }
    .buy{
        background-color: #ff5777;
        font-size: 18px;
        color: #fff;

    }
</style>