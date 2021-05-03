import { createStore } from 'vuex'

export default createStore({
    state: {
        people: [],
        filterCol: null,
        filterValue: null,
        search: ''
    },
    getters: {
        filteredData(state) {
            return state.people
                .filter((people) => !state.filterCol || !state.filterValue || people.preferences[state.filterCol] === state.filterValue)
                .filter((people) => objecttToString(people).toLowerCase().includes(state.search.toLowerCase()))
        }
    },
    mutations: {
        setDatas(state, value) {
            state.people = value;
        },
        setSearch(state, value) {
            state.search = value;
        },
        setFilter(state, value) {
            state.filterCol = value.column;
            state.filterValue = value.value;
        }
    },
    actions: {
        retrievePeople(store) {
            fetch('https://run.mocky.io/v3/70e5b0ad-7112-41c5-853e-b382a39e65b7')
                .then(res => res.json())
                .then(json => store.commit('setDatas', json.people))
        },
        searchUpdate(state, value) {
            store.commit('setSearch', value);
        },
        filterUpdate(state, value) {
            store.commit('setFilter', value);
        },
        resetFilter(state, value) {
            store.commit('setFilter', { column: null, value: null })
        }
    }
})

function objecttToString (ob) {
    return Object.values(ob)
        .map( (i) => typeof i === 'object' ? objecttToString(i) : i)
        .join(' ');
}