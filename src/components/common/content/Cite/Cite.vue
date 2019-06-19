<template>
  <blockquote class="blockquote">
    <cite-paragraph class="blockquote__paragraph">
      {{text}}
    </cite-paragraph>
    <br />
    <cite class="cite">
      {{author}}
    </cite>
  </blockquote>
</template>

<script>
import Paragraph from '../Paragraph/Paragraph'

  export default {
    name: 'Cite',
    components: {
      'cite-paragraph': Paragraph
    },
    props: {
      text: {
        type: String,
      },
      author: {
        type: String,
      }
    }
  }
</script>

<style scoped lang="scss">
  .cite {
    color: $black;
    font-size: $fontCommon;
    font-weight: bold;
    font-style: normal;
  }

  .blockquote {
    padding: 0 0 22px;
    margin-top: 0;
    margin-right: 0;
    margin-left: 0;
    border-bottom: 1px solid $beige;
  }

  .blockquote__paragraph {
    position: relative;
    line-height: 2;
  }

  .blockquote__paragraph:before {
    content: '';
    background: url("/static/img/template/quotes.png");
    width: 36px;
    height: 29px;
    position: absolute;
    left: -19px;
    top: 9px;
    z-index: -1;
  }
</style>
