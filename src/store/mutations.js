export default {
    addcounter(state, payload) {
        payload.count++
    },
    addcart(state, payload) {
        payload.checked = true
        state.cartlist.push(payload)
    },
    changeCheck(state,payload){
        payload.checked=!payload.checked
    }
}