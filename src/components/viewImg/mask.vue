<template>
    <transition name="van-fade">
        <div class="mask"></div>
    </transition>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {}
        },
        methods: {},
        components: {}
    }
</script>

<style lang="scss" scoped>
    /*这里加了  z-index: 100; 不然在上下架商品列表中蒙层不会覆盖上面的tab*/
    .mask {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 1;
        z-index: 100;
        /*background-color: rgba(0, 0, 0, 0.7);*/
        background: rgba(0,0,0,1);
        overflow: hidden;
    }
    van-fade {
        &-enter-active {
            animation: .3s van-fade-in;
        }

        &-leave-active {
            animation: .3s van-fade-out;
        }
    }
    @keyframes van-fade-in {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
    @keyframes van-fade-out {
        from {
            opacity: 1;
        }

        to {
            opacity: 0;
        }
    }
</style>
