<template>
    <div class="lrc-container">
        <div class="lrc" ref="lrc">
           <p
                :class="{'active' : currentTime > keyArr[index] && currentTime < keyArr[index+1]}"
                v-for="(item,key,index) in lrcData" 
                :key="index" 
                class="lrc-p">
                    {{ item }}
                    {{ scrollTop(index) }}
                    <!-- {{startMove(index)}} -->
            </p>
        </div>
    </div>
</template>
<script>
import $ from "jquery";

export default {
    name:"Lrc",
    data(){
        return{
            lrcData:{},
            keyArr:[],
            number:0
        }
    },
    props:{
        id:{
            type:[String, Number],
            required:true
        },
        currentTime:{
            type:[String,Number],
            default:0
        },
        durationTime:{
            type:[String,Number],
            default:0
        }
    },
    mounted(){
        this.$axios.get(this.HOST + "/v1/restserver/ting", {
                params: {
                    method: "baidu.ting.song.lry",
                    songid: this.$route.params.id
                }
            })
            .then(res => {
                this.setLrcData(res.data)
                
            })
            .catch(error => {
                console.log(error);
            })
    },
    computed:{
        getKeyArr(){
            for(var i in this.lrcData){
                this.keyArr.push(i);
            }
            console.log(this.keyArr);
            
        }
    },
    methods:{
        setLrcData(data){
            var lrcs = data.lrcContent.split("\n");
            var lrcObj = {}; //存放一个时间对应一句歌词
            for(var i=0;i<lrcs.length;i++){
                var lrc = decodeURIComponent(lrcs[i]);
                var timeReg = /\[\d*:\d*((\:|\.)\d*)*\]/g;
                var timeRegExpArr = lrc.match(timeReg); //歌词时间
                var clause = lrc.replace(timeReg,""); //歌词文本
                //console.log(timeRegExpArr)
                if(!timeRegExpArr) continue;
                //var t=timeRegExpArr[0];
                for(var k=0,h=timeRegExpArr.length;k<h;k++){
                    var t = timeRegExpArr[k]
                }
                var min = Number(String(t.match(/\[\d*/i)).slice(1));
                var sec = Number(String(t.match(/\:\d*/i)).slice(1));
                var time = min *60 + sec;
                lrcObj[time]= clause
            }
            this.lrcData = lrcObj;            
            this.getKeyArr;
        },
        scrollTop(index){
            if(this.currentTime > this.keyArr[index] && this.currentTime < this.keyArr[index+1]){
                this.$refs.lrc.style.top=-((index-2)*30)+"px";
            }
        },
        // startMove(index) {
        //     if(this.currentTime > this.keyArr[index] && this.currentTime < this.keyArr[index+1]){
        //         var duration =  (Number(this.keyArr[index+1]) - Number(this.keyArr[index]))*500;
        //         //console.log(duration);
                
        //         let timer = setTimeout(() => {
        //             if (this.number<index) {
        //                 this.number = 0;
        //             } else {
        //                 this.number += 1;
        //             }
        //             this.$refs.lrc.style.top=-this.number+"px";
        //             this.startMove(index);
        //         }, 1100)
        //     }
            
        // }
    }
}
</script>
<style scoped>
.lrc-container{
    width: 100%;
    height:180px;
    position: relative;
    overflow: hidden;
}
.lrc{
    width: 100%;
    position: absolute;
    top: 0;
}
.lrc-p{
    height: 30px;
    line-height: 30px;
}
.active {
  color: red;
  font-size:20px;
}


</style>

