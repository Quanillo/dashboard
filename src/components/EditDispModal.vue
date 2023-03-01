<template>

    <div class="modal-overlay" @click="$emit('closeModal')">
      <div class="modal" @click.stop>
        <p>Edit dispositivo {{ props.dispSelected.name }}</p>

        <p>New name</p>
        <input v-model="newName" type="text">

        <p>Change Room</p>
        <select name="rooms" id="rooms" v-model="newRoom">
            <option v-for="room in userP.user.rooms.filter(x=>x != props.dispSelected.room)">{{ room }}</option>
        </select>

        <button @click="updateDisp">edit</button>
      </div>
      <div class="close" @click="$emit('closeModal')">
        <img class="close-img" src="../assets/CloseIcon.svg" alt="" />
      </div>
    </div>
  </template>
    
  
  <script setup>
  import { ref } from 'vue';
  import { useUserStore } from '../stores/user'
  import { updateNameDisp, updateRoomDisp } from '../components/API/firebase';
  
  const userP = useUserStore()
  const emit = defineEmits(['closeModal'])
  
  const props = defineProps({
    dispSelected: Object 
  })

  const newName = ref('')
  const newRoom = ref('')

  const updateDisp = () => {
    if(newName.value != ''){
      updateNameDisp('dispositivos', props.dispSelected.id, newName.value)
    }

    if(newRoom.value != ''){
      updateRoomDisp('dispositivos', props.dispSelected.id, newRoom.value)
    }
    emit('closeModal')
    newName.value = ''
    newRoom.value = ''
  }
  </script>
  
  
  <style scoped>    
  
  .modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #000000da;
  }
  
  .modal {
    text-align: center;
    background-color: #FAFCFF;
    height: 30em;
    width: 30em;
    margin-top:5%;
    margin-bottom:5%;
    padding: 60px 0;
    border-radius: 20px;
    @apply flex flex-col justify-center items-center p-2 border-2 rounded-xl border-sky-600  bg-slate-100
  }

  .close {
    @apply h-96 cursor-pointer pt-16 pl-5;
  
  }
  .close-img {
    @apply w-7 
  }
  
  .text {
    @apply pb-20
  }
  
  button {
    @apply bg-sky-600 w-20 text-lg no-underline text-slate-200 p-2 px-4 rounded-lg hover:text-sky-300 hover:cursor-pointer;
  }
  input{
    @apply appearance-none block w-96 bg-slate-50 text-gray-700 border border-sky-200 rounded py-3 px-4 m-4 leading-tight focus:outline-none focus:bg-white focus:border-sky-600
  }
  select{
    @apply block appearance-none w-96 bg-slate-50 border border-sky-200 text-gray-700 py-3 px-4 pr-8 m-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-sky-600
  } 
  </style>