<template>
  <nav class="nav">
    <ul class="nav__list" >
      <nav-item
        v-for="(link, index) in links"
        :text="link"
        :key="index"
      />
    </ul>
  </nav>
</template>

<script>
import NavItem from './components/NavItem'

export default {
  name: 'Nav',
  components: {
    'nav-item': NavItem
  },
  data() {
    return {
      links: ['Home', 'About', 'Blog', 'Contact']
    }
  }
}
</script>

<style scoped lang="scss">
.nav {
  &__list {
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin-left: auto;
    width: 424px;
  }
}
</style>
