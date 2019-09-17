<template>
    <div class="shop_info">
        <div class="goods_show_title">{{skuInfo.title}}</div>
        <div class="goods_show" v-for="item in skuInfo.skus">
            <img :src="item.img" alt="" @load="imageload">
        </div>
    </div>
</template>

<script>
    export default {
        name: "detail_shopinfo",
        data() {
            return {
                counter: 0,
                imagelength: 0
            }
        },
        props: {skuInfo: Object},
        methods: {
            imageload(){
                //这里是为了只传递一次而不用传递多次，所以等到所有的图片都加载完成后，才放一次传递函数
                if(++this.counter === this.imagelength){
                    this.$emit("imageload")
    }
    }
    },
        watch:{
            goods_list(){
                //刚开始传过来的是空的，但是在某一个时间肯定会传过来真正的值，所以这里要监听
                this.imagelength=this.skuInfo.skus.length
            }

        }

    }
</script>

<style scoped>
    .goods_show_title {
        font-size: 18px;
        color: #666;
        margin: 10px 0;
    }

    .goods_show img {
        width: 100%;
        height: auto;
    }
</style>