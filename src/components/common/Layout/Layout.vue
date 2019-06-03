<template>
  <div class="layout">
    <layout-header />
    <main>
      <slot />
    </main>
    <layout-footer />
  </div>
</template>

<script>
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

export default {
  name: 'Layout',
  components: {
    'layout-header': Header,
    'layout-footer': Footer
  }
}
</script>

<style scoped lang="scss">
  .layout {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    width: 100%;
    max-width: 1480px;
    padding: 0 20px;
    margin: 0 auto;
  }
</style>
