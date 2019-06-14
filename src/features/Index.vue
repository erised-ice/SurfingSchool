<template>
  <div class="index">
    <main-title>Long Beach Surfing Institute</main-title>
    <index-button></index-button>
    <index-button :is-big="true">Enroll Now</index-button>
    <paragraph>Text under the main title Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, necessitatibus!</paragraph>
    <middle-title>Popular Instractors</middle-title>
    <paragraph :letterSpacing="1">Text in the cite Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, voluptas?</paragraph>
    <small-title>Recent Reviews</small-title>
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
import TitleH1 from '@components/common/Layout/components/Title/TitleH1'
import TitleH2 from '@components/common/Layout/components/Title/TitleH2'
import TitleH3 from '@components/common/Layout/components/Title/TitleH3'
import Paragraph from '@components/common/Layout/components/Paragraph/Paragraph'
import Cite from '@components/common/Layout/components/Cite/Cite'
import Button from '@components/common/Layout/components/Button/Button'


export default {
  name: 'Index',
  components: {
    'main-title': TitleH1,
    'middle-title': TitleH2,
    'small-title': TitleH3,
    'paragraph': Paragraph,
    'index-cite': Cite,
    'index-button': Button
  }
}
</script>
<style scoped lang="scss">
  .index__cite {
    margin-left: 160px;
    margin-bottom: 45px;
  }

  .index__cite--second {
    margin-left: 45px;
  }
</style>
