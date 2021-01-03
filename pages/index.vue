<template lang="pug">
  v-container
    h1 60s login!
    p {{ $auth.user }}
    p {{ serverUser }}

</template>

<script>
import api from '~/assets/ts/api'

export default {
  layout: 'default',
  async asyncData({ $axios }) {
    const serverUser = await api.getProfile($axios)
    return { serverUser }
  },
}
</script>
