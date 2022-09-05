<template>
  <section class="news">
    <div class="content">
      <h2 class="h2 news__title">
        Официальный дилер
      </h2>
      <div class="news__slider custom-slider">
        <VueSlickCarousel v-bind="settings">
          <div class="news__slide" v-for="(item,index) in slides" :key="index">
            <div class="news__img">
              <img :src="item.img" alt="">
            </div>
            <div class="news__price" v-if="item.date">
              {{ item.date }}
            </div>
            <div class="news__title">{{ item.title }}</div>
          </div>
        </VueSlickCarousel>
      </div>
      <div class="news__link">
        <span>Ко всем новостям</span>
        <Arrow/>
      </div>
    </div>
  </section>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel';
import Arrow from "assets/img/intro/Arrow";
import Star from "assets/img/novelty/Star"

export default {
  data() {
    return {
      slides: [
        {
          img: require('assets/img/news/last-1.png'),
          title: 'Один прибор - две функции Kuppersbusch',
          date: '11.05.2022',

          url: '/',
        },
        {
          img: require('assets/img/news/last-2.png'),
          title: 'Elements by ASKO: Стихии дизайна',
          date: '11.05.2022',

          url: '/',
        },
        {
          img: require('assets/img/news/last-3.png'),
          title: 'ASKO Craft: Наша линейка Craft созвучна всем скандинавским изобретениям.',
          date: '11.05.2022',
          url: '/',
        },

      ],
      settings: {
        arrows: false,
        dots: false,
        slidesToShow: 3,
        "responsive": [
          {
            "breakpoint": 1199,
            "settings": {
              "slidesToShow": 2,
            }
          },
          {
            "breakpoint": 767,
            "settings": {
              "slidesToShow": 1,
            }
          },
        ]
      },
    }
  },
  components: {Arrow, VueSlickCarousel, Star},
}
</script>
