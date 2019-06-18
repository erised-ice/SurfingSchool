<template>
  <instructors-inner>
    <instructors-title titleType="h2">
      Popular Instructors
    </instructors-title>
    <div class="instructors__items">
      <instructor
        v-for="(instructor, index) in instructors"
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
          name: 'Simon Adward',
          amount: '1111'
        },
        {
          name: 'Name Two',
          amount: '2222'
        },
        {
          name: 'Name Three',
          amount: '3333'
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .instructors__items {
    background: greenyellow;
    display: flex;
    justify-content: space-between;
  }
</style>
