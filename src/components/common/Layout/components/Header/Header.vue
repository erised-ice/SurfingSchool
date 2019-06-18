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
import Inner from '@components/common/Inner/Inner'
import Logo from '@components/common/Logo/Logo'
import Nav from '@components/common/Nav/Nav'

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
