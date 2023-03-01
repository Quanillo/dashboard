import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDispStore = defineStore('disp', () => {
  const dispList = ref([])
  const setDispositivos = (dispositivos) => dispList.value = dispositivos;
  const clearDispositivos = () => dispList.value = [];
  const getDispositivos = () => dispList.value;

  return { dispList, setDispositivos, clearDispositivos, getDispositivos }
})
