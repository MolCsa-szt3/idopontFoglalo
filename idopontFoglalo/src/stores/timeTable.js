import { ref, computed, callWithAsyncErrorHandling } from 'vue'
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
  // const FetchFilledSlots = async ()=>{
  //   apiClient.get('/')
  // .then(response => {
  //   filledSlots.value = response.data;
  //   console.log(response.data)
  //   console.log(filledSlots.value.length)
  // })
  // .catch(error => {
  //   console.error(error);
  // });
  // }
  const FetchFilledSlots = async () => {
    axios.get('http://localhost:3000/foglaltIdopontok')
    .then(resp => filledSlots.value = resp.data)
  } 

  const TableGen = ()=>{
    console.log("we started")
    for (let index = 0; index < days.value.length; index++) {
      const currentDay = days.value[index];
      //console.log("we at " + currentDay)
      for (let currentHour = startHour.value; currentHour <= endHour.value; currentHour++) {
        let isTaken = false
        console.log(filledSlots.value.length)
        filledSlots.value.forEach(element => {
          //console.log(element.day,currentDay ,element.hour, currentHour, element.day == currentDay && element.hour == currentHour);
          
          if(!isTaken && element.day == currentDay && element.hour == currentHour){
            table.value.push({
              "day": currentDay,
            "hour": currentHour,
            "taken": true
            })
            
            isTaken = true;
          }
        });
        
        if(!isTaken){
          table.value.push({
            "day": currentDay,
            "hour": currentHour,
            "taken": false
          });
        }
      }
      
    }
  }
  const reserveDay = ref("")
  const reserveHour = ref(0)
  return { table, filledSlots, days, FillSlot, FetchFilledSlots, TableGen, reserveDay, reserveHour}
})
