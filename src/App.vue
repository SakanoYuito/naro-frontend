<script setup lang="ts">
import { ref } from 'vue';
const cityname = ref('')


</script>

<template>
  <main>
    <div :class="$style.container">
      <header :class="$style.header">
        <router-link to="/">Home</router-link>
        |
        <router-link to="/ping">Ping</router-link>
        |
        <router-link to="/cities/Tokyo">Tokyo</router-link>
        |
        <router-link to="/countries">Countries</router-link>
        |
        <router-link to="/signin">SignIn</router-link>
        |
        <router-link to="/signout">SignOut</router-link>
      </header>
      <router-view />
    </div>
    <input v-model="cityname" />
    <button @click="() => $router.push('/cities/' + cityname)">Go</button>
  </main>
</template>

<style module>
.container {
  max-width: fit-content;
  margin: auto;
}
.header {
  display: flex;
  justify-content: center;
}
</style>