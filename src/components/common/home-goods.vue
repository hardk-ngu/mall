<template>
    <div class="home_goods">
        <div class="goods_item" v-for="item in goods" @click="itemclick(item.iid)">
            <a href="#">
                <img :src="item.show.img" alt="" @load="imageload">
            </a>
            <div class="goods_info">
                <p>{{item.title}}</p>
                <span class="price">{{item.price}}</span>
                <span><img src="~assets/img/common/favor.png" alt="" style="width: 20px;height:20px"></span>
                <span>{{item.cfav}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home-goods",
        data() {
            return {}
        },
        props: {
            goods: Array,
        },
        methods: {
            //当图片加载完成后会触发这个方法
            imageload() {
                //这是实现监听不同页面图片加载的方法，因为两个地方都是使用了同一个组件，两个地方都要
                // if (this.$route.path.indexOf('/home')){
                //     this.$bus.$emit('homeimageload')
                // } else if(this.$route.path.indexOf('/detail')){
                //   this.$bus.$emit('detailimageload')
                // }
                this.$bus.$emit('imgloadone')
            },
            itemclick(iid){
                // this.$router.push('/detail/'+ iid )
                this.$router.push({
                    path:'/detail',
                    query:{
                        iid:iid
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .home_goods {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .goods_item {
        width: 47%;
    }

    .goods_item img {
        width: 100%;
        border-radius: 7px;
    }

    .goods_info {
        text-align: center;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .goods_info p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #666;
        margin-bottom: 3px;
    }

    .goods_info img {
        vertical-align: top;
        margin: 0 2px;
    }

    .goods_info .price {
        color: #ff5777;
    }

    .goods_info span:last-child {
        color: #555;
    }

</style>