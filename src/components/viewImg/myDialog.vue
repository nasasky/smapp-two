<template>
    <!-- 能不能让用户直接来自定义这个dialog, 无论在哪个位置，无论大小，样式？-->
    <transition name="move">
        <div class="dialog">
                <!--<div class="content">-->
                    <!--<button @click="dispear">关闭</button>-->
                <!--</div>-->
            <slot></slot>
        </div>
    </transition>
</template>

<script type="text/ecmascript-6">
    export default {
        props:{
            myheight:Number,
        },
        data() {
            return {
            }
        },
        methods: {
            dispear() {
                this.$emit('close');
            }
        },
        components: {}
    }
</script>

<style lang="scss" scoped>
    /*这里的z-index必须比mask的高，mask设为100*/
    .dialog {
        position: fixed;
        top: 50%;
        left: 50%;
        width: 100%;
        min-height: 100vh;
        max-height: 100vh;
        margin: 0 auto;
        font-size: 16px;
        border-radius: 4px;
        background-color: transparent;
        overflow: hidden;
        transition: .5s;
        transform: translate3d(-50%, -50%, 0);
        z-index: 101;
        /*.content {*/
            /*width: 300px;*/
            /*height:200px;*/
            /*margin: 0 auto;*/
        /*}*/
        &.move-enter {
            opacity: 0;
            transform: translate3d(-50%, -50%, 0) scale(0.7);
        }
        &.move-leave-active {
            opacity: 0;
            transform: translate3d(-50%, -50%, 0) scale(0.9);
        }
    }
</style>
