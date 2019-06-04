<template>
  <footer>
    <footer-inner
      mode="medium"
    >
      Footer
    </footer-inner>

  </footer>
</template>

<script>
  import Inner from '../Inner/Inner'

export default {
  name: 'Footer',
  components: {
    'footer-inner': Inner
  }
}
</script>

<style scoped lang="scss">

</style>
