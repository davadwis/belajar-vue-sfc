<script>
export default {
  props: {
    username: String,
  },
  emits: ["res"],
  methods: {
    showData() {
      this.$emit("res", this.username);
    },
  },
};
</script>

<template>
  <div class="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
    <slot>Ini slot default</slot>
    <p class="text-3xl text-gray-700 font-bold mb-5">
      Halo nama saya {{ username }} {{ " " }}
      <button
        @click="showData"
        class="border-2 rounded-md bg-sky-500 p-4 hover:scale-105 text-white"
      >
        choose
      </button>
    </p>
  </div>
</template>
