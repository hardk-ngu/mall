<template>
    <div id="detail_page">
        <!--商品详情导航栏-->
        <navbar class="navbar" ref="navbar">
            <div class="back_icon" slot="navbar_left" @click="go_back">
                <img src="~assets/img/common/arrow-right.png" alt="">
            </div>
            <div class="title" slot="navbar_center">
                <div class="titles" :class="{active:currentindex===index}" v-for="(item,index) in titles"
                     @click="title_click(index)">
                    {{item}}
                </div>
            </div>
        </navbar>
        <scroll ref="scroll" class="detail_scroll" @scroll="detail_scroll" :probe-type="3">
            <div id="swiper">
                <div class="block">
                    <el-carousel>
                        <el-carousel-item v-for="(item,index) in topimage">
                            <div class="image_box"><img :src="item" alt=""></div>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div><!--商品详情轮播图-->
            <goodsinfopart :goodsinfo="goodsinfo" ref="goodsinfo"></goodsinfopart><!--商品详情信息区域-->
            <shopinfo :skuInfo="skuInfo" @imageload="imagelistload" ref="shopinfo"></shopinfo><!--商品详情店铺区域-->
            <comment :detail_comment="comment" :detail_user_comment="user_comment" ref="comment"></comment><!--商品详情中的评论区域-->
            <recommend :detail_recommend="recommend" @detailimageload="detailimageload" ref="recommend"></recommend><!--商品详情中的推荐商品-->
        </scroll>
        <bottombar @addcart="addcart"></bottombar>
    </div>
</template>

<script>
    import navbar from 'components/common/navbar'

    import {getdetaildata, goodsinfo, Shop, get_detail_recommend} from "network/detail"

    import goodsinfopart from './detail_goodsinfo'
    import shopinfo from './detail_shopinfo'
    import comment from './detail_comment'
    import recommend from './detail_recommend'
    import bottombar from './detil_bottombar'

    import scroll from 'components/common/scroll'

    import {imagelistenermixin} from '../../common/mixin'

    import {debounce} from "../../common/tools"

    // import {mapActions} from 'vuex' mapActions辅助函数

    export default {
        mixins:[imagelistenermixin],
        name: "detail",
        data() {
            return {
                iid: null,
                titles: ['商品', '参数', '评论', '推荐'],
                currentindex: 0,
                topimage: [],
                goodsinfo: {},
                shopinfo: {},
                skuInfo: {},
                comment: {},
                recommend:[],
                user_comment:{},
                topYs:[],
                detail_offsetTop:{},

            }
        },
        created() {
            //获取路由传递过来的值
            //this.iid=this.$route.params.iid
            this.iid = this.$route.query.iid
            //获取详情页的商品信息头部
            getdetaildata(this.iid).then(res => {
                const data = res.result
                this.topimage = data.itemInfo.topImages
                this.goodsinfo = new goodsinfo(data.itemInfo, data.columns, data.shopInfo.services)
                //获取商品详情店铺信息
                this.shopinfo = new Shop(data.shopInfo)
                //获取商品详情店铺信息下面的多张商品图片
                this.skuInfo = data.skuInfo
                //获取商品详情下面的评论信息
                if (data.rate.cRate !== 0) {
                    this.comment = data.rate.list[0]
                    this.user_comment=data.rate.list[0].user
                }
            });
            //获取商品详情里面的推荐信息
            get_detail_recommend().then(res=>{
                this.recommend=res.data.list
            })

        },
        components: {
            navbar,
            goodsinfopart,
            shopinfo,
            scroll,
            comment,
            recommend,
            bottombar

        },
        methods: {
            // ...mapActions(['addcart']) 将vuex里面方法映射到actions中
            title_click(index) {
                this.currentindex = index
                //根据每个组件的offsetTop，点击跳转到对应的区域
                this.$refs.scroll.scrollTo(0,-this.topYs[index],300)
            },
            go_back() {
                this.$router.back()
            },
            //接受子组件detail_shopinfo传来的函数，这样做是为了不让页面出现不能滑动的情况，
            // 这样方便better-scroll组件计算高度
            imagelistload() {
                this.$refs.scroll.refresh()
            },
            detailimageload(){
                //等所有的图片都加载完成的之后在获取高度
                this.detail_offsetTop()
            },
            //下面的功能是当滑到一定的高度的时候就修改对应的标题
            detail_scroll(position){
                const positionY=-position.y
                let topYslength=this.topYs.length
                for (let i=0;i<topYslength;i++){
                    //这句话的意思是titleindex和i相等的时候，就不执行多次了，执行一次就好，
                    // 前半部分的意思是判断positionY是否在topY数组中前三个值的范围内，并且在0-1，1-2这样的区间内
                    //后半部分则是判断positionY是否在topY数组中最后一个值的范围中
                    if (this.currentindex!==i&&i<topYslength-1&&positionY>=this.topYs[i]&&positionY<this.topYs[i+1]
                        ||(i===topYslength-1&&positionY>=this.topYs[i]))
                    {
                        this.currentindex=i
                    }
                }

            },
            //点击添加到购物车，加到vuex中
            addcart(){
            const product={
                image:this.topimage[0],
                title:this.goodsinfo.title,
                price:this.goodsinfo.realprice,
                iid:this.iid,
                style:this.comment.style,
            }
            // this.$store.commit('addcart',product)
            this.$store.dispatch('addcart',product).then(res=>{
                Toast(res)
            })

            }
        },
        mounted() {
            //this.$bus.$on('detailimageload')
            //下面放在created或者mounted都可以，因为下面的函数只是为了节流用的
            this.detail_offsetTop=debounce(()=>{
                this.topYs=[]
                this.topYs.push(0)
                this.topYs.push(this.$refs.goodsinfo.$el.offsetTop)
                this.topYs.push(this.$refs.comment.$el.offsetTop)
                this.topYs.push(this.$refs.recommend.$el.offsetTop)
            },500)
        }
    }
</script>

<style scoped>
    #detail_page {
        position: relative;
        z-index: 7;
        background-color: #fff;
        height: 100vh;
    }

    .title {
        display: flex;
    }

    .titles {
        flex: 1;
    }

    .active {
        color: #ff5777;
    }

    .back_icon img {
        width: 25px;
        height: 25px;
        background: rgba(100, 100, 100, 0.2);
        transform: rotate(180deg);
        margin-top: 10px;

    }

    #swiper img {
        width: 100%;
        height: auto;
    }

    .detail_scroll {
        /*height: calc(100% - 44px);*/
        position: absolute;
        top: 44px;
        overflow: hidden;
        bottom: 49px;
    }

    .navbar {
        background-color: #fff;
    }
</style>
