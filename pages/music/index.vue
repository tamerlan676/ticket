<template lang="pug">
  .ticket
    .ticket-wrapper
        .box
            img(:src="require(`@/assets/images/png.png`)")
            .songfield {{ song }}
            .artistfield {{ artist }}
            .oblozhka
                img.obl(:src="url")
        .options
         h1 Чехол с любимой песней
         form(method="post" name="contact" data-netlify-honeypot="bot-field" data-netlify="true")
            input(type="hidden" name="form-name" value="contact")
            .price 990 ₽
            .field-block
                input(class="input" name="song"    type="text" @input="changeSong"   placeholder="Введите название песни" require)
                input(class="input" name="artist"  type="text" @input="changeArtist"  placeholder="Введите исполнителя" require)
                input(name="image" type="file" class="hide" @change="onFileChange")
                label.field-label
                    img(src="~/assets/images/download.svg")
                    |
                    span Загрузите обложку
            a.submit(href="https://wa.me/+79266775366") Заказать чехол
    FeaturesInfo(:features="features")
    Examples(:list="list")

    .scheme-container
        .ticket-scheme
            .image
                img(src="~/assets/images/scheme.jpg")
            .info
                h3 Стильная защита
                p Сегодня чехол для телефона — это не просто защитный аксессуар, но ещё и способ выделиться среди одинаковых аппаратов. Наш новый противоударный чехол обеспечивает максимальную защиту, функциональность и стиль.

    a.whats-help(target="_blank" href="https://wa.me/+79266775366")
        img(src="~/assets/images/whatsapp.svg")
</template>

<script>
export default {
       head: {
    title: ' ▷ Закажи себе чехол с любимой песней',
    description: 'Мы дарим вам возможность нанести на чехол исполнителя и изображение обложки вашей любимой песни',
    meta: [
      {
        hid: 'description',
        name: 'chehlovskiy',
        content: 'Воспользуйся нашим конструктором и собери для себя персональный чехол с любимой песней!'
      }
    ],
  },
    data(){
        return{
            song: 'Рамок нет',
            artist: 'Скриптонит',
            url: require('/assets/images/scrip.jpg'),
            features: [
              {
                img: require('~/assets/images/icons/time.svg'),
                desc: 'Изготовим ваш чехол за 3 рабочих дня после заказа'
              },
              {
                img: require('~/assets/images/icons/delivery.svg'),
                desc: 'Быстро доставим в любую точку России и даже Мира'
              },
              {
                img: require('~/assets/images/icons/back.svg'),
                desc: 'Вернем ваши деньги, если вам что-то не понравится'
              },
            ],
            list: [
                {
                    img: require('~/assets/images/examples/ex-1.jpg')
                },
                                {
                    img: require('~/assets/images/examples/ex-2.jpg')
                },
                {
                    img: require('~/assets/images/examples/ex-1.jpg')
                }
            ]
        }
    },
    methods: {
        changeSong: function(event){
            this.song = event.target.value
        },
        changeArtist: function(event){
            this.artist = event.target.value
        },
        onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
    },
        thnRedirect: function(){
            localStorage.removeItem('token')
            this.$router.push('/thn')
        },
    },
}
</script>

<style lang="scss" scoped>
.ticket{
    background: #E5E5E5;
    position: relative;
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
        .songfield{
            position: absolute;
            font-family: 'SFU-Medium';
            bottom: 205px;
            font-size: 9px;
            left: 40px;
            font-weight: 600;
            color: white;
            @media (min-width: 992px) {
                font-size: 16px;
                left: 90px;
                bottom: 230px;
            }
        }
        .artistfield{
            position: absolute;
            font-family: 'SFU-Regular';
            color: white;
            bottom: 192px;
            left: 40px;
            font-size: 10px;
            right: 40px;
            font-weight: 600;
             @media (min-width: 992px) {
                 font-size: 15px;
                 bottom: 210px;
                 left: 90px;
             }
        }
        .oblozhka{
            width: 120px;
            height: 120px;
            left:55px;
            top: 175px;
            position: absolute;
            @media (min-width: 992px) {
                    width: 200px;
                    height: 200px;
                    left: 100px;
                    top: 180px;
                    position: absolute;
            }
            img{
                object-fit: cover;
                width: 120px;
                height: 120px;
                border-radius:5px;
                @media (min-width: 992px) {
                    width: 200px;
                    height: 200px;
                }
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
        h1{
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
            font-size: 20px;
            color: #118B58;
            margin-bottom: 24px;
        }
        .step-title{
            font-size: 16px;
            line-height: 20px;
            margin-bottom: 16px;
            font-family: 'Montserrat-Medium';
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
            }
            .hide{
                width: 200px;
                position: absolute;
                opacity: 0;
                cursor: pointer;
            }
            .field-label{
                background: #29B6F6;
                padding: 10px;
                margin-top: 16px;
                display: block;
                width: fit-content;
                color: white;
                display: flex;
                align-items: center;
                cursor: pointer;
                border-radius: 5px;
                img{
                    width: 20px;
                    margin-right: 8px;
                }

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

  .scheme-container{
      width: 100%;
      background: #fff;
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


}
.whats-help{
    position: absolute;
    bottom: 30px;
    right: 20px;
    position: fixed;
    border-radius: 100%;
    animation-name: pulse;
    animation-duration: 1.5s;
    animation-timing-function: ease-out;
    animation-iteration-count: infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5);
  }
  80% {
    box-shadow: 0 0 0 14px rgba(37, 211, 102, 0);
  }
}
</style>
