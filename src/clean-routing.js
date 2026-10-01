const ROUTES = new Set(['home', 'new', 'collections', 'about', 'fabrics', 'contact'])

function routeFromHash(hash = window.location.hash) {
  const match = hash.match(/^#\/([^?]*)(\?.*)?$/)
  if (!match) return null

  const route = ROUTES.has(match[1]) ? match[1] : 'home'
  return { route, query: match[2] || '' }
}

function cleanUrlForHash(hash) {
  const parsed = routeFromHash(hash)
  if (!parsed) return null

  const pathname = parsed.route === 'home' ? '/' : `/${parsed.route}`
  return `${pathname}${parsed.query}`
}

function hashForCleanLocation() {
  const route = window.location.pathname.replace(/^\/+|\/+$/g, '') || 'home'
  const safeRoute = ROUTES.has(route) ? route : 'home'
  return `#/${safeRoute}${window.location.search}`
}

function rewriteInternalLinks(root = document) {
  root.querySelectorAll?.('a[href^="#/"]').forEach((anchor) => {
    const hashRoute = anchor.getAttribute('href')
    const cleanUrl = cleanUrlForHash(hashRoute)
    if (!cleanUrl) return

    anchor.dataset.viscoseRoute = hashRoute
    anchor.setAttribute('href', cleanUrl)
  })
}

function cleanAddressBar() {
  const cleanUrl = cleanUrlForHash(window.location.hash)
  if (!cleanUrl) return

  window.history.replaceState(window.history.state, '', cleanUrl)
  rewriteInternalLinks()
}

function scheduleCleanAddressBar() {
  window.setTimeout(cleanAddressBar, 0)
}

window.addEventListener('hashchange', scheduleCleanAddressBar)

window.addEventListener('popstate', () => {
  if (window.location.hash.startsWith('#/')) return

  const routeHash = hashForCleanLocation()
  window.history.replaceState(window.history.state, '', `/${routeHash}`)
  window.dispatchEvent(new HashChangeEvent('hashchange'))
})

document.addEventListener('click', (event) => {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

  const anchor = event.target.closest?.('a[data-viscose-route]')
  if (!anchor) return

  event.preventDefault()
  const routeHash = anchor.dataset.viscoseRoute
  if (!routeHash) return

  if (window.location.hash === routeHash) {
    scheduleCleanAddressBar()
    return
  }

  window.location.hash = routeHash
})

const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    for (const node of mutation.addedNodes) {
      if (!(node instanceof Element)) continue
      rewriteInternalLinks(node)
      if (node.matches?.('a[href^="#/"]')) rewriteInternalLinks(node.parentElement || document)
    }
  }
})

function startCleanRouting() {
  rewriteInternalLinks()
  observer.observe(document.body, { childList: true, subtree: true })
  window.setTimeout(cleanAddressBar, 60)
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startCleanRouting, { once: true })
} else {
  startCleanRouting()
}
