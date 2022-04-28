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
            // if (state.counter > 50) {
            //     return 0
            // }
                return state.counter
        },
        doubleCounter(_, getters) {
            return getters.counter * 2
        }
    },
    actions: {
        incrementAsync({ commit }, payload) {
            setTimeout(() => {
                commit('add', payload)
            }, payload.delay)
        }
    },
    modules: {}
})
