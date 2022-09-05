<template>
  <section class="watched">
    <div class="content">
      <h2 class="h2 watched__title">
        Вы смотрели
      </h2>
      <div class="watched__slider custom-slider">
        <VueSlickCarousel v-bind="settings">
          <template #prevArrow="arrowOption">
            <div class="custom-arrow custom-prev">
              <Arrow/>
            </div>
          </template>
          <template #nextArrow="arrowOption">
            <div class="custom-arrow custom-next">
              <Arrow/>
            </div>
          </template>
          <div class="watched__slide" v-for="(item,index) in slides" :key="index">
            <div class="watched__img d-flex justify-content-between align-items-center">
              <img :src="item.img" alt="">
              <div class="watched__head">{{ item.title }}</div>
            </div>
            <div class="watched__price d-flex align-items-center justify-content-between">

              <span class="watched__new">{{ item.newPrice }} руб.</span>

              <span class="watched__old">{{ item.oldPrice }} руб.</span>
            </div>
          </div>
        </VueSlickCarousel>
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
          img: require('assets/img/novelty/1.png'),
          title: 'Настенная вытяжка Graude Classic DHE 50.1 S',
          newPrice: 650000,
          oldPrice: 650000,
          url: '/',
        },
        {
          img: require('assets/img/novelty/1.png'),
          title: 'Настенная вытяжка Graude Classic DHE 50.1 S',
          newPrice: 650000,
          oldPrice: 650000,
          url: '/',
        },
        {
          img: require('assets/img/novelty/1.png'),
          title: 'Настенная вытяжка Graude Classic DHE 50.1 S',
          newPrice: 650000,
          oldPrice: 650000,
          url: '/',
        },
        {
          img: require('assets/img/novelty/1.png'),
          title: 'Настенная вытяжка Graude Classic DHE 50.1 S',
          newPrice: 650000,
          oldPrice: 650000,
          url: '/',
        },
        {
          img: require('assets/img/novelty/1.png'),
          title: 'Настенная вытяжка Graude Classic DHE 50.1 S',
          newPrice: 650000,
          oldPrice: 650000,
          url: '/',
        },
        {
          img: require('assets/img/novelty/1.png'),
          title: 'Настенная вытяжка Graude Classic DHE 50.1 S',
          newPrice: 650000,
          oldPrice: 650000,
          url: '/',
        },
      ],
      settings: {
        arrows: true,
        dots: false,
        slidesToShow: 6,
        "responsive": [
          {
            "breakpoint": 1620,
            "settings": {
              "slidesToShow": 5,
            }
          },
          {
            "breakpoint": 1439,
            "settings": {
              "slidesToShow": 4,
            }
          },
          {
            "breakpoint": 991,
            "settings": {
              "slidesToShow": 3,
            }
          },
          {
            "breakpoint": 767,
            "settings": {
              "slidesToShow": 2,
              "arrows": false,
            }
          },
          {
            "breakpoint": 540,
            "settings": {
              "arrows": false,
              "slidesToShow": 1,
            }
          }
        ]
      },
    }
  },
  components: {Arrow, VueSlickCarousel, Star},
}
</script>
