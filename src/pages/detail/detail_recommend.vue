<template>
    <div class="detail_recommend">
        <div class="recommend_box" v-for="item in detail_recommend">
            <img :src="item.image" alt="" @load="imageload">
        </div>
    </div>
</template>

<script>
    import {debounce} from "../../common/tools"

    export default {
        name: "detail_recommend",
        data(){
            return {}
        },
        props:{detail_recommend:Array},
        methods:{
            imageload(){
            this.$emit('detailimageload')
            }
        }
    }
</script>

<style scoped>
.recommend_box img{
    width: 100%;
    height: auto;
}
</style>