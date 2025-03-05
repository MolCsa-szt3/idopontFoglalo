import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTimeTableStore = defineStore('timeTable', () => {
  const filledSlots = ref([])
  const days = ref(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"])
  
  const FillSlot = (day, hour, name, phoneNumber)=>{
    //axios push
    return;
  }
  const FetchFilledSlots = ()=>{
    //axios get
  }
  const IsSlotFilled = ()=>{
    return false;
  }

  return { filledSlots, days, FillSlot, FetchFilledSlots, IsSlotFilled }
})
