import { generateId } from '@/utilities/idGenerator'

export const UserModule = {
    state: {
        user: {
            data: null,
            error: null
        }
    },
    mutations: {
        setUser(state, payload) {
            state.user.error = null;
            state.user.data = payload
        },
        setUserError(state, error) {
            state.user.error = error
        },
        unsetUser(state) {
            state.user.error = null;
            state.user.data = null
        }
    },
    actions: {
        register({commit, dispatch}, payload) {
            payload.id = generateId()
            let users = JSON.parse(localStorage.getItem('users'))
            if (users) {
                const foundUser = users.find(user => payload.login === user.login)
                if (foundUser) {
                    commit('setUserError', `Пользователь с таким логином '${payload.login}' уже зарегистрирован`)
                    return;
                }
            } else {
                users = []
            }
            users.push(payload)
            localStorage.setItem('users', JSON.stringify(users))
            dispatch('login', payload)
        },
        login({commit}, {login, password}) {
            let users = JSON.parse(localStorage.getItem('users'))
            if (users) {
                const foundUser = users.find(user => {
                    return login === user.login && password === user.password
                })
                if (foundUser) {
                    localStorage.setItem('authedUser', JSON.stringify(foundUser))
                    commit('setUser', foundUser)
                    return
                }
            }
            commit('setUserError', `Не верный логин и/или пароль`)
        },
        reLogin({dispatch}) {
            const authedUser = localStorage.getItem('authedUser')
            if (authedUser) {
                dispatch('login', JSON.parse(authedUser))
            }
        },
        logout({commit}) {
            localStorage.removeItem('authedUser')
            commit('unsetUser')
        }
    },
    getters: {
        getUser(state) {
            return state.user
        },
        isUserLoggedIn(state) {
            return state.user.data !== null
        }
    }
}
