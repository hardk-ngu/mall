<template>
    <div class="navbar">
        <div class="navbar_left">
            <slot name="navbar_left"></slot>
        </div>
        <div class="navbar_center">
            <slot name="navbar_center"></slot>
        </div>
        <div class="navbar_right">
            <slot name="navbar_right"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "navbar"
    }
</script>

<style scoped>
    .navbar {
        display: flex;
        text-align: center;
        height: 44px;
        line-height: 44px;
        box-shadow: 0 1px 1px rgba(100, 100, 100, .2);
        font-size: 16px;
    }

    .navbar_left {
        width: 60px;
    }

    .navbar_right {
        width: 60px;
    }

    .navbar_center {
        flex: 1;
    }
</style>
