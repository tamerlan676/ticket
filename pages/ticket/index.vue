<template lang="pug">
  .ticket
    .ticket-wrapper
        .box
            img(:src="require(`@/assets/images/towns/${image}.png`)")
            .datefield {{ date }}
            .namefield {{ name }}
        .options
         h2 Счастливый билет
         form(name="ticket-form")
            input(type="hidden" name="form-name" value="ticket-form")
            .price 990 ₽
            .step-title 1. Выберите город своей мечты
            .towns-wrapper
                .item(v-for="(item, key) in towns" :key="key" @click="showCity(key, item.img)")
                    input(class="radio" type="radio" :name="item.title" :id="item.title" :value="item.title" v-model="selected" )
                    img(:src="item.flag")
                    label(:for="item.title") {{ item.title }}
            .step-title 2. Введите данные пассажира. Они появятся на чехле
            .field-block
                input(class="input" name="name" type="text" @input="changeName"  placeholder="Введите имя")
                input(class="input" name="date" type="number" @input="changeDate"  placeholder="Введите дату рождения")
            a.submit(href="https://wa.me/+79266775366") Заказать чехол
    .ticket-scheme
        .ticket-wrapper
            .image
                img(src="~/assets/images/scheme.jpg")
            .info
                h3 Стильная защита
                p Наш новый противоударный футляр версии 3 обеспечивает максимальную защиту, функциональность и стиль. Изготовлен из полужесткого ТПУ толщиной 2,0 мм с нашими уникальными ударными краями TP-Shock.
</template>

<script>
export default {
    data(){
        return{
            name: 'Passanger Name',
            date: '23.12.2020',
            selected: '',
            moscow: false,
            chehol: false,
            image: 'moscow',
            list: [
                {
                    img:require('~/assets/images/examples/t-1.png')
                },
                {
                    img:require('~/assets/images/examples/t-2.png')
                },
                {
                    img:require('~/assets/images/examples/t-3.png')
                },
            ],
            towns: [
                {
                    title: 'Tbilisi',
                    img: 'tbilisi',
                    flag: require('~/assets/images/flags/geo.svg')
                },
                                {
                    title: 'Astana',
                    img: 'astana',
                    flag: require('~/assets/images/flags/kaz.svg')
                },
                                {
                    title: 'Dushanbe',
                    img: 'dushanbe',
                    flag: require('~/assets/images/flags/tad.svg')
                },
              {
                title: 'Tashkent',
                img: 'tashkent',
                flag: require('~/assets/images/flags/uzb.svg')
              },
              {
                title: 'Yerevan',
                img: 'erevan',
                flag: require('~/assets/images/flags/arm.svg')
              },
              {
                title: 'Kyiv',
                img: 'kiev',
                flag: require('~/assets/images/flags/ukr.svg')
              },
            ]
        }
    },
    head: {
      title: 'Закажи чехол с билетом',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Чехол с билетом твоего любимого города'
        }
      ],
    },
    methods: {
        showCity: function(a, b){
            this.image = b
        },
        changeName: function(event){
            this.name = event.target.value
        },
        changeDate: function(event){
            this.date = event.target.value
        },

    }
}
</script>

<style lang="scss" scoped>
.ticket{
    background: #E5E5E5;
    .ticket-wrapper{
        @media (min-width: 992px) {
            display: flex;
            margin: 0px auto;
            width: 900px;
            padding: 40px 0;
        }
        @media (min-width: 1200px) {
            width: 1120px;
            padding: 80px 0;
        }
    .box{
        padding: 40px 0;
        width: 220px;
        height: fit-content;
        position: relative;
        margin: 0 auto;
            @media (min-width: 992px) {
                padding: 0;
                width: 400px;
            }

        img{
            width: 220px;
            @media (min-width: 992px) {
            width: 330px;
            margin: 0px auto;
            display: block;
        }
        }
        .namefield{
            position: absolute;
            font-family: 'Bessemer';
            bottom: 120px;
            font-size: 10px;
            left: 40px;
            font-weight: 600;
            @media (min-width: 992px) {
                font-size: 16px;
                left: 96px;
                bottom: 110px;
            }
        }
        .datefield{
            position: absolute;
            font-family: 'Bessemer';
            top: 90px;
            font-size: 10px;
            right: 40px;
            font-weight: 600;
            background: white;
            padding: 0 5px;
            overflow: hidden;
            width: 30px;
             @media (min-width: 992px) {
                 font-size: 15px;
                 top: 75px;
                 right: 92px;
                  width: 50px;
             }
        }
    }
    .options{
        padding: 40px 16px;
        background: white;
        box-sizing: border-box;
        @media (min-width: 768px) {
            padding: 40px 72px;
        }
         @media (min-width: 992px) {
           width: 500px;
            padding: 40px 24px;
        }
        @media (min-width: 1200px) {
            width: 650px;
            padding: 40px 24px;
        }
        h2{
            color: black;
            font-size: 18px;
            margin-bottom: 8px;
            @media (min-width: 768px) {
                font-size:32px;
                line-height: 48px;
            }
        }
        .price{
            font-weight: 500;
            font-size: 23px;
            color: #118B58;
            margin-bottom: 24px;
            font-family: 'Montserrat-Medium';
        }
        .step-title{
            font-size: 16px;
            line-height: 24px;
            margin-bottom: 16px;
            font-family: 'Montserrat-Medium';
        }
        .towns-wrapper{
            display: flex;
            margin-bottom: 8px;
            flex-wrap: wrap;
            .item{
                background: #E0E0E0;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                width: fit-content;
                margin-right: 20px;
                margin-bottom: 20px;
                display: flex;
                align-items: center;
                padding: 8px;
                cursor: pointer;
                img{
                    width: 20px;
                    margin-right: 5px;
                }
            }
            label{
                color: black;
                font-weight: 600;
                font-size: 16px;
                cursor: pointer;
                width: 100%;
            }
            .radio{
                display: none
            }
        }
        .field-block{
            margin-bottom:16px;

            .input{
              width: 100%;
              height: 50px;
              display: block;
              box-sizing: border-box;
              border: 2px solid #000;
              padding: 5px;
              margin-bottom: 16px;
              font-family: 'Montserrat-Regular';
              font-size: 16px;
              border-radius: 5px;
            }
        }
      .submit{
        display: block;
        padding: 16px;
        font-family: 'Montserrat-Medium';
        text-decoration: none;
        color: #fff;
        text-transform: uppercase;
        border: none;
        text-align: center;
        font-weight: bold;
        background: #64dd17;
        cursor: pointer;
      }
    }
  }
  .ticket-scheme{
      width: 100%;
      background: #fff;
      .ticket-wrapper{
        display: grid;
        background: white;
      @media (min-width: 992px) {
          grid-template-columns: 450px 1fr;
          grid-column-gap: 32px;
      }
       @media (min-width: 1200px) {
           width: 1120px;
           margin: 0 auto;
           align-items: center;
       }
      }
      .image{
          img{
              max-width: 100%;
          }
      }
      .info{
          padding: 16px;
      }

  }
}
</style>
