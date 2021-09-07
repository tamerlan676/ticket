<template lang="pug">
  .content
    h2.title  Доставка
    p(v-html="data.text")
</template>

<script>
export default {
  data(){
    return{
      data: {
        text: 'Мы следим за тем, чтобы временное пространство от совершения покупки до получения заказа было минимальным, а процесс получения кейса был максимально комфортным для вас. <br>' +
          'Мы можем отправить вам товар любым удобным способов. Но сейчас предпочитаем два основных партнера. Это <b>СДЭК и Почта России</b> <br>' +
          'Подробные детали уточняются во время заказа.'
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.content{
  @media (min-width: 992px) {
    width: 830px;
    margin: 0 auto;
  }
  @media (min-width: 1200px) {
    width: 920px;

  }
  .title{
    margin-bottom: 16px;
    text-align: center;
  }
  img{
    max-width: 100%;
    margin: 0 auto 16px;
    @media (min-width: 1200px) {
      width: 928px;
    }
  }
  p{
    margin: 0 auto;
  }
}


</style>
