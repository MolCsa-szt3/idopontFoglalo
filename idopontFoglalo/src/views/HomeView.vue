<script setup>
import { useTimeTableStore } from '@/stores/timeTable';
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router';
const timeTable = useTimeTableStore()
const router = useRouter()


onMounted(async ()=> {
  timeTable.FetchFilledSlots()
  .then( () => {
    setTimeout(timeTable.TableGen,750)
    //thanks JS for honoring the .then()
  })
})
const reserveTime = (day, hour) =>{
  timeTable.reserveDay = day;
  timeTable.reserveHour = hour;
  router.push("/post")
}
timeTable.filledSlots.forEach(element => {
  console.log(element);
  
});
</script>

<template>
  <main>
    <h2>Időpontfoglalás hajvágásra:</h2>
    <div class="container">
      <div class="row">
        <div v-for="day in timeTable.days" class="col-1">
          <h4>{{ day }}</h4>
            <div v-for=" dates in timeTable.table">
                <div v-if="dates.day == day" >
          
                  <div class="border">
                    <p>{{ dates.hour }}:00</p>
                    <p v-if="dates.taken">FOGLALT</p>
                    <button v-if="!dates.taken" v-on:click="reserveTime(dates.day,dates.hour)" >SZABAD</button>
                    
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.row{
  display: flex;
  width: 80%;
  flex-direction: row;
}
.col-1{
  display: flex;
  flex-direction: column;
  margin: 5px;
}
.border{
  border: 2px black solid;
  padding: 5x;
  height: 100px;
}
button{
  padding: 5px;
}
</style>