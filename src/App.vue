<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
  components: {
    HelloWorld,
  },
  data() {
    return {
      selectedUsername: "",
    };
  },
  methods: {
    showData(params) {
      this.selectedUsername = params;
    },
  },
};
</script>

<template>
  <div class="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
    <p class="text-3xl text-gray-700 font-bold mb-5">Welcome!</p>
    <p class="text-gray-500 text-lg">Vue and Tailwind CSS in action</p>
    <p class="text-gray-500">username: {{ selectedUsername }}</p>
  </div>
  <HelloWorld @res="showData" username="Mamang Racing"
    >Ini slot yang diberikan parent</HelloWorld
  >
  <HelloWorld @res="showData" username="Wahyu" />
</template>
