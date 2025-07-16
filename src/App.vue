<template>
  <Header />
  <Sidebar />
  <CatalogPanel />
  <HeroSlider />
  <CollectionBanner text="NEW COLLECTION" />
  <ProductGrid />
  <CollectionBanner text="SOON" />
  <FashionSlider />
  <WideProductHighLight />
  <Footer />
</template>

<script setup>
import Header from './components/Header/Header.vue'
import Sidebar from './components/Sidebar/Sidebar.vue'
import CatalogPanel from './components/CatalogPanel/CatalogPanel.vue'
import HeroSlider from './components/HeroSlider/HeroSlider.vue'
import ProductGrid from './components/ProductGrid/ProductGrid.vue'
import FashionSlider from './components/FashionSlider/FashionSlider.vue'
import Footer from './components/Footer/Footer.vue'
import WideProductHighLight from './components/WideProductHighLight/WideProductHighLight.vue'
import CollectionBanner from './components/CollectionBanner/CollectionBanner.vue'
</script>
