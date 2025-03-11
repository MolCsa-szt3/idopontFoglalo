<script setup>
import { useTimeTableStore } from '@/stores/timeTable';
import { ref, computed, onMounted } from 'vue'
const timeTable = useTimeTableStore()

onMounted(async ()=> {
  timeTable.FetchFilledSlots()
  .then( () => {
    setTimeout(timeTable.TableGen,150)
    //thanks JS for honoring the .then()
  })
})

</script>

<template>
  <main>
    <div>
      <div v-for=" dates in timeTable.table" >
        <h4>{{ dates.day }}</h4>
        <p>{{ dates.hour }}:00</p>
        <p v-if="dates.taken">TAKEN!</p>
      </div>
    </div>
  </main>
</template>
