import { generateId } from '@/utilities/idGenerator'

export const TasksModule = {
    state: {
        tasks: []
    },
    mutations: {
        setTask(state, task) {
            state.tasks.push(task)
        },
        setTasks(state, tasks) {
            state.tasks = tasks
        }
    },
    actions: {
        createTask({commit}, task) {
            task.id = generateId()
            task.done = false
            let tasks = JSON.parse(localStorage.getItem('tasks'))
            if (!tasks) {
                tasks = []
            }
            tasks.push(task)
            localStorage.setItem('tasks', JSON.stringify(tasks))
            commit('setTask', task)
        },
        loadTasks({commit}) {
            let tasks = JSON.parse(localStorage.getItem('tasks'))
            if (!tasks) {
                tasks = []
            }
            commit('setTasks', tasks)
        },
        toggleStatusTask({commit}, id) {
            let tasks = JSON.parse(localStorage.getItem('tasks'))
            tasks.forEach((task) => {
                if (task.id === id) {
                    task.done = !task.done
                }
            })
            localStorage.setItem('tasks', JSON.stringify(tasks))
            commit('setTasks', tasks)
        },
        updateTask({commit}, task) {
            let tasks = JSON.parse(localStorage.getItem('tasks'))
            tasks.forEach((itemTask) => {
                if (task.id === itemTask.id) {
                    itemTask.title = task.title
                    itemTask.description = task.description
                }
            })
            localStorage.setItem('tasks', JSON.stringify(tasks))
            commit('setTasks', tasks)
        }
    },
    getters: {
        getTasks(state) {
            return state.tasks.filter(task => !task.done)
        },
        getDoneTasks(state) {
            return state.tasks.filter(task => task.done)
        }
    },
}
