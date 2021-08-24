<template lang="pug">
    .hello-text
        .container
            h3 {{ title }}
            p {{ text }}
            .line
</template>

<script>
export default {
    data(){
        return{
                title: 'ТВОЙ ЧЕХОЛ - ТВОЯ УНИКАЛЬНОСТЬ',
                text: 'Сегодня чехол для телефона — это не просто защитный аксессуар, но ещё и способ выделиться среди одинаковых аппаратов. Конечно, на рынке доступно великое множество вариантов кейсов. Но иногда хочется авторский сюжет, соответствующий собственным вкусам и взглядам. Вот мы и создали сайт-конструктор, где вы можете визуализировать свой чехол',
        }
    }
}
</script>

<style scoped lang="scss">
.hello-text{
    padding: 40px 16px;
    text-align: center;
    @media (min-width: 768px) {
        padding: 72px 16px;
    }
    h3{
        font-size: 20px;
        font-family: 'Montserrat-Bold';
        text-transform: uppercase;
        color: #29B6F6;
        margin-bottom: 16px;
    }
    p{
        font-size: 17px;
        line-height: 24px;
        margin-bottom: 30px;
    }
    .line{
        width: 160px;
        height: 8px;
        background: #73E8FF;
        margin: 0 auto;
    }
    .container{
         @media (min-width: 992px) {
             width: 800px;
             margin: 0 auto;
             }
    }
}
</style>
