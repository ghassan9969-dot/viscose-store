/* Route WhatsApp ordering links to the most reliable destination for the device.
   Mobile devices keep the official wa.me universal link so the app can open directly.
   Desktop browsers use WhatsApp Web directly, avoiding an unnecessary wa.me redirect. */

function isMobileOrTablet() {
  const ua = navigator.userAgent || ''
  const classicMobile = /Android|iPhone|iPod/i.test(ua)
  const iPadOS = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1
  return classicMobile || iPadOS
}

function desktopWhatsAppUrl(waUrl) {
  try {
    const url = new URL(waUrl)
    if (url.hostname !== 'wa.me') return waUrl

    const phone = url.pathname.replace(/^\/+/, '')
    const text = url.searchParams.get('text') || ''
    const params = new URLSearchParams({ phone, text })
    return `https://web.whatsapp.com/send?${params.toString()}`
  } catch {
    return waUrl
  }
}

function rewriteWhatsAppLinks(root = document) {
  if (isMobileOrTablet()) return

  root.querySelectorAll?.('a[href^="https://wa.me/"]').forEach((anchor) => {
    const original = anchor.dataset.waMobileHref || anchor.getAttribute('href')
    if (!original) return

    anchor.dataset.waMobileHref = original
    anchor.setAttribute('href', desktopWhatsAppUrl(original))
  })
}

const observer = new MutationObserver((mutations) => {
  if (isMobileOrTablet()) return

  for (const mutation of mutations) {
    for (const node of mutation.addedNodes) {
      if (!(node instanceof Element)) continue
      rewriteWhatsAppLinks(node)
      if (node.matches?.('a[href^="https://wa.me/"]')) {
        const original = node.getAttribute('href')
        if (original) {
          node.dataset.waMobileHref = original
          node.setAttribute('href', desktopWhatsAppUrl(original))
        }
      }
    }
  }
})

function startWhatsAppRouting() {
  rewriteWhatsAppLinks()
  observer.observe(document.body, { childList: true, subtree: true })
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startWhatsAppRouting, { once: true })
} else {
  startWhatsAppRouting()
}
