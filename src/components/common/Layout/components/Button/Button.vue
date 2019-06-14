<template>
  <button
    class="button"
    :class="{'button--big': isBig}"
  >
    <slot>Read More</slot>
  </button>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      isBig: {
        type: Boolean,
        default: false,
      }
    }
  }
</script>

<style scoped lang="scss">
  .button {
    @extend %opacity;

    color: $black;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.06px;
    background: $white;
    padding: 19px 29px;
    border: 1px solid $lightGrey;

    &--big {
      font-size: $fontName;
      font-weight: 500;
      border-color: $gray;
    }
  }
</style>
