<template lang="pug">
  .main
    GreyLine
    Slider
    HelloText
    Constructors
    Banner
    ReadyConstructors
</template>

<script>
export default {
    head: {
    title: ' ▷ Закажи себе самый уникальный чехол для телефона',
    description: 'У нас на сайте можно заказать чехол для любой модели телефона',
    meta: [
      {
        hid: 'description',
        name: 'chehlovskiy',
        content: 'Воспользуйся нашим конструктором и собери для себя персональный чехол с любимой песней!'
      }
    ],
  },

};
</script>

<style lang="scss">
.main {
  font-family: "Montserrat-Regular";
}
h1, h2, h3, p{
  padding: 0;
  margin: 0;
}
a{
  text-decoration: none;
}
</style>
