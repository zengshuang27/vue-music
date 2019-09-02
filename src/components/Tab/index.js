import Tabs from "./Tabs"
import Tab from "./Tab"

//全局组件注册
export default(Vue) =>{
    Vue.component(Tabs.name,Tabs),
    Vue.component(Tab.name,Tab)
}