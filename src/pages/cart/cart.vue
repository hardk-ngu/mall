<template>
    <div class="cart_page">
        <navbar class="navbar">
            <div slot="navbar_center">购物车({{cartlength}})</div>
        </navbar><!--导航栏-->
        <cartlist></cartlist> <!--购买的商品-->
        <totalprice ></totalprice><!--计算总价区域-->
    </div>
</template>

<script>
    import navbar from 'components/common/navbar'

    import cartlist from './cartlist'
    import totalprice from './cart_totalprice'

    //这个叫mapGetters辅助函数，记得是从vuex中引入
    import {mapGetters}  from 'vuex'
    export default {
        name: "cart",
        data(){
            return{

            }
        },
        components:{
            navbar,
            cartlist,
            totalprice
        },
        computed:{
            ...mapGetters(['cartlength'])
        }
    }
</script>

<style scoped>
.navbar{
    background-color: #ff5777;
    color: #fff;
    font-size: 18px;
    margin: 0.1rem;
}
</style>
