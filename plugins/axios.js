export default function (obj) {
  const { $axios, redirect } = obj
  $axios.onResponseError((e) => {
    if (e.response.status === 422) return

    if (e.response.status === 401) {
      if (process.browser && !localStorage.getItem('access_token')) {
        localStorage.removeItem('access_token')
      }

      redirect({ name: 'auth', query: { from: obj.route.path } })
    }
  })
}
