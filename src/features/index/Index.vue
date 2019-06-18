<template>
  <div class="index">
    <div class="title">
      <page-inner mode="wide">
        <div class="title__title">
          <page-title>Long Beach Surfing Institute</page-title>
        </div>
        <div class="title__paragraph">
          <paragraph style="text-align: center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</paragraph>
        </div>
      </page-inner>
    </div>
    <div class="video">
      <page-inner mode="wide" class="video__content">
        <div class="video__reviews"></div>
        <div class="video__main"></div>
        <div class="video__user-videos"></div>
      </page-inner>
    </div>

    <index-button></index-button>
    <index-button :is-big="true">Enroll Now</index-button>

    <index-video></index-video>
    <index-video :is-big="true"></index-video>

    <instructor>
      <template slot="name">Simon Adward</template>
      <template slot="amount">5,000</template>
    </instructor>

    <page-title titleType="h2">Popular Instractors</page-title>
    <paragraph :letterSpacing="1">Text in the cite Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, voluptas?</paragraph>
    <page-title titleType="h3">Recent Reviews</page-title>
    <paragraph mode="dark">Text near the blog photos Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis delectus doloremque eius est fuga in molestias quae quisquam sunt, voluptatum.</paragraph>
    <div class="index__cite">
      <index-cite>
        <template slot="paragraph">Цитата: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed incididunt ut labore et dolore magn.
          a aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.

          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </template>
        <template slot="author">-  Steve Woz</template>
      </index-cite>
    </div>
    <div class="index__cite--second">
      <index-cite>
        <template slot="paragraph">Цитата: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed incididunt ut labore et dolore magn.
          a aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </template>
        <template slot="author">-  David Collum</template>
      </index-cite>
    </div>

  </div>
</template>

<script>
import Inner from '@components/common/Inner/Inner';
import Title from '@components/common/content/Title/Title';
import Paragraph from '@components/common/content/Paragraph/Paragraph'
import Cite from '@components/common/content//Cite/Cite'
import Button from '@components/common/Button/Button'
import Video from '@components/common/Video/Video.vue'
import Instructor from '@components/common/Instructor/Instructor.vue'


export default {
  name: 'Index',
  components: {
    'page-inner': Inner,
    'page-title': Title,
    'paragraph': Paragraph,
    'index-cite': Cite,
    'index-button': Button,
    'index-video': Video,
    'instructor': Instructor
  },
}
</script>
<style scoped lang="scss">
  .title__title {
    margin-bottom: 30px;
  }

  .title__paragraph {
    width: 584px;
    margin: 0 auto;
  }

  .video__content {
    display: flex;
  }

  .index__cite {
    margin-left: 160px;
    margin-bottom: 45px;
  }

  .index__cite--second {
    margin-left: 45px;
  }
</style>
