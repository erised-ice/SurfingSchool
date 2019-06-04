<template>
  <h2 class="title-h2">
    <slot />
  </h2>
</template>

<script>
  export default {
    name: 'TitleH2'
  }
</script>

<style scoped lang="scss">
  .title-h2 {
    @extend %title;
    font-size: $fontTitleMiddle;
  }
</style>
