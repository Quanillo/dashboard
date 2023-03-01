<template>
    <p>Welcome {{ userP.user.name }}, this is your options panel</p>

    <div class="container">
        <RoomsOptions :dispList="dispList" :roomList="roomList"/>
        <DispositivoOptions :dispList="dispList" :roomList="roomList"/>
    </div>


</template>

<script setup>
import { onMounted, ref } from 'vue';
import RoomsOptions from '../components/RoomsOptions.vue';
import DispositivoOptions from '../components/DispositivoOptions.vue';
import { useUserStore } from '../stores/user'
import { onGetDispositivoLeaked, onGetRooms } from '../components/API/firebase'

const userP = useUserStore()

const dispList = ref([])
const roomList = ref([])

onMounted(() => {
    onGetDispositivoLeaked(userP.user.name, (docs)=>{
        const list = []
        docs.forEach(x =>{
            const disp = x.data()
            disp.id = x.id
            list.push(disp)
        })
        dispList.value = list;
    })
    onGetRooms(userP.user.name, (docs)=>{
        docs.forEach(x =>{
            roomList.value = x.data().rooms
        })
    })
})

</script>

<style  scoped>
.container{
    @apply flex flex-row place-content-around pt-10
}
</style>