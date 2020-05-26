export default {
    name:"router-view",
    render(){
        return <a>{this.$slots.default}</a>
    }
}
