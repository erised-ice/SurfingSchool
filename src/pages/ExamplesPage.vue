<template>
  <div>
    <examples></examples>
  </div>
</template>

<script>
import Examples from '@features/examples/Examples'; // импорты всегда после открывадщего тэго скрипт

export default {
  name: 'ExamplesPage', // name всегда строка - поэтому в кавычках
  components: {
    'examples': Examples // здесь можно в кавычках придумать любое название компонента, которое потом можно использовать в ХТМЛ, как тэг.
  }
}
</script>

<style scoped>

</style>
