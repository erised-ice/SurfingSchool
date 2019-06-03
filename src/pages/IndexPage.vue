<template>
  <app-layout>
    <index-feature></index-feature>
  </app-layout>
</template>

<script>
import Index from '@features/Index'
import Layout from '@components/common/Layout/Layout'

export default {
  name: 'IndexPage',
  components: {
    'index-feature': Index,
    'app-layout': Layout
  }
}
</script>

<style scoped>
</style>
