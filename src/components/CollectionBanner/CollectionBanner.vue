<template>
  <div class="collection-banner">
    {{ text }}
  </div>
</template>

<script setup>
defineProps({
  text: String
})
</script>