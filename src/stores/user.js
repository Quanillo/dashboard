import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)
  const setUser = (newUser) => user.value = newUser 
  const logOut = () => user.value = null

  return { user, setUser, logOut }
})
