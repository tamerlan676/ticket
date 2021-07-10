<template lang="pug">
  .footer
   img(src="~/assets/images/logo.svg")
   .copyright © 2021 Все права защищены
</template>

<script>
export default {
}
</script>

<style lang="scss">
.footer{
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #F9F9F9;
    img{
        width: 200px;
    }
    .copyright{
        font-size: 12px;
    }
}
</style>