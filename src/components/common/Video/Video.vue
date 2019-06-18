<template>
  <video
    controls
    preload="metadata"
    class="video"
    :class="{'video--big': isBig}"
  >
    <source>
      <iframe width="1003" height="564" src="https://www.youtube.com/embed/nkhpGC10OVw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </source>
  </video>
</template>

<script>
  export default {
    name: 'Video',
    props: {
      isBig: {
        type: Boolean,
        default: false,
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
