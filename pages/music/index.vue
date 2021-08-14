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
         h2 Любимая песня 
         form(method="post" name="contact" data-netlify-honeypot="bot-field" data-netlify="true")
            input(type="hidden" name="form-name" value="contact")
            .price 990 ₽
            .step-title 1. Введите информацию о песне
            .field-block
                input(class="input" name="song"    type="text" @input="changeSong"   placeholder="Введите название песни" require)
                input(class="input" name="artist"  type="text" @input="changeArtist"  placeholder="Введите исполнителя" require)
                input(name="image" type="file" class="hide" @change="onFileChange")
                label.field-label 
                    img(src="~/assets/images/download.svg") 
                    |
                    span Загрузите обложку 
            .step-title 2. Посмотрите на чехол, а затем оставьте свои данные и мы решим как лучше вам его отправить
            .field-block
                input(class="input" name="clientNameMusic" type="text"  placeholder="Имя" require)
                input(class="input" name="phoneMusic" type="number"  placeholder="Номер телефона" require)
                //- input(class="input" name="adressMusic" type="text"  placeholder="Полный адрес")
            button(type="submit") Заказать чехол
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
    headd(){
        
    },
    data(){
        return{
            song: 'Рамок нет',
            artist: 'Скриптонит',
            url: require('assets/images/scrip.jpg'),
            list: [
                {
                    img: require('~/assets/images/examples/skr.png')
                },
                                {
                    img: require('~/assets/images/examples/patron.png')
                },
                {
                    img: require('~/assets/images/examples/basta.png')
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
            bottom: 195px;
            font-size: 9px;
            left: 45px;
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
            bottom: 185px;
            left: 45px;
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
            width: 140px;
            height: 140px;
            left:40px;
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
                width: 140px;
                height: 140px;
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
                height: 40px;
                display: block;
                box-sizing: border-box;
                border: 2px solid #000;
                padding: 5px;
                margin-bottom: 16px;
                font-family: 'Montserrat-Regular';
                font-size: 16px;
            }
            .hide{
                height: 150px;
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
        button{
            width: 100%;
            padding: 16px;
            font-family: 'Montserrat-Medium';
            color: #fff;
            text-transform: uppercase;
            border: none;
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