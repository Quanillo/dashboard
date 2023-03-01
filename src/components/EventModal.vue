<template>

  <div class="modal-overlay" @click="$emit('closeModal')">
    <div class="modal" @click.stop>
      <p>{{ userP.user.name }}, </p>
      <p class="text">¿Estás seguro de cerrar sesión?</p>
      <button @click="logOut">Log Out</button>
    </div>
    <div class="close" @click="$emit('closeModal')">
      <img class="close-img" src="../assets/CloseIcon.svg" alt="" />
    </div>
  </div>
</template>
  

<script setup>
import { useUserStore } from '../stores/user'

const userP = useUserStore()
const emits = defineEmits(['closeModal', 'logOut'])

const logOut = () => emits('logOut')

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
  @apply bg-sky-600 text-lg no-underline text-slate-200 p-2 px-4 rounded-lg hover:text-sky-300 hover:cursor-pointer;
}
</style>