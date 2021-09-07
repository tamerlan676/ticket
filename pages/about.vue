<template lang="pug">
    .content
        h2.title  {{ data.title }}
        img(src="~/assets/images/about.jpg")
        p(v-html="data.text")
        h3.subtitle {{ data.subtitle }}
        ul
          li(v-for="item of data.list") {{ item }}
</template>

<script>
export default {
  data() {
    return{
      data: {
        title: 'О Нас',
        text: `<b>Chehlovskiy</b> – это магазин телефонных кейсов для самых популярных смартфонов. Наша миссия – высшая степень довольства клиентов. <br>
К каждому нашему продукту, на каждом этапе создания, мы подходим профессионально. День за днём стремимся сделать наш сервис не просто площадкой для продажи, а так же разрабатываем конструкторы, что бы вы визуализировали чехол, прежде чем он попадет к вам.
<br> Вы лично можете убедиться в том, что мы прекрасно с этим справляемся. <br> Дайте нам шанс мы вас не подведем!`,
        subtitle: 'Почему мы?',
        list: ['Мы подключаем профессиональных дизайнеров, которые рисуют макеты на любыем тематики.',
        'Мы можем нарисовать чехол по вашим пожеланиям.',
        'Полное сопровождение покупки. Мы с вами на связи с момента оформления заказа до его получения.',
        'Доставляем в любую точку России.',
        'Оперативно отвечаем на обращения и помогаем определиться с выбором.  ']
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
    margin: 0 auto 32px;
    white-space: pre-line;
  }

  h3{
    margin-bottom: 24px;
  }
  ul{
    list-style: none;
    padding: 0;
    margin: 0;
    li{
      margin-bottom: 24px;
      position: relative;
      padding-left: 24px;
      &:before{
        content: '';
        position: absolute;
        background-image: url("../assets/images/done.svg");
        left: 0;
        top: 0;
        background-size: cover;
        width: 20px;
        height: 20px;
      }
    }
  }
}


</style>
