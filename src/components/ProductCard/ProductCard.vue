<template>
  <div class="product-card" :class="{ 'single-card': single }">
    <img :src="image" :alt="title" />
    <div :class="single ? 'product-info-jacket' : 'product-info'">
      <div class="product-info-text">
        <p>{{ title }}</p>
        <p>{{ price }}</p>
      </div>
      <div
        class="favorite"
        :class="{ active: modelValue }"
        @click="$emit('update:modelValue', !modelValue)"
      ></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  title: String,
  price: String,
  single: Boolean,
  modelValue: Boolean
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
.favorite {
  width: 24px;
  height: 24px;
  cursor: pointer;
  background-image: url('/public/images/Star 1.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: background-image 0.3s ease;
}
.favorite.active {
  background-image: url('/public/images/fill_star.svg');
}
</style>
