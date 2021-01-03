<template lang="pug">
  v-app
    nuxt
</template>

<script>
export default {
  middleware: ['auth'],
}
</script>
