export default {
    addcart(context,payload){
        return new Promise((resolve,reject)=>{
            let product=context.state.cartlist.find((item)=>item.iid===payload.iid)
            if (product){
                context.commit('addcounter',product)
                resolve("++")
            } else{
                payload.count=1
                context.commit('addcart',payload)
                resolve("+1")
            }
        } )

    },
    changeCheck(context,payload){
        let product=context.state.cartlist.find((item)=>item.iid===payload)
        if (product){
            context.commit('changeCheck',product)
            // product.checked=!product.checked
        }
    }
}