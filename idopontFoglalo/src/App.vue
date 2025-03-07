<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    
  </header>

  <RouterView />
  
  <!-- fodrász téma -->
</template>
<style>
  nav *{
    padding: 5px;
    background-color: aquamarine;
    border: 2px solid aqua;
  }
</style>

