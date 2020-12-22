<template lang="pug">
  v-container
    h1 60s login!
    p {{ user }}

</template>

<script>
import api from '~/assets/ts/api'

export default {
  async asyncData({ $axios }) {
    const user = await api.getProfile($axios)

    return { user }
  },
}
</script>
