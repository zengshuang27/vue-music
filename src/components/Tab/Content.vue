<script>
export default {
    name:"Content",
    data(){
        return{

        }
    },
    props:{
        spans:{
            type:Array,
            required:true
        }
    },
    render(){
        return(
            <div>
                {
                    this.spans.map((elem,index)=>{
                        return elem.active ? elem.$slots.default : ''
                    })
                }
            </div>
        )
    }
}
</script>
<style scoped>

</style>

