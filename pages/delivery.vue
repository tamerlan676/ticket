<template lang="pug">
  .content
    h2.title  Доставка
    img(src="~/assets/images/payment.jpeg")
    p Founded in 2015, in the heart of Scotland. Blanc Space are the ultimate one stop shop for all your iPhone case needs. Design obsessed and quality assured. Look no further.
</template>

<script>
export default {

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
