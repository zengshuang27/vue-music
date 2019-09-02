<template>
    <div>
        <MusicComponent :data="musicData" :msg="msg"/>
    </div>
</template>
<script>
import MusicComponent from "../components/MusicComponent"
export default {
    name:"MusicList",
    data(){
        return{
            musicData:[],
            offset:0,
            msg:""
        }
    },
    components:{
        MusicComponent
    },
    mounted(){
        this.http(0)
    },
    methods:{
        http(page){
            this.$axios.get( this.HOST + "/v1/restserver/ting",{
                params:{
                    method:"baidu.ting.billboard.billList",
                    type:2,
                    size:10,
                    offset:page
                }
            }).then( res => {
                if(res.data.song_list){
                    this.msg="加载更多数据"
                    var musicAllData =this.musicData.concat(res.data.song_list);
                    this.musicData = musicAllData;
                    this.offset += 10;
                }else{
                    this.msg="数据到底了"
                }
                
                
            }).catch( error => {
                console.log(error);
            })
        },
        eventMore(){
            this.http(this.offset)
        }
    }
}
</script>
<style scoped>

</style>