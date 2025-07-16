<template>
<footer class="footer">
  <div class="footer-container">
    <div class="footer-subscribe">
      <p>ПОДПИСКА НА РАССЫЛКУ И СКИДКА</p>
      <button class="subscribe-btn">ПОДПИСАТЬСЯ</button>
    </div>

    <div class="footer-columns">
      <div class="footer-column">
        <h4>ПОМОЩЬ</h4>
        <ul>
          <li><a href="#">Оплата</a></li>
          <li><a href="#">Доставка</a></li>
          <li><a href="#">Обмен и возврат</a></li>
          <li><a href="#">Подарочные карты</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h4>КОНТАКТЫ</h4>
        <p>Обратная связь<br>Контакты<br>8 800 250-19-50</p>
        <div class="footer-social">
          <a href="#"><img src="/public/images/tg.svg" alt="Telegram" /></a>
          <a href="#"><img src="/public/images/vk.svg" alt="VK" /></a>
          <a href="#"><img src="/public/images/inst.svg" alt="Instagram" /></a>
        </div>
      </div>

      <div class="footer-column">
        <h4>ИНФОРМАЦИЯ</h4>
        <ul>
          <li><a href="#">О компании</a></li>
          <li><a href="#">Публичная оферта</a></li>
          <li><a href="#">Политика конфиденциальности</a></li>
          <li><a href="#">Использование файлов cookie</a></li>
        </ul>
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <span>© ANNONCE<br>Все права защищены</span>
    <img src="/public/images/csg.svg" alt="Creative Spirit Group" />
    <a href="#" class="to-top">↑</a>
  </div>
</footer>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const toTopBtn = document.querySelector('.to-top')
  if (toTopBtn) {
    window.addEventListener('scroll', () => {
      toTopBtn.classList.toggle('show', window.scrollY > 300)
    })

    toTopBtn.addEventListener('click', (e) => {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  }
})
</script>
