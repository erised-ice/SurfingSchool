<template>
  <div class="instructor">
    <div class="instructor__picture">
      <img class="instructor__img" src="/static/img/content/Simon.png" alt="Instructors photo">
    </div>
    <p class="instructor__name">
      <slot name="name"/>
    </p>
    <p class="instructor__description">
      <span>
        <slot name="amount"/>
      </span>
      <span>students</span>
    </p>

  </div>
</template>

<script>
  export default {
    name: 'Instructor',
  }
</script>

<style scoped lang="scss">
  .instructor {
    text-align: center;

    &__picture {
      display: inline-block;
      width: 291px;
      height: 353px;
      margin-bottom: 38px;
    }

    &__img {
      max-width: 100%;
    }

    &__name {
      font-size: $fontName;
      font-family: 'Playfair Display', serif;
      margin: 0 0 19px;
    }

    &__description {
      font-size: $font15;
      color: $green;
      margin: 0;
    }
  }


</style>
