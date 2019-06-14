<template>
  <h1 class="title-h1">
    <slot />
  </h1>
</template>

<script>
  export default {
    name: 'TitleH1'
  }
</script>

<style scoped lang="scss">
  .title-h1 {
    @extend %title;

    font-size: $fontTitleMain;
  }
</style>
