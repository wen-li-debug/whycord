export default {
    addCount(state, payload) {
        payload.count++
    },
    addToCard(state, payload) {
        payload.checked = false;
        state.productList.push(payload)
    }
}