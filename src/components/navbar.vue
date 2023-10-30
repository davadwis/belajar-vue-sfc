import { RouterLink } from 'vue-router';

<template>
  <div class="flex justify-center content-center">
    <div class="fixed top-0 w-1/2 border-[2px] rounded-md backdrop-blur-md p-2">
      <div class="flex gap-4 content-center justify-center">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/user">User</RouterLink>
      </div>
    </div>
  </div>
</template>
