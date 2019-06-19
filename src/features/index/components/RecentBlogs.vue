<template>
  <recent-blogs-inner>
    <recent-blogs-title class="blog-preview__title" titleType="h2">
      Recent Blogs by User
    </recent-blogs-title>
    <blog-preview
      v-for="(preview, index) in previews"
      :src="preview.src"
      :title="preview.title"
      :paragraph="preview.paragraph"
      :mode="preview.mode"
      :key="index"
      class="blog-preview__item"
    />
  </recent-blogs-inner>
</template>

<script>
import Inner from '@components/common/Inner/Inner'
import Title from '@components/common/content/Title/Title'
import BlogPreview from '@components/common/BlogPreview/BlogPreview'

export default {
  name: 'RecentBlogs',
  components: {
    'recent-blogs-inner': Inner,
    'recent-blogs-title': Title,
    'blog-preview': BlogPreview,
  },
  data() {
    return {
      previews: [
        {
          src: '/static/img/content/blog1.png',
          title: 'International Surfing Day',
          paragraph: 'Surfing is a sport with multiple interpretations. For many, it\'s a recreational activity, physical activity, and a competitive sport, but for others, it is a religion, a lifestyle, an addiction, and a spiritual connection with Nature.',
          mode: 'picture-first'
        },
        {
          src: '/static/img/content/blog2.png',
          title: 'Treading Waves',
          paragraph: 'In less than a century, the act of wave riding evolved and gave birth to several other boardsports. Skateboarding, bodyboarding, windsurfing, kitesurfing, skimboarding, kneeboarding are, in a way, part of the surfing family.',
          mode: 'text-first'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .blog-preview {
    &__title {
      margin-bottom: 90px;
    }
    &--picture-first {
      margin-bottom: 190px;
    }
  }

</style>
