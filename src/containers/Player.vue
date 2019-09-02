<template>
<div class="play">
    <div class="header">
        <div class="title">
            <router-link to="/">
                <i class="iconfont icon-shouye left"></i>
            </router-link>
            <div class="music-info">
                <p v-if="playerData.songinfo">{{ playerData.songinfo.title }}</p>
                <p v-if="playerData.songinfo" class="author">{{ playerData.songinfo.author }}</p>
            </div>
            <a href="#">
                <i class="iconfont icon-sousuo right"></i>
            </a>
        </div>
    </div>

    <div class="song-info">
        <div class="song-info-img">
            <img v-if="playerData.songinfo" :src="playerData.songinfo.pic_big">
            <Lrc :id="this.$route.params.id" :currentTime="currentTime" :durationTime="durationTime"/>
        </div>
        <div class="iconbox">
            <i class="iconfont icon-shoucang2 left"></i>
            <i class="box"></i>
            <i class="iconfont icon-xiazai right"></i>
        </div>
    </div>

    <div class="song">
        <audio v-if="playerData.bitrate" :src="playerData.bitrate.file_link" controls ref="player"></audio>
    </div>
</div>
</template>

<script>
import Lrc from "../components/Lrc"

export default {
    name: "Player",
    data() {
        return {
            playerData: {},
            currentTime:0,
            durationTime:0
        }
    },
    components:{
        Lrc
    },
    mounted() {
        this.$axios.get(this.HOST + "/v1/restserver/ting", {
                params: {
                    method: "baidu.ting.song.play",
                    songid: this.$route.params.id
                }
            })
            .then(res => {
                this.playerData = res.data
            })
            .catch(error => {
                console.log(error);
            })
    },
    updated(){
        this.playerEvent();
    },
    methods:{
        playerEvent(){
            this.$refs.player.addEventListener('timeupdate',this._currentTime);
            this.$refs.player.addEventListener('canplay',this._durationTime);
        },
        _currentTime(){  
            this.currentTime = this.$refs.player.currentTime; //当前播放时间
        },
        _durationTime(){ 
            this.durationTime = this.$refs.player.duration  //播放总时长
        }
    }
}
</script>

<style scoped>
.header {
    padding: 15px;
}

.music-info {
    flex: 1;
    font-size: 20px;
}

.title {
    display: flex;
    text-align: center;
}

.left {
    font-size: 30px;
}

.ca {
    color: red;
}

.right {
    font-size: 30px;
}

.song-info {
    padding: 15px;
}

.song-info-img {
    text-align: center;
}

.song-info-img img {
    width: 50%;
    border-radius: 5px;
    box-shadow: 0 0 10px 0 rgba(50, 50, 50, 0.31);
}

.song-lrc {
    margin-top: 10px;
    min-height: 50px;
}

.iconbox {
    display: flex;
    margin-top: 30px;
}

.iconbox .box {
    flex: 1;
}

.song {
    width: 100%;
    text-align: center;
}

.song audio {
    width: 80%;
}

.active {
    color: #222;
}

.author {
    font-size: 12px;
    color: #999;
}
</style>
