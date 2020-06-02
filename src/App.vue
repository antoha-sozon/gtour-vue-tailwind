<template>
  <div id="app" class="relative overflow-auto antialiased flex flex-col h-screen pt-16 px-4 text-gray-900 bg-blue-900">
    <navigation/>
    <router-view/>
  </div>
</template>

<script>
import navigation from "./components/Navigation";
export default {
  data() {
    return {
    }
  },
  components: {
      navigation
  }
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
body {
  font-family: 'Comfortaa', sans-serif;
}
</style>
