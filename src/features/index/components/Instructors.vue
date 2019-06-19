<template>
  <instructors-inner>
    <instructors-title titleType="h2" class="instructors__title">
      Popular Instructors
    </instructors-title>
    <div class="instructors__items">
      <instructor
        v-for="(instructor, index) in instructors"
        :src="instructor.src"
        :name="instructor.name"
        :amount="instructor.amount"
        :key="index"
      />
    </div>
  </instructors-inner>
</template>

<script>
  import Inner from '@components/common/Inner/Inner';
  import Title from '@components/common/content/Title/Title';
  import Instructor from '@components/common/Instructor/Instructor'

export default {
  name: 'Instructors',
  components: {
    'instructors-inner': Inner,
    'instructors-title': Title,
    'instructor': Instructor,
  },
  data() {
    return {
      instructors: [
        {
          src: '/static/img/content/Simon.png',
          name: 'Simon Adward',
          amount: '5,000'
        },
        {
          src: '/static/img/content/Elliana.png',
          name: 'Elliana D’Soza',
          amount: '4,350'
        },
        {
          src: '/static/img/content/Joseph.png',
          name: 'Joseph Bardon',
          amount: '3,248'
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .instructors {
    &__title {
      margin-bottom: 90px;
    }
    &__items {
      display: flex;
      justify-content: space-between;
    }
  }

</style>
