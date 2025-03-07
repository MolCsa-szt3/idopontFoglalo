<script setup>
import { useTimeTableStore } from '@/stores/timeTable';
import { ref, computed } from 'vue'
const timeTable = useTimeTableStore()
timeTable.FetchFilledSlots();
</script>

<template>
  <main>
    <div v-for=" slotFilled in timeTable.filledSlots" >
      <p>{{ slotFilled.name }}</p>
    </div>
  </main>
</template>
