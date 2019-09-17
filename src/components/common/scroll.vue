<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        name: "scroll",
        data() {
            return {
                scroll: '',
            }
        },
        mounted() {
            this.scroll = new BScroll(this.$refs.wrapper, {
                click: true,
                //probetype:1 2 3不同属性的设置效果不一样，所以这里最好的做法是需要什么样的效果就传什么样的属性
                probeType: this.probeType,
                //pullUpLoad这个属性，是better-scrol提供监听上拉加载更多的事件，是true的时候就可以监听到底部了
                pullUpLoad: this.pullUpLoad
            })
            //这是实时监听滚动的坐标的函数
            this.scroll.on('scroll', (position) => {
                this.$emit('scroll', position)
            })
            //当pullUpLoad=true的时候，就可以创建下面的函数了
            this.scroll.on('pullingUp', () => {
                this.$emit("pullingUp")
            })
        },
        methods: {
            //让元素回到顶部的方法
            scrollTo(x, y, time) {
                //前面加了这个this.scroll&&的原因是为了更严谨，而且可以避免一些错误
                this.scroll&&this.scroll.scrollTo(x, y, time)
            },
            finishPullUp(){
                this.scroll.finishPullUp()
            },
            refresh(){
                this.scroll&&this.scroll.refresh()
            }

        },
        props: {
            //这里小写是不行的？probetype，一定要是probeType
            probeType: {
                type: Number,
                default: 0
            },
            pullUpLoad: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped>

</style>