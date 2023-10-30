import { RouterView } from 'vue-router';

<script setup>
import navbar from "./components/navbar.vue";
</script>

<template>
  <div>
    <navbar />
    <div
      class="w-11/12 m-auto border-2 rounded-md bg-slate-200 py-10 text-center"
    >
      <RouterView />
    </div>
  </div>
</template>
