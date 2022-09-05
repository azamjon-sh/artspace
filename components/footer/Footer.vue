<template>
  <footer class="footer">
    <div class="content">
      <div class="row justify-content-between align-items-start">
        <div class="col-12 col-xl-auto footer__logo order-last">
          <a href="/" class="d-none d-md-inline">
            <img :src="require('assets/img/footer/logo-white.png')" alt="">
          </a>
          <div class="footer-copyright mt-3">© 2022 ARTSPACE</div>
        </div>
        <div class="col-12 col-lg-auto footer__seller order-2">
          <div class="footer__title" @click="changeTrigger('seller')">
            Покупателю
          </div>
          <div class="row flex-column flex-md-row justify-content-between"
               :class="footerTrigger.seller?'open':'close'">
            <ul class="list-unstyled footer__list col-auto m-0 me-xxl-3">
              <li class="footer__item">
                <a href="/" class="footer__link">Доставка</a>
              </li>
              <li class="footer__item">
                <a href="/" class="footer__link">Способы оплаты </a>
              </li>
              <li class="footer__item">
                <a href="/" class="footer__link">Банковская карта </a>
              </li>
              <li class="footer__item">
                <a href="/" class="footer__link">Установка техники </a>
              </li>
              <li class="footer__item">
                <a href="/" class="footer__link">Бренды</a>
              </li>
              <li class="footer__item">
                <a href="/" class="footer__link">Гарантии</a>
              </li>
              <li class="footer__item">
                <a href="/" class="footer__link">О персональных данных </a>
              </li>
              <li class="footer__item">
                <a href="/" class="footer__link">Договор-оферты </a>
              </li>
            </ul>
            <ul class="list-unstyled footer__list col-auto">
              <li class="footer__item">
                <a href="/" class="footer__link">Самовывоз</a>
              </li>
              <li class="footer__item">
                <a href="/" class="footer__link">Рассрочка и кредит
                </a>
              </li>
              <li class="footer__item">
                <a href="/" class="footer__link">Обмен и возврат
                </a>
              </li>
              <li class="footer__item">
                <a href="/" class="footer__link">Запасные части
                </a>
              </li>
              <li class="footer__item">
                <a href="/" class="footer__link">Конфиденциальность</a>
              </li>
              <li class="footer__item">
                <a href="/" class="footer__link">Отслеживаемые товары</a>
              </li>
              <li class="footer__item">
                <a href="/" class="footer__link">Карта сайта</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-lg-auto footer__about order-3">
          <div class="footer__title" @click="changeTrigger('company')">
            О компании
          </div>
          <ul class="list-unstyled footer__list col-auto"
              :class="footerTrigger.company?'open':'close'">
            <li class="footer__item">
              <a href="/" class="footer__link">О Компании</a>
            </li>
            <li class="footer__item">
              <a href="/" class="footer__link">Новости</a>
            </li>
          </ul>
        </div>
        <div class="col-12 col-lg-auto footer__contact order-first order-md-last">
          <div class="row flex-column flex-md-row">
            <div class="col-12 col-md order-2 footer__contact_first">
              <div class="footer__title">
                Контактная информация
              </div>
              <ul class="list-unstyled footer__list col-auto">
                <li class="footer__item">
                  <a href="/" class="footer__link">+7 964 503 38 45</a>
                </li>
                <li class="footer__item">
                  <a href="/" class="footer__link">info@artspace.space</a>
                </li>
                <li class="footer__item">
                  <a href="/" class="footer__link">Москва, Красноказарменная, д.14А, к.5</a>
                </li>

              </ul>
            </div>
            <div class="col-12 col-md-5 order-2">
              <div class="footer__title">
                Мы в социальных сетях:
              </div>
              <ul class="list-unstyled footer__list col-auto d-flex align-items-center">
                <li class="footer__item me-3">
                  <a href="/" class="footer__link">
                    <img :src="require('assets/img/footer/telegram.svg')" alt="">
                  </a>
                </li>
                <li class="footer__item">
                  <a href="/" class="footer__link">
                    <img :src="require('assets/img/footer/vk.svg')" alt="">
                  </a>
                </li>
              </ul>
            </div>
            <form action="" class="col-12 order-1 order-md-3 footer__form row align-items-end">
              <div class="footer__title col-12">
                Подпишитесь на акции и скидки
              </div>
              <label class="footer__label col">
                <img :src="require('assets/img/footer/mail.png')" alt="">
                <input type="text" class="footer__input" placeholder="Введите ваш email">
              </label>
              <button type="submit" class="col-auto footer__btn"><span>Подписаться</span></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerTrigger: {
        company: false,
        seller: false
      }
    }
  }, methods: {
    changeTrigger(text) {
      if (text === 'seller') {
        this.footerTrigger.seller = !this.footerTrigger.seller
      } else if (text === 'company') {
        this.footerTrigger.company = !this.footerTrigger.company
      }
    }
  }
}
</script>

<style scoped>

</style>
