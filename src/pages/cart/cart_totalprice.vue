<template>
    <div class="total_price">
        <div class="total_price_box">
            <div class="allcheck" :class="{selected:isAll}" @click="allchecks">{{allcheck}}</div>
            <div class="price">
                合计:{{totalprice}}
            </div>
            <div class="totally">
                去计算({{totalamount}})
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cart_totalprice",
        data() {
            return {
                isAll:false
            }
        },
        computed: {
            //计算出总价
            totalprice() {
                let totalprice = 0
                for (let item of this.$store.state.cartlist) {
                    if (item.checked) {
                        totalprice += item.price * item.count
                    }
                }
                return '￥' + totalprice
            },
            //计算出总数量
            totalamount() {
                return this.$store.state.cartlist.filter(item => item.checked).length
            },
            //检擦是否自动勾上全选
            allcheck() {
                // this.isAll = this.$store.state.cartlist.filter(item => item.checked).length === this.$store.state.cartlist.length;
                let cartlist = this.$store.state.cartlist
                //下面的写法是简写
                this.isAll = cartlist.filter(item => item.checked).length === cartlist.length && cartlist.length !== 0;
            }
        },
        methods: {
            allchecks() {
                if (this.isAll) {
                    for (let item of this.$store.state.cartlist) {
                        item.checked = false
                    }
                } else {
                    //这里的意思如果有部分或全部不选，那就让他们选中
                    for (let item of this.$store.state.cartlist) {
                        item.checked = true
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .total_price {
        position: fixed;
        bottom: 45px;
        width: 100%;
        background-color: #d3d3d3;
    }

    .total_price_box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
    }

    .allcheck {
        width: 20px;
        height: 20px;
        border: 1px solid #888;
        border-radius: 50%;
    }

    .price {
    }

    .totally {
        background-color: darkorange;
        height: 100%;
        line-height: 60px;
        font-weight: bold;
        font-size: 16px;
    }

    .selected {
        background: url("../../assets/img/common/right.jpg") no-repeat center;
        background-size: 20px 20px;
    }

</style>