<template lang="pug">
.examples
    h2 Примеры кейсов
    .examples-wrapper
        .item(v-for="item in list")
            img(:src="item.img")
  
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props:{
        list: Array,
        title: String,
    }

}
</script>

<style lang="scss" scoped>
  .examples{
      width: 100%;
      background: white;
      box-sizing: border-box;
      padding: 70px 16px;
      h2{
          text-align: center;
      }
      .examples-wrapper{
          @media (min-width: 768px) {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
          }
          @media (min-width: 1200px) {
               width: 1120px;
               margin: 0 auto; 
          }
          img{
              width: 100%;
              @media (min-width: 768px) {
                  
              }
          }
      }
  }

</style>