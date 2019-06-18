<template>
  <div
    class="blog-preview"
    :class="`blog-preview--${mode}`"
  >
    <div class="blog-preview__picture">
      <img src="/static/img/content/blog1.png" alt="surfing" class="blog-preview__img">
    </div>
    <div class="blog-preview__text">
      <blog-preview-title titleType="h3">
        <slot name="title" />
      </blog-preview-title>
      <blog-preview-paragraph mode="dark">
        <slot name="paragraph" />
      </blog-preview-paragraph>
      <blog-preview-button class="blog-preview__button">
        Read More
      </blog-preview-button>
    </div>
  </div>
</template>

<script>
import Title from '../content/Title/Title'
import Paragraph from '../content/Paragraph/Paragraph'
import Button from '../Button/Button'

export default {
  name: 'Blog-preview',
  components: {
    'blog-preview-title': Title,
    'blog-preview-paragraph': Paragraph,
    'blog-preview-button': Button,
  },
  props: {
    mode: {
      type: String,
      default: 'picture-first'
    }
  },
}
</script>

<style scoped lang="scss">
  .blog-preview {
    display: flex;
    justify-content: space-between;

    &__picture {
      width: 523px;
      height: 353px;
    }

    &__img {
      width: 100%;
    }

    &__text {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &__button {
      margin: 0 auto 0 0;
    }

    &--picture-first {
      background-color: red;
    }

    &--text-first {
      background-color: blue;
    }

    &--picture-first {
      .blog-preview__text {
        padding: 51px 0 44px 77px;
        color: red;
      }
    }

    &--text-first {
      .blog-preview__text {
        padding: 51px 77px 44px 0;
        background-color: yellow;
      }

      .blog-preview__picture {
        order: 1;
      }
    }
  }
</style>
