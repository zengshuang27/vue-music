<template>
<swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in banners" :key="index">
        <img :src="slide" :alt="index">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
</swiper>
</template>

<script>
export default {
    name: "Banner",
    data() {
        return {
            swiperOption: {
                loop:true,
                autoplay:true,
                pagination: {
                    el: '.swiper-pagination'
                }
            }
        }
    },
    props:{
        banners:{
            type:Array,
            required:true
        }
    }
}
</script>

<style scoped>

</style>
