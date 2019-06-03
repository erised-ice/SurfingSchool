<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: 'Roboto', sans-serif;
  color: $mainText;
}

body {
  padding: 0;
  margin: 0;
}
</style>
