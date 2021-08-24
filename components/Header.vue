<template lang="pug">
    .header-mobile
        .mobile-burger(@click="openMenu")
            span
        .logo
            a(href="/")
              img(src="~/assets/images/logo.svg" alt="chehlovskiy")
        nav
            ul
                li(v-for="item in menu")
                    a(:href="item.href") {{ item.title }}
        .mobile-menu(ref="menu")
            .close
                img(src="~/assets/images/close.svg" @click="openMenu")
            ul
                li(v-for="item in menu")
                    a(:href="item.href") {{ item.title }}
        .grey-line
</template>

<script>
export default {
  head: {
    title: 'Закажи себе чехол с любимой песней',
    meta: [
      {
        hid: 'description',
        name: 'chehlovskiy',
        content: 'Воспользуйся нашим конструктором и собери для себя персональный чехол с любимой песней!'
      }
    ],
  },
  data () {
    return{
          menu: [
      {
        title: 'О Нас',
        href: '/about',
      },
                        {
        title: 'Оплата',
        href: '/payment',
      },
      {
        title: 'Доставка',
        href: '/delivery',
      },
            {
        title: 'Контакты',
        href: '/contacts',
      },
    ]
    }
  },
  methods: {
    openMenu() {
      this.$refs.menu.classList.toggle("some");
    }
  }
};
</script>

<style lang="scss">
.header-mobile {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 10;
  @media (min-width: 768px) {
    flex-direction: column;
    height: 160px;
    padding: 33px 16px;
  }
  .mobile-burger {
    position: relative;
    width: 24px;
    height: 18px;
    @media (min-width: 768px) {
      display: none;
    }
    &:before {
      content: "";
      position: absolute;
      width: 24px;
      height: 2px;
      top: 0;
      background: #696565;
    }
    &:after {
      content: "";
      position: absolute;
      width: 24px;
      height: 2px;
      top: 8px;
      background: #696565;
    }
    span {
      content: "";
      position: absolute;
      width: 24px;
      height: 2px;
      bottom: 0;
      background: #696565;
    }
  }
  .logo {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      max-width: 170px;
      @media (min-width: 768px) {
        max-width: 100%;
      }
    }
  }
  nav {
    width: 553px;
    display: none;
    @media (min-width: 768px) {
      display: block;
    }
    ul {
      display: flex;
      list-style: none;
      justify-content: space-between;
      margin-top: 30px;
      a {
        font-size: 15px;
        font-weight: 600;
        color: #000;
        text-decoration: none;
        text-transform: uppercase;
      }
    }
  }
}
.mobile-menu {
  position: absolute;
  width: 200px;
  height: 100vh;
  background: #e5e5e5;
  top: 0;
  left: -100%;
  padding: 20px;
  transition: 0.5s ease;
  &.some {
    left: 0;
  }
  .close{
      width: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
  }
  ul{
      list-style: none;
      margin-top: 30px;
      li{
          margin-bottom: 30px;
      }
      a{
          text-decoration: none;
          color: black;
          font-weight: 500;
      }
  }
}
</style>
