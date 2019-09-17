<template>
    <div id="swiper">
        <div class="block">
            <el-carousel height="195px">
                <el-carousel-item v-for="(item,index) in banner" :key="item.id">
                    <div class="image_box"><img :src="item.image" alt="" @load="imageload"></div>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
    export default {
        name: "swiper",
        data() {
            return {
                isload:false
            }
        },
        props: {
            banner: Array
        },
        methods:{
            imageload(){
                //这样的做法是不用发四次，isload在这里相当于是做一个节流阀，这样性能更好
                if (!this.isload){
                    this.$emit('imageload')
                    this.isload=true
                }
            }
        }

    }
</script>

<style scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

    .image_box img {
        width: 100%;
    }
</style>