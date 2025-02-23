<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light  px-5">
         
  <router-link class="navbar-brand" to="/">
    <img :src="Logo" class="logo" alt="Logo">
  </router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ms-auto">
      <li class="nav-item"  @click="isActive">
        <router-link  class="tab" to="/">Home</router-link>
      </li>
      <li class="nav-item" @click="isActive">
        <router-link  class="tab" to="/about">About</router-link>
      </li>

      <li class="nav-item" @click="isActive">
        <router-link  class="tab" to="/service">Service</router-link>
      </li>
    </ul>


    
  </div>
</nav>

    </div>

</template>

<script setup>
import Logo from '../../assets/to-do-list.png';
  function isActive() {
    isLoading.value=!isLoading.value
  }
  
</script>


<style>
  .tab{
     text-decoration: none;
     color: brown;
     font-weight: bold;
     margin: 20px;
  }
  .logo{
    width: 55px;
  }
</style>