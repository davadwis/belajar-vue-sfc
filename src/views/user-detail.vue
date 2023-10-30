<template>
  <div class="py-20">
    <h1 class="text-2xl font-semibold">
      Halaman Detail {{ $route.params.id }}
    </h1>
    <div>
      <button>
        <RouterLink :to="'/user/' + $route.params.id + '/posts'">
          Posts
        </RouterLink>
        <RouterLink :to="'/user/' + $route.params.id + '/profile'">
          Profile
        </RouterLink>
      </button>
    </div>
  </div>
</template>
