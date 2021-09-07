<template lang="pug">
  .content
    h2.title  Оплата
    p(v-html="data.text")
</template>

<script>
export default {
  data(){
    return {
      data: {
        text: 'Заказ кейса происходит по 100% предоплате. Так устроено потому что мы стремимся исключить варианты порчи наших материалов. <br>' +
          'Но вам не стоит переживать, потому что мы полностью сопровождаем вас с момента оформления заказа до его получения.<br>' +
          'Оплатить заказ можно переводом на карту <b>Сбербанк, Тинькофф, Альфа-Банк</b> <br>' +
          'Сейчас мы работаем над внедрением онлайн оплаты на сайт. В скором времени можно будет воспользоваться и ею.'
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
