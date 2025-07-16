<template>
  <div id="catalogPanel" class="catalog-panel">
    <span id="closeCatalog" class="catalog-back" @click="$emit('close')">←</span>

    <div class="catalog-wrapper">
      <aside class="catalog-sidebar">
        <h4>КАТЕГОРИИ</h4>
        <hr class="catalog-line" />
        <ul class="catalog-categories">
          <li class="active">Все украшения</li>
          <li>Серьги</li>
          <li>Кольца</li>
          <li>Браслеты</li>
          <li>Цепочки</li>
          <li>Сеты</li>
          <li>Пояса</li>
          <li>Чокеры</li>
        </ul>
      </aside>

      <section class="catalog-grid">
        <div class="product-item" v-for="n in 6" :key="n">
          <img src="/images/jewelry1.png" alt="Колье" />
          <div class="product-meta">
            <span>Колье</span>
            <span>10 000 Р</span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>