<template>
    <div id="detail_comment">
        <div class="comment_box">
            <div class="comment_box_top">
                <span>用户评价</span>
                <span>更多</span>
            </div>
            <div class="comment_box_content">
                <div class="user_info">
                    <img :src="detail_user_comment.avatar" alt="">
                    <span>{{detail_user_comment.uname}}</span>
                </div>
                <div class="user_comment">
                    {{detail_comment.content}}
                </div>
                <div class="user_comment_img">
                    <span>{{detail_comment.created | showdate}}</span>
                    <span class="goods_style">{{detail_comment.style}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {format} from "../../common/tools"
    export default {
        name: "detail_comment",
        data(){
            return{

            }
        },
        props:{detail_comment:Object,detail_user_comment:Object},
        filters:{
            showdate(value){
                format()
                return new Date(value*1000).Format("yyyy-MM-dd")
            }
        }
    }
</script>

<style scoped>
.comment_box_top{
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    margin-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #888;
}
    .user_info img{
        width: 50px;
        height: 50px;
        margin-right: 8px;
        vertical-align: middle;
    }
    .user_info{
        font-size: 18px;
        margin-top: 8px;
    }
    .comment_box_content{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 150px;
    }
    .goods_style{margin-left: 8px}
</style>