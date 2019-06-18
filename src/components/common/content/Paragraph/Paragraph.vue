<template>
  <p
    class="paragraph"
    :class="`paragraph--${mode}`"
    :style="`letter-spacing: ${letterSpacing}px`"
  >
    <slot />
  </p>
</template>

<script>
  export default {
    name: 'Paragraph',
    props: {
      mode: {
        type: String,
        default: 'gray'
      },
      letterSpacing: {
        type: Number,
        default: 0.06
      }
    }
  }
</script>

<style scoped lang="scss">
  .paragraph {
    font-size: $fontCommon;
    font-weight: 400;
    margin: 0;

    &--dark {
      color: $mainText;
    }

    &--gray {
      color: $gray;
    }
  }
</style>
