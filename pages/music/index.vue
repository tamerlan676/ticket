<template lang="pug">
  .ticket
    Header
    .ticket-wrapper
        .box
            img(:src="require(`@/assets/images/music.svg`)")
            .songfield {{ song }}
            .artistfield {{ artist }}
            .oblozhka
                img(:src="url")
        .options
         h2 Любимая песня 
         form(method="post" data-netlify-honeypot="bot-field" data-netlify="true")
            input(type="hidden" name="song" value="ask-question")
            .price 990 ₽
            .step-title 1. Введите информацию о песне
            .field-block
                input(class="input" name="songName" type="text" @input="changeSong"  placeholder="Введите название песни")
                input(class="input" name="artist" type="text" @input="changeArtist"  placeholder="Введите исполнителей")
                label Загрузите обложку <br><br>
                input(name="image" type="file" @change="onFileChange")
            .wts-message Если у вас возникли проблемы с конструкотором, напишите нам в 
                a(href="#" style="color: green; font-weight: bold; text-decoration: none") WhatsApp
            .step-title 3. Посмотрите на чехол, а затем оставьте свои данные и мы отправим его вам!
            .field-block
                input(class="input" name="clientName" type="text"  placeholder="Имя")
                input(class="input" name="phone" type="text"  placeholder="Номер телефона")
                input(class="input" name="adress" type="text"  placeholder="Полный адрес")
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
            song: 'Lonely',
            artist: 'Akon',
            url: null
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
    }
        
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
        .songfield{
            position: absolute;
            font-family: 'SFU-Medium';
            bottom: 183px;
            font-size: 10px;
            left: 33px;
            font-weight: 600;
            color: white;
            background: black;
            @media (min-width: 992px) {
                font-size: 16px;
                left: 85px;
                bottom: 200px;
            }
        }
        .artistfield{
            position: absolute;
            font-family: 'SFU-Regular';
            color: white;
            bottom: 170px;
            left: 33px;
            font-size: 10px;
            right: 40px;
            font-weight: 600; 
             @media (min-width: 992px) {
                 font-size: 15px;
                 bottom: 180px;
                 left: 85px;
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
                    top: 210px;
                    position: absolute;
            }
            img{
                object-fit: cover;
                width: 140px;
                height: 140px;
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
            font-size: 19px;
            color: #118B58;
            margin-bottom: 24px;
        }
        .step-title{
            font-size: 16px;
            line-height: 24px;
            margin-bottom: 16px;
        }
        .wts-message{
            margin-bottom: 16px;
            display: block;
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