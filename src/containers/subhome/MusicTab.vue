<template>
    <div class="music-top">
        <!-- <div>音乐榜单</div> -->
        <Tabs :currentIndex="currentIndex" @changeIndex="changeIndexHandler">
            <Tab v-for="(element,index) in musicList" 
            :key="index"
            :index="index+1"
            :tab="element.billboard.name"
            >
                <div class="panel hotsongs on">
                    <ul class="list">
                        <router-link :to="{name:'player',params:{id:item.song_id}}" tag="li" v-for="(item,index) in element.song_list" class="song url" :key="index">
                            <div class="poster">
                                <img :src="item.pic_big" :alt="item.title">
                            </div>
                            <div class="info">
                                <div class="name">{{ item.title }}</div>
                                <div class="author">{{ item.artist_name }}</div>
                            </div>
                        </router-link>
                    </ul>
                    <div class="more-songs">查看该榜单&gt;</div>
                </div>
            </Tab>
        </Tabs>
    </div>
</template>
<script>
export default {
    name:"MusicTab",
    data(){
        return{
            currentIndex:"1",
            musicList:[]
        }
    },
    mounted(){
        var _this = this;
        function hotMusic(){
            return _this.$axios.get(
                _this.HOST+
                "/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=5&offset=0"
            );
        }
        function newMusic(){
            return _this.$axios.get(
                _this.HOST+
                "/v1/restserver/ting?method=baidu.ting.billboard.billList&type=2&size=5&offset=0"
            );
        }
        function usGold(){
            return _this.$axios.get(
                _this.HOST+
                "/v1/restserver/ting?method=baidu.ting.billboard.billList&type=21&size=5&offset=0"
            );
        }

        this.$axios.all([hotMusic(),newMusic(),usGold()]).then(
            this.$axios.spread(function(hotMusic,newMusic,usGold){
                _this.musicList.push(hotMusic.data,newMusic.data,usGold.data)
            })
        )
    },
    methods:{
        changeIndexHandler(index){
            this.currentIndex=index
        }
    }
}
</script>
<style scoped>
.musictop {
  background: #fff;
  padding: 10px;
}

.panel {
  border-top: 1px solid #eee;
  position: relative;
  top: -1px;
  display: block;
  background: #fff;
}

.list {
  padding-top: 0;
  height: 375px;
}

.panel .list li {
  height: 60px;
  border-bottom: 1px solid #eee;
  padding-left: 0;
  display: flex;
  padding-top: 10px;
}

.panel .list li .poster {
  position: relative;
  width: 45px;
  margin-right: 8px;
}

.panel .list li .poster img {
  border: 1px solid #eee;
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

.more-songs {
  color: #999;
  margin-top: 9px;
  font-size: 12px;
  text-align: center;
  height: 32px;
  line-height: 32px;
}
</style>


