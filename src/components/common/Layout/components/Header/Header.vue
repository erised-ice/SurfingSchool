<template>
  <header class="header">
    <header-logo></header-logo>
    <header-nav></header-nav>
  </header>
</template>

<script>
import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'

export default {
  name: 'Header',
  components: {
    'header-logo': Logo,
    'header-nav': Nav
  }
}
</script>

<style scoped lang="scss">
  .header {
    display: flex;
    justify-content: space-between;
    padding-top: 92px;
  }
</style>
