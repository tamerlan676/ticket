<template lang="pug">
  .slider
    .title Стильная защита
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
    .slider{
        width: 100%;
        background-image: url(../assets/images/slider.jpg);
        height: 330px;
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: center;
        justify-content: center;
        @media (min-width: 768px) {
            height: 400px;
        }
        @media (min-width: 992px) {
            height: 511px;
        }
        .title{
            text-transform: uppercase;
            background: blue;
            font-weight: 700;
            color: white;
            font-size: 20px;
            padding: 10px 25px;
            @media (min-width: 992px) {
                padding: 15px 35px;
        }
        }
    }
</style>
