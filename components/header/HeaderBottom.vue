<script>
import Kitchen from "assets/img/header/kitchen";
import Sofa from "assets/img/header/sofa";
import Tech from "assets/img/header/tech";
import Bath from "assets/img/header/bath";
import Wrapper from "assets/img/header/wrapper";
import Safe from "assets/img/header/safe";
import Sale from "assets/img/header/Sale";
import Star from "assets/img/header/star";

export default {
  name: "HeaderBottom",
  components: {Star, Safe, Wrapper, Bath, Tech, Sofa, Kitchen, Sale}
}
</script>

<template>
  <div class="header__bottom d-none d-xl-block">
    <div class="content">
      <div class="header__categories row justify-content-between">
        <div class="col-auto header__categories_item">
          <kitchen/>
          <span class="title">Кухни на заказ</span>
        </div>
        <div class="col-auto header__categories_item">
          <sofa/>
          <span class="title">Мебель</span>
        </div>
        <div class="col-auto header__categories_item">
          <tech/>

          <span class="title">Бытовая техника</span>
        </div>
        <div class="col-auto header__categories_item">
          <bath/>

          <span class="title">Сантехника</span>
        </div>
        <div class="col-auto header__categories_item">
          <wrapper/>
          <span class="title">Отделочные материалы</span>
        </div>
        <div class="col-auto header__categories_item">
          <safe/>
          <span class="title">Сейфы</span>
        </div>
        <div class="col-auto header__categories_item header__categories_discount">
          <sale/>
          <span class="title">Акции</span>
        </div>
        <div class="col-auto header__categories_item">
          <star/>
          <span class="title">Outlet</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

</style>
