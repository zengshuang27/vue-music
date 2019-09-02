<script>
import Content from "./Content"
export default {
    name:"Tabs",
    data(){
        return{
            spans:[]
        }
    },
    components:{
        Content
    },
    props:{
        currentIndex:{
            type:[String,Number],
            default:"1"
        }
    },
    render(){
        return(
            <div class="tabs">
                <ul class="tabs-header">
                    { this.$slots.default }
                </ul>
                <Content spans={ this.spans }/>
            </div>
        )
    },
    methods:{
        onChangeIndex(index){
            //console.log(this.$parent.data);
            this.$emit('changeIndex',index)
        }
    }
}
</script>
<style scoped>
.tabs-header{
  display:flex;
  list-style:none;
  margin:0;
  padding:0;
  border-bottom:2px solid #ededed;
}
</style>

