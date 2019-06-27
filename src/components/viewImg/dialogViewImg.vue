<template>
    <div class="test_dialogue">

        <myDialog v-show="isShow" >
            <div class="wrapper">
                <div class="top" @click="dailogClose">

                    <img class="img" :src="imgInfo.url" onerror="onerror=null; src = '/static/images/defualt.png'">
                </div>
                <div class="bottom" @click="dailogDelete">
                    <span class="btn" >删除</span>
                </div>
            </div>
        </myDialog>
        <under-mask v-show="isShow"></under-mask>
    </div>
</template>

<script type="text/ecmascript-6">
    import myDialog from "./myDialog.vue";
    import underMask from "./mask.vue";

    export default {
        props:{
            isShow:{
                type:Boolean,
                default:false,
            },
            imgInfo:{
                type:Object,
                default:{
                    url:'https://img.yzcdn.cn/2.jpg',
                    index:1,
                },
            },

        },
        data() {
            return {
            }
        },

        methods: {


            dailogClose(){
                this.$emit("showTag",null);
            },
            dailogDelete(){
                this.$emit("showTag",this.imgInfo);

            }
        },
        components: {
            myDialog,
            underMask
        }
    }
</script>

<style lang="scss" scoped>
    // @import "../../../common/mixin.scss";

    .test_dialogue {
        width: 100%;
        font-family: PingFang-SC-Regular;
        overflow: hidden;

        .wrapper{
            height: 100vh;
            box-sizing: border-box;
            padding-top:82px;
            z-index: 99;
            background-color: transparent;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .top{
                flex-grow: 1;
                width: 100%;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: center;
                .img{
                    width: 100%;
                    max-height: 437px;
                    display: inline-block;
                    margin: 0 auto;
                }
            }
            .bottom{
                height: 40px;
                margin: 24px auto;
                line-height: 0;

                .btn{
					//这个按钮样式自己写吧
                    // @include btn(82px,36px,38px,#000,#fff,14px,#FFFFFF);

                }
            }
        }
    }
</style>
