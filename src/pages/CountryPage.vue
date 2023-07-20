<script setup lang="ts">
import { ref, onMounted } from 'vue';

const props = defineProps<{ countryName: string }>()
const cities = ref()

onMounted(async () => {
    const res = await fetch('/api/countries/' + props.countryName + '/cities')
    if (res.ok) {
        cities.value = await res.json()
    }
})
</script>

<template>
  <div>
    <li v-for="city in cities" @click="() => $router.push('/cities/' + city['name'])">{{ city["name"] }}</li>
  </div>
</template>