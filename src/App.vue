<template>

    <div v-if="userP.user == null" class="logingDiv">
      <LoginView />
    </div>

  <div v-if="userP.user != null" >
    <div class="nav-menu">
      <nav class="nav">
        <div class="mb-2 sm:mb-0">
          <RouterLink class="home" to="/">Home</RouterLink>
          <RouterLink class="navLink" to="/Dashboard">Dashboard</RouterLink>
        <RouterLink class="navLink" to="/Options">Options</RouterLink>
        </div>

        <a class="logout" @click="showModal = true">Log Out</a>
      </nav>
    </div >
    <EventModal v-if="showModal" @closeModal="showModal = false" @logOut="logOut" ></EventModal>
    <div class="mainDiv">
      <RouterView />
    </div>

  </div>

</template>

<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import { useRouter } from 'vue-router'
import { useUserStore } from './stores/user'
import LoginView from './views/LoginView.vue';
import EventModal from './components/EventModal.vue'

const router = useRouter()
const userP = useUserStore()
const showModal = ref(false)

const logOut = () => {
  router.push({path: '/'}) 
  userP.logOut()
  showModal.value = false
}

</script>

<style scoped>
.nav{
  @apply  flex flex-row text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-zinc-100 shadow sm:items-baseline w-full;
}
.navLink{
  @apply text-lg no-underline text-zinc-800	 hover:text-sky-200 ml-2 px-5;
}
.home{
  @apply text-2xl no-underline text-zinc-800 hover:text-sky-200 hover:cursor-pointer px-5;
}
.logout{
  @apply bg-sky-600 text-lg no-underline text-slate-200 p-2 px-4 rounded-lg hover:text-sky-200 hover:cursor-pointer;
}
.mainDiv{
  @apply flex flex-col items-center pt-10 
}
.logingDiv{
  @apply w-full h-full
}
</style>
