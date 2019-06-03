<template>
  <li class="nav-item">
    <a href="#" class="nav-item__link">{{text}}</a>
  </li>
</template>

<script>
  export default {
    name: 'NavItem',
    props: {
      text: {
        type: String,
        required: true,
      }
    }
  }
</script>

<style scoped lang="scss">
  .nav-item {
    list-style-type: none;

    &__link {
      @extend %textHoverUnderline;

      color: $gray;
      font-size: $font15;
      text-transform: uppercase;
      padding: 0 auto;
    }
  }
</style>
