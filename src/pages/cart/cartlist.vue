<template>
    <div class="cartlist">
        <div class="cartlist_box" v-for="item in cartlist">
            <div class="check_button">
                <div class="check" :class="{ischeck:item.checked}" @click="checked(item.iid)"></div>
            </div>
            <div class="goods_img">
                <img :src="item.image" alt="">
            </div>
            <div class="goods_info">
                <div class="title">{{item.title}}</div>
                <div class="style">{{item.style}}</div>
                <div class="price_count">
                    <span>{{item.price}}</span>
                    <span>x{{item.count}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "cartlist",
        data() {
            return {
                cartList:[]
            }
        },
        computed: {
            ...mapGetters(['cartlist'])
        },
        methods: {
            //改变checkbox选中状态方法
            checked(iid) {
                this.$store.dispatch('changeCheck',iid)
            }
        },
        created() {
        }
    }
</script>

<style scoped>
    .cartlist {
        margin-top: 5px;
    }

    .cartlist_box {
        display: flex;
        height: 130px;
        margin: 10px 0;
    }

    .cartlist_box img {
        width: 120px;
        height: 130px;
        border-radius: 8px;
    }

    .title {
        font-size: 18px;
    }

    .check_button {
        flex: 1;
        text-align: center;
    }
    .check{
        width: 30px;
        height: 30px;
        background-color: #fff;
        border-radius: 50%;
        border: 1px solid #888;
        margin-left: 7px;
        margin-top: 50px
    }
    .check_button img{
        width: 100%;
        height: 100%;
    }
    .goods_img {
        flex: 3;
    }

    .goods_info {
        flex: 4;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .ischeck{
        background:url("../../assets/img/common/right.jpg") no-repeat center ;
        background-size: 30px 30px;
    }
    .style{
        color: #888;
    }
    .price_count{
        display: flex;
        justify-content: space-between;
        font-size: 16px;
    }
</style>