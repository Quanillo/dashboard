<template>
    <div class="roomContainer"  v-for="room in userP.user.rooms.filter(x=> x !== 'No room')">
        <div class="room">
            <div class="title">
                <h1>{{ room }}</h1>
            </div>

            <div class="dispositivo" v-for="dispositivo in dispList.filter(x => x.room == room  && x.type == 'sensor')">
                <p class="dispName" @click="openWindowSensor(dispositivo.id)">{{ dispositivo.name }}</p>
                <p>{{ dispositivo.param }}</p>
                <p>{{ dispositivo.value }}</p>
            </div>

            <div class="dispositivo"
                v-for="(dispositivo, index) in dispList.filter(x => x.room == room && x.type == 'ejecutor')" :key="index">
                <p class="dispName" @click="openWindowEjecutor(dispositivo.id)">{{ dispositivo.name }}</p>
                <p>{{ dispositivo.state }}</p>
                <div v-if="dispositivo.state" class="inline-flex">
                    <button @click="updateOn(dispositivo.id)" class="buttonOnSelected">
                        On
                    </button>
                    <button @click="updateOff(dispositivo.id)" class="buttonOff">
                        Off
                    </button>
                </div>
                <div v-else class="inline-flex">
                    <button @click="updateOn(dispositivo.id)" class="buttonOn">
                        On
                    </button>
                    <button @click="updateOff(dispositivo.id)" class="buttonOffSelected">
                        Off
                    </button>
                </div>
            </div>
        </div>
    </div>
</template> 

<script setup>
import { useUserStore } from '../stores/user'
import { updateEjecutor } from '../components/API/firebase'

const userP = useUserStore()

const props = defineProps({
  dispList: Array
})

const updateOff = (id) =>{
    updateEjecutor('dispositivos', id, false)
} 

const updateOn = (id) => {
    updateEjecutor('dispositivos', id, true)
}

const openWindowSensor = (id) => {
    window.open(`http://localhost:8001/Sensor/${id}`, '_blank');
}

const openWindowEjecutor = (id) => {
    window.open(`http://localhost:8001/Ejecutor/${id}`, '_blank');
}

</script>

<style  scoped>
.roomContainer{
    @apply w-96 flex flex-col p-2 m-10 border-2 rounded-xl border-sky-200 hover:border-sky-600  bg-slate-100 
}
.title{
    @apply bg-sky-200 p-2 rounded-t-lg
}
h1{
    @apply text-sky-600 text-2xl text-center 
}
.dispositivo{
    @apply flex flex-row  justify-center p-4 
}
.dispositivo:nth-child(even){
    @apply flex flex-row p-4 bg-slate-200 
}
p{
    @apply text-base px-5
}
.buttonOn{ 
    @apply bg-sky-200  text-sky-600  py-0.5 px-4 rounded-l 
}
.buttonOff{
    @apply bg-sky-200 text-sky-600  py-0.5 px-4 rounded-r
}
.buttonOnSelected{ 
    @apply bg-sky-600  text-sky-200 py-0.5 px-4 rounded-l 
}
.buttonOffSelected{
    @apply bg-sky-600  text-sky-200 py-0.5 px-4 rounded-r
}
.dispName{
    @apply hover:cursor-pointer
}
</style>