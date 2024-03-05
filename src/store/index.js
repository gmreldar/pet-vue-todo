import Vuex from 'vuex'
import {UserModule} from '@/store/modules/user'
import {TasksModule} from "@/store/modules/tasks";

export default new Vuex.Store({
    modules: {
        UserModule,
        TasksModule
    }
})
