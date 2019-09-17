<template>
    <div class="home_recommend">
        <div class="recommend_box" v-for="item in recommend">
            <a href="#">
                <img :src="item.image" alt="">
                <p>{{item.title}}</p>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home-recommend",
        data() {
            return {}
        },
        props: {
            recommend: Array
        }
    }
</script>

<style scoped>
    .home_recommend {
        display: flex;
        text-align: center;
        margin-top: 20px;
        padding-bottom: 30px;
        border-bottom: 5px solid #d0d0d0;
        box-sizing: border-box;
    }

    .recommend_box {
        flex: 1;
    }

    .recommend_box a {
        text-decoration: none;

    }

    .recommend_box img {
        width: 65px;
        height: 65px;
        margin-bottom: 5px;
    }

    .recommend_box p {
        color: #666;
    }
</style>