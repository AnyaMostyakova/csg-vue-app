<template>
<section class="hero-slider">
  <div class="slider-overlay-text">
    <p class="subtitle">BE FEMININE - CHOOSE US</p>
    <a href="#" class="look-link">LOOK ALL</a>
  </div>

  <div class="swiper-container main-swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="slide-wrapper">
          <div class="slide-image">
            <img src="/public/images/red_dress.jpg" alt="Red Dress" />
          </div>
          <div class="slide-empty"></div>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="slide-wrapper">
          <div class="slide-image">
            <img src="/public/images/red_dress.jpg" alt="red_dress" />
          </div>
          <div class="slide-empty"></div>
        </div>
      </div>
    </div>

    <div class="swiper-button-prev main-prev"><img src="/public/images/left.svg" alt="left"></div>
    <div class="swiper-button-next main-next"><img src="/public/images/right.svg" alt="right"></div>
  </div>
</section>
</template>

<script setup>
import { onMounted } from 'vue'
import Swiper from 'swiper'

onMounted(() => {
  new Swiper('.main-swiper', {
    loop: true,
    speed: 800,
    navigation: {
      nextEl: '.main-next',
      prevEl: '.main-prev',
    },
  })
})
</script>