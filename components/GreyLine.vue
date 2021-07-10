<template lang="pug">
    .grey-line
        .wrapper
            ul
                li
                    img(src="~/assets/images/delivery.svg") 
                    a(href="#") Доставка по всей России
                li
                    img(src="~/assets/images/time.svg") 
                    a(href="#") Изготовление за 3 дня                       
                li
                    img(src="~/assets/images/animal.svg") 
                    a(href="#") 5% на благотворительность
</template>

<script>
export default  {
}
</script>

<style scoped lang="scss">
    .grey-line{
        width: 100%;
        background-color: #F9F9F9;
        display: none;
        @media (min-width: 992px) {
            display: block;
        }
        .wrapper{
            width: 800px;
            height: 40px;
            display: flex;
            margin: 0 auto;
            align-items: center;
            ul{
                list-style: none;
                display: flex;
                justify-content: space-between;
                width: 100%;
            }
            li{
                display: flex;
                align-items: center;
            }
            a{
                text-decoration: none;
                color: #696565;
                font-size: 15px;
            }
            img{
                margin-right: 5px;
            }
        }
    }
</style>