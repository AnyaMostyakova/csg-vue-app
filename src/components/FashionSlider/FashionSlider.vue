<template>
  <section class="hero-slider hero-slider--fashion">
    <div class="slider-overlay-subtext--fashion">
      <p class="subtitle">FASHION SHOW</p>
      <p class="collection-title">OUR FASHION SHOW SOON</p>
    </div>

    <div class="swiper-container fashion-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="slide-wrapper-jacket">
            <div class="slide-image">
              <img src="/public/images/girls.jpg" alt="girls" />
            </div>
            <div class="slide-empty"></div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="slide-wrapper-jacket">
            <div class="slide-image">
              <img src="/public/images/girls.jpg" alt="girls" />
            </div>
            <div class="slide-empty"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="swiper-button-prev fashion-prev"><img src="/public/images/arrow_fashion_left.svg" alt="left" /></div>
    <div class="swiper-button-next fashion-next"><img src="/public/images/arrow_fashion_right.svg" alt="right" /></div>
  </section>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'
import Swiper from 'swiper'
import '/node_modules/swiper/swiper-bundle.min.css'

onMounted(async () => {
  await nextTick()

  new Swiper('.fashion-swiper', {
    loop: true,
    speed: 800,
    navigation: {
      nextEl: '.fashion-next',
      prevEl: '.fashion-prev',
    },
  })
})
</script>
