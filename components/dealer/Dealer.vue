<template>
  <section class="dealer">
    <div class="content">
      <h2 class="h2 dealer__title">
        Официальный дилер
      </h2>
      <div class="dealer__slider custom-slider">
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
            <div class="custom-img">
              <img :src="item.img" alt="">
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

export default {
  name: "Dealer",
  data() {
    return {
      settings: {
        arrows: true,
        dots: false,
        slidesToShow: 8,
        "responsive": [
          {
            "breakpoint": 1620,
            "settings": {
              "slidesToShow": 7,
            }
          },
          {
            "breakpoint": 1439,
            "settings": {
              "slidesToShow": 6,
            }
          },
          {
            "breakpoint": 1199,
            "settings": {
              "slidesToShow": 5,
            }
          },
          {
            "breakpoint": 991,
            "settings": {
              "slidesToShow": 4,
            }
          },
          {
            "breakpoint": 767,
            "settings": {
              "slidesToShow": 3,
              "arrows":false,
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
      slides: [
        {
          img: require('assets/img/dealer/1.png'),
        },
        {
          img: require('assets/img/dealer/2.png'),
        },
        {
          img: require('assets/img/dealer/3.png'),
        },
        {
          img: require('assets/img/dealer/4.png'),
        },
        {
          img: require('assets/img/dealer/5.png'),
        },
        {
          img: require('assets/img/dealer/6.png'),
        },
        {
          img: require('assets/img/dealer/7.png'),
        },
        {
          img: require('assets/img/dealer/8.png'),
        },
        {
          img: require('assets/img/dealer/1.png'),
        },
        {
          img: require('assets/img/dealer/2.png'),
        },
        {
          img: require('assets/img/dealer/3.png'),
        },
        {
          img: require('assets/img/dealer/4.png'),
        }
      ],
    }
  },
  components: {
    VueSlickCarousel, Arrow
  },

}
</script>
