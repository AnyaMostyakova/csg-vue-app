<template>
  <section class="products">
    <div class="container">
      <div class="product-grid" v-if="!isMobile">
        <ProductCard
          v-for="(product, index) in products"
          :key="'grid-' + index"
          :image="product.image"
          :title="product.title"
          :price="product.price"
          v-model="product.isFavorite"
        />
      </div>
      <div class="swiper-container product-swiper" v-else>
        <div class="swiper-wrapper">
          <div
            v-for="(product, index) in products"
            :key="'swiper-' + index"
            class="swiper-slide"
          >
            <ProductCard
              :image="product.image"
              :title="product.title"
              :price="product.price"
              v-model="product.isFavorite"
            />
          </div>
        </div>

        <div class="swiper-button-prev product-prev">
          <img src="/public/images/jeans_left.svg" alt="left" />
        </div>
        <div class="swiper-button-next product-next">
          <img src="/public/images/jeans_right.svg" alt="right" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ProductCard from '../ProductCard/ProductCard.vue'

const products = ref([
  {
    image: '/public/images/denim.png',
    title: 'ДЖИНСОВЫЙ КОСТЮМ',
    price: '12 990 РУБ.',
    isFavorite: false
  },
  {
    image: '/public/images/denim.png',
    title: 'ДЖИНСОВЫЙ КОСТЮМ',
    price: '12 990 РУБ.',
    isFavorite: false
  },
  {
    image: '/public/images/denim.png',
    title: 'ДЖИНСОВЫЙ КОСТЮМ',
    price: '12 990 РУБ.',
    isFavorite: false
  }
])

const isMobile = ref(window.innerWidth < 525)

function handleResize() {
  isMobile.value = window.innerWidth < 525
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>
