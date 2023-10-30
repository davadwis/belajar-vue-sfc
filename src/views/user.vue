<template>
  <div class="py-20">
    <h1 class="text-2xl font-semibold pb-4">Halaman User</h1>
    <h2 class="text-xl font-semibold text-justify">List User :</h2>
    <div class="text-justify">
      <ul>
        <li class="list-disc" v-for="user in users">
          <RouterLink :to="'/user/' + user.params">
            {{ user.name }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { params: "wahyu", name: "Wahyu" },
        { params: "agus", name: "Agus" },
        { params: "iman", name: "Iman" },
      ],
    };
  },
};
</script>
