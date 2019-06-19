<template>
  <li class="nav-item">
    <router-link :to="link" class="nav-item__link">{{text}}</router-link>
  </li>
</template>

<script>
  export default {
    name: 'NavItem',
    props: {
      text: {
        type: String,
        required: true,
      },
      link: {
        type: String,
        default: '#'
      }
    }
  }
</script>

<style scoped lang="scss">
  .nav-item {
    list-style-type: none;


    &__link {
      color: $gray;
      text-decoration: none;
      font-size: $font15;
      text-transform: uppercase;
      padding: 0 auto;
      font-weight: 500;
      margin: 0;

      &.router-link-exact-active {
        color: $black;
      }
    }
  }
</style>
