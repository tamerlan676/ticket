<template lang="pug">
  .thn
    img(src="~/assets/images/done.svg")
    h2 Ваш заказ принят.
    p В скором времени мы свяжемся с вами. 
</template>

<script>
export default {
    data(){
        return{
            
        }
    }
}
</script>

<style lang="scss">
.thn{
    height: 75vh;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    img{
        width: 200px;
    }
}
</style>