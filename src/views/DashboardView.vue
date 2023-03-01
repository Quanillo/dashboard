<template>
    <p>Welcome {{ userP.user.name }}, this is your dashboard panel</p>
    <div class="container">
        <RoomDashboard :dispList="dispList"/>
        <NoRoomDashboard :dispList="dispList"/>
    </div>

</template> 

<script setup>
import { onMounted, ref } from 'vue';
import { useUserStore } from '../stores/user'
import RoomDashboard from '../components/RoomDashboard.vue';
import NoRoomDashboard from '../components/NoRoomDashboard.vue';
import { onGetDispositivoLeaked } from '../components/API/firebase'

const userP = useUserStore()

const dispList = ref([])

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
})
</script>

<style  scoped>
.container{
    @apply w-max h-max flex flex-wrap grid-cols-2 place-content-center  pt-10
}
</style>