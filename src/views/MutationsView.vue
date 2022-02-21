<template>
    <img src="./assets/age.png" alt="Vue logo" srcset="">
    姓名: <input type="text" v-model="name">
    職位: <input type="text" v-model="job">
    <button @click="updataTitle">更新資料</button>
    <h3>{{$store.getters.title}}</h3>
</template>
<script>
export default {
    name:'App',
    data(){
        return{
            name:'',
            job:''
        }
    },
    methods: {
        updataTitle(){
            this.$store.commit('setTitle',{
                name:this.name,
                job:this.job
            })
        }
    }
  }
</script> 