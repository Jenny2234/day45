<template>
<img src="./assets/age.png" alt="Vue logo" srcset="">
<h3>{{fullTitle}}</h3>
</template>
<script>
export default {
    name:'App',
    components:{
        HelloWorld
    },
    computed:{
        fullTitle(){
            return this.$store.getters.fullTitle
        }
    }
}
</script>
