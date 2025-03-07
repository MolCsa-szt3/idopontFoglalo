import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const useTimeTableStore = defineStore('timeTable', () => {
  const table = ref([])
  const filledSlots = ref([])
  const days = ref(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"])
  const startHour = ref(8)
  const endHour = ref(16)

  const apiClient = axios.create({
    baseURL: 'http://localhost:3000/foglaltIdopontok',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const FillSlot = (day, hour, name, phoneNumber)=>{
    //axios push
    return;
  }
  const FetchFilledSlots = ()=>{
    apiClient.get('/')
  .then(response => {
    filledSlots.value = response.data;
  })
  .catch(error => {
    console.error(error);
  });
  }
  const TableGen = ()=>{
    for (let index = 0; index < days.length; index++) {
      const currentDay = array[index];
      for (let currentHour = startHour; currentHour <= endHour; currentHour++) {
        filledSlots.forEach(element => {
          if(element.day == currentDay && element.hour == currentHour={})
        });
        
      }
      
    }
  }

  return { filledSlots, days, FillSlot, FetchFilledSlots, IsSlotFilled }
})
