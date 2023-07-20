<script setup lang="ts">
import { ref } from 'vue';

const username = ref<string>('')
const password = ref<string>('')

function signin() {
    const data = {
        username: username.value,
        password: password.value
    }
    fetch('/api/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

</script>

<template>
  <input v-model="username" />
  <input v-model="password" />
  <button @click="signin">Submit</button>
</template>