<template>
    <div class="music-list">
        <div class="container clearfix">
            <div class="row">
                <router-link :to="{name:'player',params:{id:item.song_id}}" class="col-xs-6 item" v-for="(item,index) in data" :key="index">
                    <div class="img-wrapper">
                        <img :src="item.pic_s500" alt="item.title">
                    </div>
                    <div>
                        <div class="title">{{ setTitle(item.title) }}</div>
                        <div class="author">{{ setTitle(item.author) }}</div>
                    </div>
                </router-link>
            </div>
        </div>
        <div @click="loadingMore" class="loading-more">{{ msg }}</div>
    </div>
</template>
<script>
export default {
    name:"MusicComponent",
    props:{
        data:{
            type:Array,
            default:function(){
                return[]
            }
        },
        msg:{
            type:String,
            default:"加载更多数据"
        }
    },
    methods:{
        setTitle(title){
            if(title.length>10){
                return title.substring(0,10)+"..."
            }
            return title;
        },
        loadingMore(){
            this.$parent.eventMore()
        }
    }
}
</script>
<style scoped>
.music-list{
    padding-top:10px;
}
.item{
    background: #fff;
    padding-top :10px;
}
.title{
    font-size:12px;
    margin-top: 4px;
}
.author {
  margin-top: 4px;
  margin-bottom: 10px;
  font-size: 12px;
  color: #999;
}
.loading-more{
    text-align: center;
    margin:20px;
}
</style>


