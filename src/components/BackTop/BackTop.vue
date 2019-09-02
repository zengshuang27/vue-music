<template>
    <div v-show="show" @click="backToTop" class="back-top">back</div>
</template>
<script>
export default {
    name:"BackTop",
    data(){
        return{
            show:false
        }
    },
    mounted(){
        const _this = this;
        const winHeight = document.documentElement.clientHeight; //视口高度
        window.addEventListener("scroll",function(){
            let scrollHeight = document.documentElement.scrollTop; //滑动高度
            if(scrollHeight > winHeight){
                _this.show = true;
            }else{
                _this.show = false;
            }
        })
        
    },
    methods:{
        backToTop(){
            document.documentElement.scrollTop = 0;
        }
    }
}
</script>
<style scoped>
.back-top{
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    color: #fff;
    background: #999;
    border-radius: 5px;
    position: fixed;
    right: 10px;
    bottom: 20px;
    z-index: 999;
    font-size: 20px;
}
</style>
