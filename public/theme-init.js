// Runs before first paint to avoid a theme flash; kept external because the CSP forbids inline scripts
(function () {
  var saved = null
  try { saved = localStorage.getItem('theme') } catch {}
  var theme = saved === 'light' || saved === 'dark'
    ? saved
    : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
  document.documentElement.setAttribute('data-theme', theme)
})()
