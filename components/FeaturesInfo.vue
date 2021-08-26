<template lang="pug">
  .features-container
    .wrapper
      .item(v-for="item in features")
        img(:src="item.img")
        p.desc {{ item.desc }}
</template>

<script>
export default {
  data(){
    return{

    }
  },
  props:{
    features: Array,
    desc: String,
    img: String
  }

}
</script>

<style lang="scss" scoped>
.features-container{
  padding: 56px 16px;
  @media(min-width: 768px){
    padding: 80px 32px;
  }
  @media(min-width: 992px){
    padding: 120px 32px;
  }
  .wrapper{
    display: grid;
    grid-row-gap: 40px;
    @media(min-width: 768px){
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 32px;
    }
    @media(min-width: 1200px){
      width: 1120px;
      margin: 0 auto;
    }
    .item{
      font-weight: 600;
      text-align: center;
      img{
        width: 80px;
        margin-bottom: 16px;
      }
    }
  }
}
</style>
