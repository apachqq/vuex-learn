import { createStore } from 'vuex'

export default createStore({
    state() {
        return {
            counter: 0
        }
    },
    mutations: {
        increment(state) {
            state.counter++
        },
        add(state, payload) {
            state.counter += payload.value
        }
    },
    getters: {
        counter(state) {
            return state.counter
        }
    },
    actions: {},
    modules: {}
})
