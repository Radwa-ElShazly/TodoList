<template>
  <div>
    <!-- <p>Count:{{ count }}</p> -->
    <!-- //when I use sample data -->
    <!-- <h2 v-show="count==5">I am 5 or more</h2> -->
    <!-- //any heavy data  i use v-if  
     msh mogoda feh dom-->
    <!-- <h2 v-if="count==7">I am 7 or more</h2> -->
    <!-- dirctive -->
    <!-- <button @click="increment">Increment</button> -->
    <!-- <button @click="decrement">decrement</button> -->

      <li v-for="item in filteredItems" :key="item.id">
         {{ item.username }}
      </li>

  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
// Create a reactive reference for the count
// const count = ref(0);

const data=ref(  [
    {
      username:'Joha',
      age:38,
      city:'New York',
      isActive:true,
    },
    {
    username:'Sara',
      age:30,
      city:'India',
      isActive:false,

    },

    {
    username:'Ahmed',
      age:20,
      city:'Egypt',
      isActive:true,

    },

    {
    username:'Mostafa',
      age:40,
      city:'United state',
      isActive:false,
    },
])



const filteredItems= computed(()=> data.value.filter(item => item.isActive))



// Function to increment the count
// function increment() {
//   count.value++;
// }

// function decrement(){
//   count.value--;

// }


</script>

<style scoped>
.counter {
  text-align: center;
  margin-top: 20px;
}
button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #788a82;
}
</style>