<template lang="pug">
  .constructors
    h3 Конструкторы
    .wrapper
        .item
            a(href="/ticket")
                img(src="~/assets/images/chehol.svg")
                .title Счастливый билет
                .price 990 ₽
        .item
            a(href="#")
                img(src="~/assets/images/chehol.svg")
                .title Любимая песня
                .price 990 ₽
        .item
            a(href="#")
                img(src="~/assets/images/chehol.svg")
                .title Фотолента
                .price 990 ₽
        .item
            a(href="#")
                img(src="~/assets/images/chehol.svg")
                .title Мудрая мысль
                .price 990 ₽
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
.constructors{
    padding: 70px 0;
    h3{
        text-align: center;
        font-weight: bold;
        text-align: center;
        text-transform: uppercase;
        font-size: 20px;
        color: #29B6F6;
        margin-bottom: 70px;
    }
    .wrapper{
        display: flex;
        justify-content: space-between;
        width: 300px;
        margin: 0 auto;
        flex-wrap: wrap;
        @media (min-width: 768px) {
            width: 440px;
        }
        @media (min-width: 992px) {
            width: 700px;
        }
                @media (min-width: 1200px) {
            width: 1120px;
        }
        .item{
            text-align: center;
            margin-bottom: 40px;
        }
        img{
            @media (min-width: 768px) {
                width: 200px;
            }
               @media (min-width: 768px) {
                width: 200px;
            }
            
        }
        .title{
            font-size: 13px;
            width: 140px;
            color: #000;
            line-height: 18px;
            margin-bottom: 8px;
            font-weight: 500;
                @media (min-width: 768px) {
            width: 200px;
            font-size: 16px;
            }
            @media (min-width: 1200px) {
                width: 200px;
            }
        }
        .price{
            color: #118B58;
            font-weight: 500;
            text-align: center;
                  @media (min-width: 768px) {
            width: 200px;
            font-size: 18px;
            }
        }
    }
}
</style>