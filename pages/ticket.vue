<template lang="pug">
  .ticket
    .ticket-wrapper
        .box
            img(:src="require(`@/assets/images/${image}.svg`)")
            .datefield {{ date }}
            .namefield {{ name }}
        .options
         h2 Счастливый билет
         .price 990 ₽
         .step-title 1. Выберите город своей мечты
         .towns-wrapper
            .item(v-for="(item, key) in towns" :key="key")
                input(class="radio" type="radio" :id="item.title" :value="item.title" v-model="selected" @click="showCity(key, item.img)")
                img(:src="item.flag")
                label(:for="item.title") {{ item.title }}
         .step-title 2. Введите данные пассажира
         .field-block
            input(class="input" type="text" @input="changeName"  placeholder="Введите имя")
            input(class="input" type="text" @input="changeDate"  placeholder="Введите дату")
            input(class="input" type="text"  placeholder="Введите модель телефона")
         .step-title 3. Посмотрите на чехол, а затем оставьте свои данные и мы отправим его вам!
         .field-block
            input(class="input" type="text"  placeholder="Имя")
            input(class="input" type="text"  placeholder="Номер телефона")
            input(class="input" type="text"  placeholder="Полный адрес")
         button(type="submit") Заказать чехол
    .ticket-scheme
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
            towns: [
                {
                    title: 'Moscow',
                    img: 'moscow',
                    flag: require('~/assets/images/rus.svg')
                },
                                {
                    title: 'Madrid',
                    img: 'madrid',
                    flag: require('~/assets/images/spa.svg')
                },
                                {
                    title: 'Paris',
                    img: 'paris',
                    flag: require('~/assets/images/spa.svg'),
                },
                                {
                    title: 'Los-Angeles',
                    flag: require('~/assets/images/usa.svg'),
                    img: 'los-angeles'
                },
                {
                    title: 'Tokyo',
                    flag: require('~/assets/images/jap.svg'),
                    img: 'tokyo'
                }
            ]
        }
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
            bottom: 115px;
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
            top: 78px;
            font-size: 10px;
            right: 40px;
            font-weight: 600; 
             @media (min-width: 992px) {
                 font-size: 15px;
                 top: 57px;
                 right: 95px;
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
            font-size: 19px;
            color: #118B58;
            margin-bottom: 24px;
        }
        .step-title{
            font-size: 16px;
            line-height: 24px;
            margin-bottom: 16px;
        }
        .towns-wrapper{
            display: flex;
            margin-bottom: 24px;
            flex-wrap: wrap;
            .item{
                padding: 10px 16px;
                background: #E0E0E0;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                width: fit-content;
                margin-right: 20px;
                margin-bottom: 20px;
                display: flex;
                align-items: center;
                cursor: pointer;
                img{
                    width: 20px;
                    margin-right: 5px;
                }
            }
            label{
                color: #0086C3;
                font-weight: 500;
                font-size: 15px;
                cursor: pointer;
            }
            .radio{
                display: none
            }
        }
        .field-block{
            margin-bottom:16px;
            .input{
                width: 100%;
                height: 40px;
                display: block;
                box-sizing: border-box;
                border: 2px solid #000;
                padding: 5px;
                margin-bottom: 16px;
                font-family: "Montserrat";
            }
        }
        button{
            width: 100%;
            padding: 16px;
            font-family: "Montserrat";
            color: #fff;
            text-transform: uppercase;
            border: none;
            font-weight: bold;
            background: red;
        }
    }
  }
  .ticket-scheme{
      display: grid;
      background: white;
      @media (min-width: 992px) {
          grid-template-columns: 1fr 1fr;
          grid-column-gap: 32px;
      }
       @media (min-width: 1200px) {
           width: 1120px;
           margin: 0 auto;
           align-items: center;
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