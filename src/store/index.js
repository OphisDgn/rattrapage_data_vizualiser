import { createStore } from 'vuex'

export default createStore({
    state: {
        people: []
    },
    getters: {

    },
    actions: {
        retrieveDatas(store) {
            fetch('https://run.mocky.io/v3/70e5b0ad-7112-41c5-853e-b382a39e65b7')
            .then(res => res.json()).then(json => store.commit('setDatas', json.people))
        }
    },
    mutations: {
        setDatas (state, value) {
            state.people = value;
        }
    },
    modules: {

    }
})