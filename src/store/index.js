import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    name: 'john',
    age: 55,
    job: 'student'
  },
  getters: {
    title(state){
      return `${state.name}: ${state.job}`
    },
    fullTitle(state, getters){
      return `${getters.title}, ${state.age} 歲`
    }
  },
  mutations: {
    setTitle(state, data){
      state.name = data.name
      state.job = data.job
    }
  },
  actions: {
    setTitleFromApi(copyVueX, data){
      axios.get(`https://jsonplaceholder.typicode.com/users/${data.id}`)
           .then(res => copyVueX.commit('setTitle', res.data))
    }
  },
  modules: {
  }
})
