<template>
  <div class="page-error">

    <div v-if="error.statusCode === 404">
      <h1>
        <span>Ошибка</span>
        404
      </h1>

      <p>
        Неправильно набран адрес<br>
        или такой страницы не существует
      </p>


    </div>
    <div v-else>
      <h1>
        {{ otherError }}
      </h1>
    </div>

    <div>
      <NuxtLink to="/catalog">Перейти в каталог</NuxtLink>
    </div>
    <div>
      или
    </div>
    <div>
      <NuxtLink to="/">Перейти на главную</NuxtLink>
    </div>


  </div>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: 'Ошибка 404',
      otherError: 'Произошла ошибка'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
