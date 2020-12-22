<template lang="pug">
  .center(style="display: flex; justify-content: center;")
    v-form(style="width: 400px; margin-top: 150px;")
      v-text-field(
        v-model="form.username"
        label="Username"
      )
      v-text-field(
        v-model="form.password"
        label="Password"
        type="password"
      )
      v-btn.orange(@click="login" block) Войти
</template>

<script>
import api from '~/assets/ts/api'

export default {
  layout: 'empty',
  data: () => ({
    form: {
      username: 'john',
      password: 'changeme',
    },
  }),
  methods: {
    login() {
      api.login(this.$axios, this.form).then((response) => {
        localStorage.setItem('access_token', response.key)
        this.$router.push('/')
      })
    },
  },
}
</script>
