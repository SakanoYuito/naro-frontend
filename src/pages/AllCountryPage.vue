<script setup lang="ts">
import { ref, onMounted } from 'vue';

const countries = ref()

onMounted(async () => {
    const res = await fetch('/api/countries')
    if (res.ok) {
        countries.value = await res.json()
    }
})
</script>

<template>
  <div>
    <li v-for="country in countries" @click="() => $router.push('/countries/' + country['name'])">{{ country["name"] }}</li>
  </div>
</template>