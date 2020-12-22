export default function ({ redirect }) {
  if (process.browser && !localStorage.getItem('access_token')) {
    return redirect('/auth')
  }
}
