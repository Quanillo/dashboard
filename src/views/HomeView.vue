
<template>
  <main>
    <span>
            <img src="../assets/domotica.png" alt="">
            <h1>DomoticApp</h1>
    </span>
    <p>Welcome, <b>{{ userP.user.name }}</b>, this is the master home automation application to control your environment from your hand. </p>
    <p>Be careful, and remember, that with great power comes great responsibility.</p>
  </main>
  
</template>

<script setup>
import { useUserStore } from '../stores/user'

const userP = useUserStore()



</script>
<style  scoped>
main{
    @apply w-full h-full flex flex-col items-center justify-center
}
.loginContainer{
    @apply w-96 h-80 flex flex-col items-center p-2 border-2 rounded-xl border-sky-200 hover:border-sky-600  bg-slate-100
}

h1{
    @apply text-sky-600 text-4xl text-center pt-6
}
img{
    @apply object-contain h-14 w-14  
}
span{
    @apply flex flex-row place-items-center pb-20 
}
b{
    @apply text-sky-600
}


</style>