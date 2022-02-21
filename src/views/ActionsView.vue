<template>
    <img src="./assets/age.png" alt="Vue logo" srcset="">
    id: <input type="text" v-model="id">
    <button @click="updataTitle">從api更新資料</button>
    <h3>{{$store.getters.title}}</h3>
</template>
<script>
export default {
    // name:'App',
    // data(){
    //     return{
    //         name:'',
    //         job:''
    //     }
    // },
    methods: {
        updataTitle(){
            this.$store.dispatch('setTitleFromApi',
            {id:this.id})
        }
    }
  }
</script> 