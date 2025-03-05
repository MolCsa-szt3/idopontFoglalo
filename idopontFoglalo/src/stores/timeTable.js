import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTimeTableStore = defineStore('timeTable', () => {
  const filledSlots = ref([])
  const days = ref(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"])
  
  const FillSlot = (day, hour, type)=>{

  }
  const FetchFilledSlots = ()=>{
    //axios get
  }
  return { filledSlots, days  }
})
