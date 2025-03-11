<script setup>
import { useTimeTableStore } from '@/stores/timeTable';
import { ref, computed, onMounted } from 'vue'
const timeTable = useTimeTableStore()

onMounted(()=> {
  timeTable.FetchFilledSlots()
  .then( () => {
    setTimeout(timeTable.TableGen,100)
  })
})

</script>

<template>
  <main>
    <div v-for=" dates in timeTable.table" >
      <h4>{{ dates.day }}</h4>
      <p>{{ dates.hour }}:00</p>
      <p v-if="dates.taken">TAKEN!</p>
    </div>
  </main>
</template>
