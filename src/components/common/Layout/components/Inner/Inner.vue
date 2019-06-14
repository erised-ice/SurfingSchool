<template>
  <div
    class="inner"
    :class="`inner--${mode}`"
  >
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'Inner',
    props: {
      mode: {
        type: String,
      }
    }
  }
</script>

<style scoped lang="scss">
  .inner {
    position: relative;
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
    background: aqua;

    &--wide {
      max-width: 1480px;
    }

    &--narrow {
      max-width: 1090px;
    }

    &--medium {
      max-width: 1210px;
    }
  }
</style>
