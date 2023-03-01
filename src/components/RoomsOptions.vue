<template>
<div class="containerRoom">
    <div class="title">
        <h1>Room options</h1>
    </div>
    <div>
        <h3>Add room</h3>
        <p>Name</p>
        <input type="text" v-model="newRoom"><br>
        <div class="buttons">
            <button @click="pushRoom">add</button>
        </div>
    </div>

    <div>
        <h3>Delete room</h3>
        <p>Name</p>
        <select name="rooms" id="rooms" v-model="selectedRoom">
            <option v-for="room in props.roomList.filter(x=> x !== 'No room')">{{ room }}</option>
        </select><br>
        <div class="buttons">
            <button @click="deleteRoom">delete</button>
        </div>
    </div>

    <div>
        <h3>Rename room</h3>
        <p>Room</p>
        <select name="rooms" id="rooms" v-model="changedRoom">
            <option v-for="room in props.roomList.filter(x=> x !== 'No room')">{{ room }}</option>
        </select><br>
        <p>New name</p>
        <input type="text" v-model="newName"><br>
        <div class="buttons">
            <button @click="renameRoom">rename</button>
        </div>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '../stores/user'
import { addRoom, removeRoom, updateRoom, updateRoomDisp } from '../components/API/firebase';

const userP = useUserStore()

const props = defineProps({
  dispList: Array,
  roomList: Array
})

const newRoom = ref('')
const selectedRoom = ref('')

const newName = ref('')
const changedRoom = ref('')

const pushRoom = () => {
    if(newRoom.value !== ''){
        addRoom('usuarios', userP.user.id, newRoom.value)
        newRoom.value = ''
    }
} 

const deleteRoom = () => {
    removeRoom('usuarios', userP.user.id, selectedRoom.value)
    props.dispList.filter(x=> x.room === selectedRoom.value).map(disp=>{
        updateRoom('dispositivos', disp.id, 'No room')
    })
    selectedRoom.value = ''
}

const renameRoom = () => {
    if(newName.value !== '' && changedRoom.value !== ''){
        removeRoom('usuarios', userP.user.id, changedRoom.value)
        addRoom('usuarios', userP.user.id, newName.value)
        props.dispList.map(x=>{
            if(x.room === changedRoom.value){
                updateRoomDisp('dispositivos', x.id, newName.value)
            }
        })
    }
    newName.value = ''
    changedRoom.value = ''
}
</script>

<style  scoped>
button{
    @apply  bg-sky-600 text-lg no-underline text-slate-200 p-0.5 px-4  rounded-lg hover:text-sky-200 hover:cursor-pointer;
}
input{
    @apply appearance-none block w-full  bg-slate-50 text-gray-700 border border-sky-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-none focus:bg-white focus:border-sky-600
}
h1{
    @apply text-sky-600 text-2xl text-center
}
.buttons{
    @apply flex flex-col items-center
}
.containerRoom{
    @apply w-96 flex flex-col p-2 border-2 rounded-xl border-sky-200 hover:border-sky-600  bg-slate-100
}
.title{
    @apply bg-sky-200 p-2 rounded-t-lg
}
h3{
    @apply text-center p-2
}
select{
    @apply block appearance-none w-full bg-slate-50 border border-sky-200 text-gray-700 py-3 px-4 pr-8 mb-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-sky-600
}
</style>