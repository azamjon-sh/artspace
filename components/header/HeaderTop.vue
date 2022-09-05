<script>
export default {
  name: "HeaderTop",
  data() {
    return {
      topMenu: [
        {
          name: "О компании",
          url: "/",
        },
        {
          name: "Новости",
          url: "/",
        },
        {
          name: "Доставка и оплата",
          url: "/",
        },
        {
          name: "Гарантия",
          url: "/",
        },
      ],
      topContact: [
        {
          name: "+7 964 503 38 45",
          url: "tel:+79645033845",
          color: 'brown'
        },
        {
          name: "Заказать звонок",
          url: "/",
        },
      ],
    }
  }
}
</script>

<template>
  <div class="header__top d-none d-md-block">
    <div class="row justify-content-between align-items-center content">
      <div class="col-auto row">
        <a class="col-auto header__link" v-for="(item,index) in topMenu" :key="index" :href="item.url">
          {{ item.name }}
        </a>
      </div>
      <div class="col-auto row align-items-center">
        <a class="col-auto header__link" :class="item.color ? item.color : ''" v-for="(item,index) in topContact"
           :key="index" :href="item.url">
          {{ item.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

</style>
