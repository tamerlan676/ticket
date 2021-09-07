<template lang="pug">
  a(href="/ticket")
    .banner
        .container
            h3 Билет домой
            p Собери свой билет с помощью конструктора
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
    .banner{
        width: 100%;
        height: 330px;
        background-image: url('~/assets/images/collection-wrapper.jpg');
        background-size: cover;
        box-sizing: border-box;
        padding: 40px 16px;
        background-position: -270px;
         @media (min-width: 768px) {
             padding: 40px 32px;
           background-position: 0;
         }
         @media (min-width: 1200px) {
             height: 450px;
         }
        .container{
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            height: 100%;
            @media (min-width: 1200px) {
             width: 1120px;
             margin: 0 auto;
         }
            h3{
            color: white;
            font-size: 17px;
            text-transform: uppercase;
            font-weight: bold;
              margin-bottom: 8px;
            @media (min-width: 768px) {
             font-size: 20px;
         }
            @media (min-width: 992px) {
             font-size: 36px;
         }
        }
        p{
            color: white;
            font-size: 15px;
            text-transform: uppercase;
            @media (min-width: 992px) {
             font-size: 20px;
         }
        }
        }

    }
</style>
