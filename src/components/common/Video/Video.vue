<template>

  <div
    class="video"
    :class="{'video--big': isBig}"
  >
    <iframe width="100%" height="100%" :src="src" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</template>

<script>
  export default {
    name: 'Video',
    props: {
      isBig: {
        type: Boolean,
        default: false,
      },
      src: {
        type: String,
        default: 'https://www.youtube.com/embed/b6hoBp7Hk-A'
      }
    }
  }
</script>

<style scoped lang="scss">
  .video {
    width: 280px;
    height: 155px;

    &--big {
      width: 617px;
      height: 436px;
    }
  }
</style>
