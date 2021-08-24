<template lang="pug">
    .content
        h2.title  {{ data.title }}
        img(src="~/assets/images/about.jpeg")
        p(v-html="data.text")
</template>

<script>
export default {
  data() {
    return{
      data: {
        title: 'О Нас',
        text: `Спасибо, что заглянули! Не будем терять ваше время, а коротко и по фактам расскажем о нашей компании:<br>
         У нас команда дизайнеров, которые делают все, чтобы вы могли найти кейс себе по душе.<br>
          Мы привлекаем программистов, чтобы вы могли заранее посмотреть как будет выглядеть ваш кейс прямо на этом сайте. <br>
          Работаем над логистикой, чтобы вы могли как можно скорее получить свой чехол.<br>


  `
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
    white-space: pre-line;
  }
}


</style>
