<template>
  <section class="novelty">
    <div class="content">
      <h2 class="h2 novelty__title">
        Новые поступления
      </h2>
      <div class="custom-slider">
        <NoveltySlider :slides="slider"/>
      </div>
    </div>
  </section>
</template>
<script>
import NoveltySlider from "@/components/novelty/NoveltySlider";

export default {
  name: "Novelty",
  components: {NoveltySlider},
  data() {
    return {
      slider: [
        {
          img: require('assets/img/novelty/1.png'),
          code: 4993775,
          title: 'Средство для стирки тёмных и чёрных вещей UltraDark (1,5 л)',
          stars: 1,
          reviews: 1,
          oldPrice: 650000,
          newPrice: 150000,
          mark: {
            color: 'violet',
            text: "-30%",
          },
        },
        {
          img: require('assets/img/novelty/2.png'),
          code: 4993775,
          title: 'Средство для стирки тёмных и чёрных вещей UltraDark (1,5 л)',
          stars: 2,
          reviews: 3,
          oldPrice: 650000,
          newPrice: 150000,
          mark: {
            color: 'violet',
            text: "-30%",
          },
        },
        {
          img: require('assets/img/novelty/1.png'),
          code: 4993775,
          title: 'Средство для стирки тёмных и чёрных вещей UltraDark (1,5 л)',
          stars: 3,
          reviews: 5,
          oldPrice: 650000,
          newPrice: 150000,
          mark: {
            color: 'violet',
            text: "-30%",
          },
        },
        {
          img: require('assets/img/novelty/2.png'),
          code: 4993775,
          title: 'Средство для стирки тёмных и чёрных вещей UltraDark (1,5 л)',
          stars: 4,
          reviews: 12,
          oldPrice: 650000,
          newPrice: 150000,
          mark: {
            color: 'violet',
            text: "-30%",
          },
        }, {
          img: require('assets/img/novelty/1.png'),
          code: 4993775,
          title: 'Средство для стирки тёмных и чёрных вещей UltraDark (1,5 л)',
          stars: 5,
          reviews: 12,
          oldPrice: 650000,
          newPrice: 150000,
          mark: {
            color: 'violet',
            text: "-30%",
          },
        },
        {
          img: require('assets/img/novelty/2.png'),
          code: 4993775,
          title: 'Средство для стирки тёмных и чёрных вещей UltraDark (1,5 л)',
          stars: 4,
          reviews: 12,
          oldPrice: 650000,
          newPrice: 150000,
          mark: {
            color: 'violet',
            text: "-30%",
          },
        },
        {
          img: require('assets/img/novelty/1.png'),
          code: 4993775,
          title: 'Средство для стирки тёмных и чёрных вещей UltraDark (1,5 л)',
          stars: 3,
          reviews: 12,
          oldPrice: 650000,
          newPrice: 150000,
          mark: {
            color: 'violet',
            text: "-30%",
          },
        },
        {
          img: require('assets/img/novelty/2.png'),
          code: 4993775,
          title: 'Средство для стирки тёмных и чёрных вещей UltraDark (1,5 л)',
          stars: 2,
          reviews: 12,
          oldPrice: 650000,
          newPrice: 150000,
          mark: {
            color: 'violet',
            text: "-30%",
          },
        }
      ],
    }
  }
}
</script>

