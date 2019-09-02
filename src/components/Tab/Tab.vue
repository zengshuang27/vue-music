<script>
export default {
    name:"Tab",
    props:{
        tab:{
            type:String,
            default:"tab"
        },
        index:{
            type:[String,Number],
            default:"1"
        }
    },
    mounted(){
        this.$parent.spans.push(this);
    },
    computed:{
        active(){
            // console.log(this.index)
            // console.log(this.$parent.$parent.currentIndex)
            return this.index == this.$parent.currentIndex
        }
    },
    render(){
        let className = {
            tab:true,
            active:this.active
        }
        return(
            <li class={className} onClick={this.getIndex.bind(this)}>{ this.tab }</li>
        )
    },
    methods:{
        getIndex(){
            this.$parent.onChangeIndex(this.index)
            //console.log(this.index)
        }
    }
}
</script>
<style scoped>
.tab{
    flex: 1;
    text-align: center;
    list-style: none;
    line-height: 40px;
    margin-right: 30px;
    position: relative;
    cursor: pointer;
}
.tab.active {
  border-bottom: 2px solid blue;
}
</style>
