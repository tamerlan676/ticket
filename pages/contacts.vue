<template lang="pug">
  .content
    h2.title  Контакты
    p Связтаться с нами можно в любом мессенджере или по телефону + 7 955 920 80 97
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
