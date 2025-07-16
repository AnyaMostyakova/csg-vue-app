<template>
  <header class="header">
    <div class="header-left">
      <div class="menu-icon" id="menuToggle" @click="openCatalog">&#9776;</div>
      <div class="logo"><img src="/public/images/logo.svg" alt="logo"></div>
    </div>
    <nav class="nav-icons">
      <a href="#" @click.prevent="openCatalog">
        <span class="icon">
          <img src="/public/images/search.png" alt="search" />
        </span>
      </a>
      <a href="#"><span class="icon"><img src="/public/images/account.png" alt="account" /></span></a>
      <a href="#"><span class="icon"><img src="/public/images/shopping_cart.png" alt="shopping_cart" /></span></a>
      <a href="#"><span class="icon"><img src="/public/images/favorites.png" alt="favorites" /></span></a>
    </nav>
  </header>

  <CatalogPanel v-if="isCatalogOpen" @close="closeCatalog" />
</template>

<script setup>
import { ref } from 'vue'
import CatalogPanel from '../CatalogPanel/CatalogPanel.vue'

const isCatalogOpen = ref(false)

const openCatalog = () => {
  isCatalogOpen.value = true
}

const closeCatalog = () => {
  isCatalogOpen.value = false
}
</script>
