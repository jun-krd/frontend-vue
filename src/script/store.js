import {createStore} from "vuex";

const store = createStore({
    state() {
        return {
            account: {
                id: 0,
                role:''
            },
            isLogin : false
        }
    },
    mutations: {
        setAccount(state, payload) {
            state.account.id = payload
        },
        setRoles(state, payload) {
            state.account.role = payload
        },
    }
});

export default store;