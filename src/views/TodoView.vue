<template>
  <h1>User {{ userId }} 的 Todo</h1>
  <ol>
    <li v-for="todo in todos" :key="todo">
      <h4>{{ todo.title }}</h4>
      是否完成? <input type="checkbox" v-model="todo.completed">
    </li>
  </ol>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return{
      todos: []
    }
  },
  computed:{
    userId(){
      return this.$route.params.userId
    }
  },
  methods:{
    fetchUserTodos(id){
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
           .then(res => this.todos = res.data)
    }
  },
  mounted() {
    this.fetchUserTodos(this.userId)
  }
}
</script> 