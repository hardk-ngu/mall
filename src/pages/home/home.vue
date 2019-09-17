<template>
    <div id="home" class="wrapper">
        <!--导航区域-->
        <navbar class="navbar">
            <div class="navbar_center" slot="navbar_center">购物街</div>
        </navbar>
        <tabbar :title="titles" class="fixtabbar" @tabclick="tabclick" ref="fixtabbar" v-show="isfix"></tabbar><!--假象类型选择区-->
        <scroll class="scroll_content" ref="scroll" :probe-type="3" @scroll="goodscroll" :pull-up-load="true"
                @pullingUp="loadmore">
            <swiper :banner="banners" @imageload="swiperimageload"></swiper><!--轮播图-->
            <recommend :recommend="recommends"></recommend><!--推荐区域-->
            <div class="popular_weekly">
                <a href="#">
                    <img src="../../../src/assets/img/home/recommend_bg.jpg" alt="">
                </a>
            </div><!--每周流行-->
            <tabbar :title="titles" class="tabbar" @tabclick="tabclick" ref="tabbar"></tabbar><!--类型选择区-->
            <homegoods :goods="showgoods" ref="goods"></homegoods><!--类型商品区域-->
        </scroll>
        <backTop @click.native="backtop" v-show="ishowbacktop"></backTop>
    </div>
</template>

<script>
    import {gethomemultidata, getgoodsdata} from 'network/home'

    import navbar from 'components/common/navbar'
    import swiper from 'components/common/swiper'
    import tabbar from 'components/common/tabbar'
    import homegoods from 'components/common/home-goods'
    import scroll from 'components/common/scroll'
    import backTop from 'components/common/backTop'

    import recommend from './home-recommend'

    import {imagelistenermixin} from '../../common/mixin'

    export default {
        name: "home",
        mixins:[imagelistenermixin],
        data() {
            return {
                banners: [],
                recommends: [],
                titles: ['流行', '新款', '热卖'],
                goods: {
                    "pop": {page: 0, list: []},
                    "new": {page: 0, list: []},
                    "sell": {page: 0, list: []}
                },
                //设置一个默认的类型
                currentype: 'pop',
                //是否显示回到顶部图标
                ishowbacktop: false,
                //选项卡上面子组件的总高度
                tabbaroffsetop:'',
                isfix:false
            }
        },
        components: {
            navbar,
            swiper,
            recommend,
            tabbar,
            homegoods,
            scroll,
            backTop
        },
        created() {
            //获取轮播图和推荐区域的数据
            gethomemultidata().then(res => {
                this.banners = res.data.banner.list
                this.recommends = res.data.recommend.list
            })
            //获取选项卡下面的商品数据
            this.gethomegoodsdata("pop")
            this.gethomegoodsdata("new")
            this.gethomegoodsdata("sell")

        },
        mounted() {
            //通过事件总线接受goods-item传来的事件
            this.$bus.$on('imgloadone',()=>{
                this.$refs.scroll.scroll.refresh()
            })
        },
        activated(){
            this.$refs.scroll.refresh()
        },
        methods: {
            /**
             * 下面是获取数据的方法
             */
            // 获取选项卡下面的商品数据方法
            gethomegoodsdata(type) {
                const page = this.goods[type].page + 1
                getgoodsdata(type, page).then(res => {
                    this.goods[type].list.push(...res.data.list)
                    this.goods[type].page += 1
                    //要主动添加去请求finishPullUp方法，不然的话最多只能加载一次数据
                    this.$refs.scroll.finishPullUp()
                })
            },
            /**
             * 下面是事件监听方法
             */
            //接受子组件tabbar传来参数而产生的方法,然后根据索引来判断点击了哪个tab
            tabclick(index) {
                switch (index) {
                    case 0:
                        this.currentype = 'pop'
                        break
                    case 1:
                        this.currentype = 'new'
                        break
                    case 2:
                        this.currentype = 'sell'
                        break
                }
                //下面两句的作用是使真的tabbar和假的tabbar点击的标签是一致的
                this.$refs.fixtabbar.currentindex=index
                this.$refs.tabbar.currentindex=index
            },

            //让元素回到顶部的方法,可以通过在已引用的组件上添加ref属性，从而可以通过这个属性拿到组件内部的属性或方法
            backtop() {
                this.$refs.scroll.scrollTo(0, 0, 500)
                //this.$refs.scroll.scroll.scrollTo(0,0,500)这种方法也可以的
            },

            //接受scroll组件传过来的position值
            goodscroll(position) {
                this.ishowbacktop = (-position.y > 1000)
                this.isfix=(-position.y>this.tabbaroffsetop)
            },
            //上拉加载更多方法
            loadmore() {
                this.gethomegoodsdata(this.currentype)
                //这里要调用这个方法的原因是:如果图片加载的很慢的，
                // 那么这个插件计算出来的可滚动区域的高度就不准确，那么这样的话到了一定高度的时候就不能滚动了，new Bscroll里面有个属性scrollheight可以查看
                // 这样的一个bug
                this.$refs.scroll.scroll.refresh()
            },
            swiperimageload() {
                this.tabbaroffsetop=this.$refs.tabbar.$el.offsetTop
                this.$refs.scroll.refresh()

            }

        },
        computed: {
            showgoods() {
                return this.goods[this.currentype].list
            }
        }
    }
</script>

<style scoped>
    #home {
        position: relative;
        /*padding-top: 44px;*/
        /*vh:viewport-height*/
        height: 100vh;
    }

    .navbar {
        background-color: #ff5777;
        color: #fff;
        /*position: fixed;*/
        /*top: 0;*/
        /*width: 100%;*/
        /*z-index: 999;*/
    }

    .popular_weekly img {
        width: 100%;
    }

    /*这也是吸顶的一种方式*/
    /*.tabbar {*/
    /*position: sticky;*/
    /*top: 44px;*/
    /*}*/
    .scroll_content {
        /*一定要设置一个高度，不然的话会没有效果*/
        height: calc(100% - 93px);
        overflow: hidden;
        /*margin-top: 44px;*/
    }
    .fixtabbar{
        /*margin: 0;*/
        position: absolute;
        top: 44px;
        width: 100%;
        line-height: 40px;
        background-color: #fff;
        z-index: 111;
    }
</style>
