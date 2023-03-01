<template>
    <div class="divLogin" v-if="showLogin">
        <span>
            <img src="../assets/domotica.png" alt="">
            <h1>DomoticApp</h1>
        </span>
        <div>
            <Login class="loginContainer" />
            <button @click="showLogin = false">Create account</button>
        </div>

    </div>
    <div class="divLogin" v-else>
        <span>
            <img src="../assets/domotica.png" alt="">
            <h1>DomoticApp</h1>
        </span>
        <div>
            <SingUp class="loginContainer" @showLogin="showLogin = true"/>
            <button @click="showLogin = true">Access to App</button>
        </div>

    </div>
    
</template>

<script setup>
import { ref } from 'vue';
import Login from '../components/Login.vue';
import SingUp from '../components/SingUp.vue';

const showLogin = ref(true)

</script>


<style  scoped>
.divLogin{
    @apply w-full h-full flex flex-col items-center justify-center
}
.loginContainer{
    @apply w-96 h-96 flex flex-col items-center p-2 border-2 rounded-xl border-sky-200 hover:border-sky-600  bg-slate-100
}
button{
    @apply hover:text-sky-600 hover:cursor-pointer text-center;
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
</style>