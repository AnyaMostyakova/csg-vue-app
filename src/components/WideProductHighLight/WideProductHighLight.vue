<template>
  <section class="wide-product-highlight">
    <div class="wide-product-image">
      <img src="/public/images/mittens.png" alt="Mittens" />
    </div>

    <ProductCard
      image="/public/images/jacket.png"
      title="ЖАКЕТ"
      price="12 900 РУБ."
      :single="true"
      v-model="isFavorite"
    />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ProductCard from '../ProductCard/ProductCard.vue'

const isFavorite = ref(false)
</script>
