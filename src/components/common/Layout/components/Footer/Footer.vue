<template>
  <footer class="footer">
    <footer-inner mode="medium">
      <p class="footer__text">Beach Surfing</p>
      <p class="footer__copyright">Copyright © 2018 All Rights Reserved.</p>
    </footer-inner>

  </footer>
</template>

<script>
  import Inner from '@components/common/Inner/Inner'

export default {
  name: 'Footer',
  components: {
    'footer-inner': Inner
  }
}
</script>

<style scoped lang="scss">
  .footer {
    border-top: 1px solid $beige;

    &__text {
      font-size: $fontName;
      font-family: 'Playfair Display', serif;
      padding: 48px 0 15px;
      margin: 0;
    }

    &__copyright {
      font-size: $font15;
      color: $gray;
      padding-bottom: 38px;
      margin: 0;
    }
  }
</style>
