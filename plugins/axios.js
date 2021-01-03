export default function (obj) {
  const { $axios, redirect } = obj
  $axios.onResponseError((e) => {
    if (e.response.status === 422) return

    if (e.response.status === 401) {
      localStorage.removeItem('access_token')
      redirect({ path: 'auth', query: { from: obj.route.path } })
    }
  })
}
