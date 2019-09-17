<template>
    <div class="tabbar">
        <div class="tabbar_box" v-for="(item,index) in title" @click="tabclick(index)">
            <span :class="index===currentindex?'active':''">{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tabbar",
        data() {
            return {
                currentindex: 0
            }
        },
        props: {
            title: Array
        },
        methods: {
            tabclick(index) {
                this.currentindex = index
                //将index传给父组件的特定方法
                this.$emit("tabclick",index)
            }
        }
    }
</script>

<style scoped>
    .tabbar {
        display: flex;
        /*margin-top: 10px;*/
        height: 40px;
        line-height: 40px;
        background-color: #fff;
        margin-bottom: 10px;
    }

    .tabbar_box {
        text-align: center;
        flex: 1;
        font-size: 17px;
        color: #666;
    }

    .tabbar_box span {
        /*border-bottom: 2px solid #ff5777;*/
        /*padding:0 5px 5px;*/
    }

    .active {
        border-bottom: 2px solid #ff5777;
        padding: 0 5px 5px;
        color: #ff5777;
    }
</style>