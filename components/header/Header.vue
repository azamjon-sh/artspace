<template>
  <header class="">
    <HeaderTop/>
    <HeaderMiddle/>
    <HeaderBottom/>
  </header>
</template>

<script>
import HeaderTop from "~/components/header/HeaderTop.vue";
import HeaderMiddle from "~/components/header/HeaderMiddle.vue";
import HeaderBottom from "~/components/header/HeaderBottom";

export default {
  components: {HeaderMiddle, HeaderTop, HeaderBottom}

}

</script>

<style scoped>

</style>
