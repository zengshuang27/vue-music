<template>
    <div class="search-container">
        <div class="form-group">
            <div class="col-xs-10">
                <input type="text" class="form-control" v-model="searchData">
            </div>
            <button type="button" class="btn btn-info" @click="searchHandler">搜索</button>
        </div>
        <div class="panel">
            <ul class="list">
                <router-link :to="{name:'player',params:{id:item.songid}}" tag="li" v-for="(item,index) in searchList.song" class="song url" :key="index">
                    <div class="info">
                        <div class="name">{{ item.songname }}</div>
                        <div class="author">{{ item.artistname }}</div>
                    </div>
                </router-link>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:"SearchComponent",
    data(){
        return{
            searchData:"",
            searchList:{}
        }
    },
    mounted(){
        
    },
    methods:{
        searchHandler(){
            this.$axios.get( this.HOST + "/v1/restserver/ting",{
                params:{
                    method:"baidu.ting.search.catalogSug",
                    query:this.searchData
                }
            }).then( res => {
                this.searchList = res.data
            }).catch( error => {
                console.log(error);
            })
        }
    }
}
</script>
<style scoped>
.search-container{
    height: -webkit-fill-available;
    padding-top:10px;
    background: #fff;
    margin-top:10px;
}
.search-btn{
    flex:1;
}

.panel {
  border:0;
  border-top: 1px solid #eee;
  position: relative;
  top: -1px;
  display: block;
  background: #fff;
}

.list {
  padding-top: 0;
}

.panel .list li {
  height: 60px;
  border-bottom: 1px solid #eee;
  padding-left: 15px;
  display: flex;
  padding-top: 10px;
}
.info {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.info .name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  color: #333;
}

.info .author {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  color: #999;
  margin-top: 2px;
}
</style>


