<template>
  <h3>Időpontfoglalás</h3>
  <div v-if="!saving">
    <form @submit.prevent="save">
      <p>Foglal: {{timeTable.reserveDay}} {{ timeTable.reserveHour }}:00</p>
      <input type="text" v-model="name" placeholder="Név"><br>
      <input type="text" v-model="phoneNumber" placeholder="Telefonszám"><br>
      <button>Mentés</button>
    </form>
  </div>
  <h4 v-if="saving">Köszönjük, hogy e szalont választotta!</h4>
</template>

<script setup>
import { useTimeTableStore } from '@/stores/timeTable';
import { ref, computed, onMounted } from 'vue'
const timeTable = useTimeTableStore()
import { useRouter } from 'vue-router';
const router = useRouter()

const name = ref("")
const phoneNumber = ref("")
const saving = ref(false)

if(timeTable.reserveDay == "" ||timeTable.reserveHour == 0) {router.push("/");}

const save = ()=>{
  saving.value = true
  timeTable.FillSlot(timeTable.reserveDay, timeTable.reserveHour, name.value, phoneNumber.value)
  setTimeout(timeTable.FetchFilledSlots,250)
  setTimeout(timeTable.TableGen,750)
  setTimeout(()=>{router.push("/"), 1000})
}




</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
