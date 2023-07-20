<script setup lang="ts">
function signout() {
    fetch("/api/signout", {
        method: "POST"
    })
}
</script>

<template>
  <button @click="signout">Sign Out</button>
</template>