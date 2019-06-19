<template>
  <div class="index">
    <page-inner class="title__inner" mode="wide">
      <div class="title__title">
        <page-title>
          Long Beach Surfing Institute
        </page-title>
      </div>
      <div class="title__paragraph">
        <paragraph style="text-align: center">
          Surfing is the sport of riding waves in an upright or prone position. Surfers catch ocean, river, or man-made waves, and glide across the surface of the water until the wave breaks and loses its energy.
        </paragraph>
      </div>
    </page-inner>
    <div class="index-video">
      <index-video></index-video>
    </div>

    <div class="instructors">
      <instructors></instructors>
    </div>
    <div class="recent-blogs">
      <recent-blogs></recent-blogs>
    </div>
    <page-inner class="enroll__inner">
      <div class="enroll__title">
        <page-title titleType="h2">Aren’t you intrested Yet!!</page-title>
      </div>

      <index-button :is-big="true">Enroll Now</index-button>
    </page-inner>
  </div>


</template>

<script>
import Inner from '@components/common/Inner/Inner';
import Title from '@components/common/content/Title/Title';
import Paragraph from '@components/common/content/Paragraph/Paragraph'
import IndexVideo from '@features/index/components/IndexVideo'
import Instructors from '@features/index/components/Instructors'
import RecentBlogs from '@features/index/components/RecentBlogs'
import Button from '@components/common/Button/Button'

export default {
  name: 'Index',
  components: {
    'page-inner': Inner,
    'page-title': Title,
    'paragraph': Paragraph,
    'index-video': IndexVideo,
    'instructors': Instructors,
    'recent-blogs': RecentBlogs,
    'index-button': Button,
  },
}
</script>
<style scoped lang="scss">
  .title {
    &__inner {
      padding-top: 215px;
      padding-bottom: 212px;
    }

    &__title {
      margin-bottom: 30px;
    }

    &__paragraph {
      width: 636px;
      margin: 0 auto;

    }
  }

  .index-video {
    margin-bottom: 233px;
  }

  .instructors {
    margin-bottom: 259px;
  }

  .enroll {
    &__inner {
      text-align: center;
      padding-top: 259px;
      padding-bottom: 143px;
    }

    &__title {
      margin-bottom: 79px;
    }
  }

</style>
