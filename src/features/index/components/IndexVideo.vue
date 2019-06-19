<template>
  <video-inner
    mode="wide"
    class="video"
  >
    <div class="video__reviews">
      <video-title
        class="video__title-1"
        titleType="h3"
      >
        Recent Reviews
      </video-title>
      <video-cite
        v-for="(cite, index) in cites"
        :text="cite.text"
        :author="cite.author"
        :key="index"
        class="video__cite"
      />
    </div>
    <div class="video__main">
      <video-item :is-big="true"/>
    </div>
    <div class="video__user-videos">
      <video-title
        class="video__title-2"
        titleType="h3"
      >
        User Videos
      </video-title>
      <video-item
        class="video__user-video"
        src="https://www.youtube.com/embed/g7PWABjC5vk"
      />
      <video-item
        src="https://www.youtube.com/embed/qcxO45UTbPE"
      />
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
          text: 'In the ocean, wave riders stand up on surfboards and navigate the water - nearly parallel to the beach - toward the shore.',
          author: '-  Steve Woz'
        },
        {
          text: 'There are four types of surfing waves: spilling waves, plunging waves, surging waves, and collapsing waves.',
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

    }

    &__main {
      flex: 1 1 615px;
    }

    &__title-1 {
      margin-bottom: 30px;
    }

    &__cite {
      max-width: 310px;
    }

    &__cite:first-of-type {
      margin-bottom: 44px;
    }

    &__cite:last-of-type {
      margin-bottom: 0;
    }

    &__user-videos {
      flex: 0 1 412px;
      padding-left: 124px;
    }

    &__title-2 {
      margin-bottom: 35px;
    }

    &__user-video {
      margin-bottom: 42px;
    }
  }
</style>
