<template>
    <div>
        <div class="loginContainer">
            <h1>Login</h1>
            <p>User name</p>
            <input v-model.trim="name"  type="text" @keyup.enter="setMainUser">
            <p>Password</p>
            <input v-model.trim="pass"  type="password" @keyup.enter="setMainUser">
            <div class="buttons">
                <button @click="setMainUser"  @keyup.enter="setMainUser">enviar</button>
            </div>
        </div>
        <div v-if="err!=''">
            <p>{{ err }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'
import { getUser } from '../components/API/firebase'


const router = useRouter()
const userP = useUserStore()

const name = ref('')
const pass = ref('')
let err = ref('')

const setMainUser = () => {
    if(name.value === '' || pass.value === ''){
        err.value = 'Alguno de los campos esta vacío'
    }
    else{
        getUser(name.value, (docs)=>{
        if (docs.size ==1){
            docs.forEach(doc=>{
            if(doc.data().pass === pass.value){
                const aux = doc.data()
                aux.id = doc.id
                userP.setUser(aux)
                if(userP.user != null)
                    router.push({path: '/'})
            }
            else{
                err.value = 'Contraseña incorrecta'
            }
            })
        }
        else{
            err.value = 'algo salió mal'
        }
    })
    }
}

</script>

<style  scoped>
button{
    @apply  bg-sky-600 text-lg no-underline text-slate-200 p-0.5 px-4  rounded-lg hover:text-sky-200 hover:cursor-pointer;
}
input{
    @apply appearance-none block w-full bg-slate-50 text-gray-700 border border-sky-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-none focus:bg-white focus:border-sky-600
}
h1{
    @apply text-sky-600 text-2xl text-center
}
.buttons{
    @apply flex flex-col items-center mt-4
}
.containerRoom{
    @apply flex flex-col p-3 border-2 rounded-xl border-sky-200 bg-slate-100
}
.title{
    @apply bg-sky-200 p-2 rounded-t-lg
}
h3{
    @apply text-center p-2
}
select{
    @apply block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500
}
</style>