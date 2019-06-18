<template>
  <video-inner
    mode="wide"
    class="video"
  >
    <div class="video__reviews">
      <video-title titleType="h3">Recent Reviews</video-title>
      <video-cite
        v-for="(cite, index) in cites"
        :text="cite.text"
        :author="cite.author"
        :key="index"
      />
    </div>
    <div class="video__main">
      <video-item :is-big="true"></video-item>
    </div>
    <div class="video__user-videos">
      <video-title titleType="h3">User Videos</video-title>
      <video-item/>
      <video-item/>
    </div>
  </video-inner>
</template>

<script>
import Inner from '@components/common/Inner/Inner';
import Title from '@components/common/content/Title/Title';
import Cite from '@components/common/content//Cite/Cite';
import Video from '@components/common/Video/Video.vue';

export default {
  name: 'IndexVideo',
  components: {
    'video-inner': Inner,
    'video-title': Title,
    'video-cite': Cite,
    'video-item': Video,
  },
  data() {
    return {
      cites: [
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed incididunt ut labore et dolore magn.',
          author: '-  Steve Woz'
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed incididunt ut labore et dolore magn.',
          author: '-  David Collum'
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .video {
    display: flex;
    justify-content: space-between;
    &__reviews {
      flex: 0 1 431px;
      background: plum;
    }

    &__main {
      flex: 1 1 615px;
      background: deeppink;
    }

    &__user-videos {
      flex: 0 1 412px;
      background: pink;
    }
  }
</style>
