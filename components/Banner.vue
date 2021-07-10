<template lang="pug">
  a(href="#")
    .banner
        .container
            h3 Название коллекции
            p Краткое описание
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
         @media (min-width: 768px) {
             padding: 40px 32px;
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
            @media (min-width: 768px) {
             font-size: 20px;
         }
            @media (min-width: 992px) {
             font-size: 36px;
         }
        }
        p{
            color: white;
            font-size: 16px;
            text-transform: uppercase;
            @media (min-width: 992px) {
             font-size: 20px;
         }
        }
        }
        
    }
</style>