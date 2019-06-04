<template>
  <h3 class="title-h3">
    <slot />
  </h3>
</template>

<script>
  export default {
    name: 'TitleH3'
  }
</script>

<style scoped lang="scss">
  .title-h3 {
    @extend %title;
    font-size: $fontTitleSmall;
  }
</style>
