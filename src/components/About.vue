<template>
    <h2>Hello {{their_name}} ,This is About Page</h2>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      their_name: this.$route.params.name
    }
  }
}
</script>