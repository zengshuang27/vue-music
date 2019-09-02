<template>
    <div>
        <List title="今日推荐" :params="hotRecomend"/>
        <List title="热门歌单" :params="hotMisic"/>
        <List title="欧美金曲" :params="UKGold"/>
        <Banner :banners="banners"/>
        <MusicTab />
    </div>
</template>
<script>
import List from "../components/List"
import Banner from "../components/Banner"
import MusicTab from "./subhome/MusicTab"

export default {
    name:"Home",
    data(){
        return{
            hotRecomend:{
                type:1,
                size:6,
                offset:0
            },
            hotMisic:{
                type:2,
                size:3,
                offset:0
            },
            UKGold:{
                type:21,
                size:3,
                offset:0
            },
            banners:[
                require("../assets/img/b1.jpg"),
                require("../assets/img/b2.jpg"),
                require("../assets/img/b3.jpg")
            ]

        }
    },
    components:{
        List,
        Banner,
        MusicTab
    }
}
</script>
<style scoped>

</style>

