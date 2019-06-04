<template>
  <header class="header">
    <header-inner
      class="header__inner"
      mode="wide"
    >
      <header-logo></header-logo>
      <header-nav></header-nav>
    </header-inner>
  </header>
</template>

<script>
import Inner from '../Inner/Inner'
import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'

export default {
  name: 'Header',
  components: {
    'header-inner': Inner,
    'header-logo': Logo,
    'header-nav': Nav
  }
}
</script>

<style scoped lang="scss">
  .header__inner {
    display: flex;
    justify-content: space-between;
    padding-top: 92px;
  }
</style>
