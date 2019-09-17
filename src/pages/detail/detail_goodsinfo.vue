<template>
    <div class="goodsinfo" v-if="Object.keys(goodsinfo).length!==0">
        <div class="goodsinfo_title">{{goodsinfo.desc}}</div>
        <div class="goodsinfo_top">
            <span>￥{{goodsinfo.realprice}}</span>
            <span>{{goodsinfo.oldprice}}</span>
            <span>{{goodsinfo.discount}}</span>
        </div>
        <div class="goodsinfo_center" >
            <div v-for="item in goodsinfo.columns">
                {{item}}
            </div>
        </div>
        <div class="goodsinfo_bottom">
            <div v-for="(item,index) in goodsinfo.services" :key="index" v-if="index<3">
                <img :src="item.icon" alt="" v-if="item.icon">
                <span>{{item.name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "detail_goodsinfo",
        data() {
            return {}
        },
        props: {goodsinfo:Object}
    }
</script>

<style scoped>
    .goodsinfo_title {
        font-size: 18px;
        margin: 8px 0;
    }

    .goodsinfo_top {
        display: flex;
        line-height: 30px;
        margin-top: 10px;
        margin-bottom: 15px;
    }

    .goodsinfo_top span:first-child {
        color: #ff5777;
        font-size: 22px;
    }

    .goodsinfo_top span:nth-child(2) {
        color: #666;
        text-decoration: line-through;
        margin: 0 5px;
    }

    .goodsinfo_top span:last-child {
        color: #fff;
        background-color: #ff5777;
        border-radius: 7px;
        width: 40px;
        height: 20px;
        text-align: center;
        line-height: 20px;
    }

    .goodsinfo_center {
        display: flex;
        justify-content: space-between;
        color: #666;
        border-bottom: 1px solid #888;
        padding-bottom: 10px;
    }


    .goodsinfo_bottom {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        border-bottom: 1px solid #888;
        padding-bottom: 20px;
    }

    .goodsinfo_bottom img {
        width: 20px;
        height: 20px;
        vertical-align: top;
    }

</style>