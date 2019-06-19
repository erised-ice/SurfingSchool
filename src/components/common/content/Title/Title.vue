<template>
  <div>
    <h1
      class="title-h1"
      :class="{'title--italic': isItalic}"
      v-if="titleType === 'h1'"
    >
      <slot />
    </h1>
    <h2
      class="title-h2"
      :class="{'title--italic': isItalic}"
      v-if="titleType === 'h2'"
    >
      <slot />
    </h2>
    <h2
      class="title-h3"
      :class="{'title--italic': isItalic}"
      v-if="titleType === 'h3'"
    >
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
      },
      isItalic: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped lang="scss">
  .title {

    &-h1 {
      @extend %title;

      font-size: $fontTitleMain;
      text-align: center;
    }

    &-h2 {
      @extend %title;

      font-size: $fontTitleMiddle;
      text-align: center;
    }

    &-h3 {
      @extend %title;

      font-size: $fontTitleSmall;
    }

    &--italic {
      font-style: italic;
    }
  }
</style>
