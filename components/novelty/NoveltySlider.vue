<template>
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
    <div class="custom-slide" v-for="(item,index) in slides" :key="index">
      <div v-if="item.mark" class="custom-discount" :class="item.mark.color ?? ''">
        {{ item.mark.text }}
      </div>
      <div class="custom-img">
        <img :src="item.img" alt="">
      </div>
      <div class="custom-code" v-if="item.code">
        {{ item.code }}
      </div>
      <div class="custom-title">{{ item.title }}</div>
      <div class="custom-info d-flex align-items-center">
        <div class="custom-stars me-2" :class="'custom-stars_'+item.stars">
          <Star/>
        </div>
        <div class="custom-reviews" v-if="item.reviews">
          {{ item.reviews + ' ' + (item.reviews > 1 ? (item.reviews > 4 ? 'отзывов' : 'отзыва') : 'отзыв') }}
        </div>
      </div>
      <div class="custom-old-price" v-if="item.oldPrice">
        {{ item.oldPrice }} руб.
      </div>
      <div class="custom-new-price">
        {{ item.newPrice }} руб.
      </div>
      <div class="custom-bottom align-items-center justify-content-between">
        <button class="custom-btn_basket">
          <Cart/>
        </button>
        <button class="custom-btn_favorite">
          <Heart/>
        </button>
        <button class="custom-btn_compare">
          <Chart/>
        </button>
      </div>
    </div>
  </VueSlickCarousel>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel';
import Arrow from "assets/img/intro/Arrow";
import Star from "assets/img/novelty/Star"
import Cart from "assets/img/header/cart";
import Heart from "assets/img/header/heart";
import Chart from "assets/img/header/chart";

export default {
  name: "NoveltySlider",
  props: {
    slides: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
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
            "breakpoint": 1199,
            "settings": {
              "slidesToShow": 3,
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
              "arrows": false
            }
          },
          {
            "breakpoint": 540,
            "settings": {
              "slidesToShow": 1,
            }
          }
        ]
      },
    }
  },
  components: {Chart, Heart, Cart, Arrow, VueSlickCarousel, Star},
}
</script>
