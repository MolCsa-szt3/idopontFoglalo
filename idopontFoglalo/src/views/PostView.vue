<template>
  <h3>Időpontfoglalás</h3>
  <form @submit.prevent="save">
    <p>Foglal: {{timeTable.reserveDay}} {{ timeTable.reserveHour }}:00</p>
    <input type="text" v-model="name" placeholder="Feladat neve"><br>
    <input type="text" v-model="phoneNumber"><br>
    <button>Mentés</button>
  </form>
</template>

<script setup>
import { useTimeTableStore } from '@/stores/timeTable';
import { ref, computed, onMounted } from 'vue'
const timeTable = useTimeTableStore()
import { useRouter } from 'vue-router';
const router = useRouter()


if(timeTable.reserveDay == "" ||timeTable.reserveHour == 0) {router.push("/");}




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
