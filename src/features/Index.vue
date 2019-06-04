<template>
  <div>
    <main-title>Long Beach Surfing Institute</main-title>
    <middle-title>Popular Instractors</middle-title>
    <small-title>Recent Reviews</small-title>
  </div>
</template>

<script>
import TitleH1 from '../../src/components/common/Layout/components/Title/TitleH1'
import TitleH2 from '../../src/components/common/Layout/components/Title/TitleH2'
import TitleH3 from '../../src/components/common/Layout/components/Title/TitleH3'

export default {
  name: 'Index',
  components: {
    'main-title': TitleH1,
    'middle-title': TitleH2,
    'small-title': TitleH3
  }
}
</script>

<style scoped>
</style>
