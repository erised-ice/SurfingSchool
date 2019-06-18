<template>
  <div>
    <h1 class="title-h1" v-if="titleType === 'h1'">
      <slot />
    </h1>
    <h2 class="title-h2" v-if="titleType === 'h2'">
      <slot />
    </h2>
    <h2 class="title-h3" v-if="titleType === 'h3'">
      <slot />
    </h2>
  </div>
</template>

<script>
  export default {
    name: 'Title',
    props: {
      titleType: {
        type: String,
        default: 'h1'
      }
    }
  }
</script>

<style scoped lang="scss">
  .title-h1 {
    @extend %title;

    font-size: $fontTitleMain;
    text-align: center;
  }

  .title-h2 {
    @extend %title;

    color: lawngreen;
    font-size: $fontTitleMiddle;
  }

  .title-h3 {
    @extend %title;

    font-size: $fontTitleSmall;
    color: yellow;
  }
</style>
