import { useMemo, useState } from 'react'

const WHATSAPP_NUMBER = '96892708027'
const INSTAGRAM_URL = 'https://www.instagram.com/viscose_design'

const copy = {
  ar: {
    nav: ['الرئيسية', 'الجديد', 'المجموعات', 'عن فسكوز', 'تواصل'],
    heroEyebrow: 'مخاوير بتفاصيل تليق بذوقك',
    heroTitle: 'أناقة هادئة، بتفاصيل لا تُنسى.',
    heroText:
      'مخاوير مطوّرة بأقمشة مختارة بعناية، تجمع بين الأصالة والأناقة والإتقان.',
    explore: 'اكتشفي المجموعة',
    whatsapp: 'اطلبي عبر واتساب',
    newEyebrow: 'وصل حديثًا',
    newTitle: 'أحدث التصاميم',
    priceSoon: 'السعر يُضاف قريبًا',
    occasion: 'مناسبات',
    everyday: 'يومي',
    collectionsEyebrow: 'اختاري أسلوبك',
    collectionsTitle: 'المجموعات',
    occasionTitle: 'مخاوير المناسبات',
    occasionText: 'تفاصيل أغنى وحضور أنيق للمناسبات واللحظات الخاصة.',
    everydayTitle: 'مخاوير يومية',
    everydayText: 'أناقة مريحة وخفيفة تناسب يومك وتفاصيله.',
    viewCollection: 'عرض المجموعة',
    aboutEyebrow: 'فسكوز',
    aboutTitle: 'الجودة تبدأ من أدق التفاصيل.',
    aboutText:
      'في فسكوز نؤمن بأن الجودة تبدأ من أدق التفاصيل. نصنع مخاوير مطوّرة بأقمشة مختارة بعناية، تجمع بين الأصالة والأناقة والإتقان؛ لنقدم لك قطعًا تليق بذوقك.',
    quality: 'تفاصيل مدروسة',
    fabric: 'أقمشة مختارة',
    custom: 'حسب ذوقك',
    contactEyebrow: 'نحن قريبون منك',
    contactTitle: 'اختاري تصميمك، واتركي الباقي علينا.',
    contactText:
      'اختاري المنتج والمقاس واللون، ثم أرسلي الطلب كاملًا عبر واتساب.',
    instagram: 'إنستغرام',
    selectProduct: 'اختيار المنتج',
    size: 'المقاس',
    color: 'اللون المطلوب',
    customSize: 'مقاس خاص',
    customSizePlaceholder: 'اكتبي المقاس المطلوب',
    colorPlaceholder: 'مثال: بنفسجي داكن',
    addToBag: 'إضافة للطلب',
    bag: 'طلبك',
    emptyBag: 'لم تضيفي أي منتج بعد.',
    quantity: 'الكمية',
    remove: 'حذف',
    sendOrder: 'إرسال الطلب عبر واتساب',
    orderNote: 'سيتم تأكيد السعر والتفاصيل مع المتجر عبر واتساب.',
    close: 'إغلاق',
    language: 'EN',
    footer: 'Viscose Design — Muscat, Oman',
  },
  en: {
    nav: ['Home', 'New', 'Collections', 'About', 'Contact'],
    heroEyebrow: 'Mukhawars made with intention',
    heroTitle: 'Quiet elegance. Details that stay with you.',
    heroText:
      'Elevated mukhawars made from carefully selected fabrics, balancing heritage, elegance and craft.',
    explore: 'Explore collection',
    whatsapp: 'Order via WhatsApp',
    newEyebrow: 'Just arrived',
    newTitle: 'New designs',
    priceSoon: 'Price coming soon',
    occasion: 'Occasion',
    everyday: 'Everyday',
    collectionsEyebrow: 'Choose your mood',
    collectionsTitle: 'Collections',
    occasionTitle: 'Occasion Mukhawars',
    occasionText: 'Richer detailing and an elegant presence for special moments.',
    everydayTitle: 'Everyday Mukhawars',
    everydayText: 'Light, comfortable elegance designed for everyday wear.',
    viewCollection: 'View collection',
    aboutEyebrow: 'Viscose',
    aboutTitle: 'Quality begins in the smallest details.',
    aboutText:
      'At Viscose, we believe quality begins in the smallest details. We create elevated mukhawars using carefully selected fabrics that bring together heritage, elegance and craftsmanship.',
    quality: 'Considered details',
    fabric: 'Selected fabrics',
    custom: 'Made your way',
    contactEyebrow: 'Stay close',
    contactTitle: 'Choose your design. We will handle the rest.',
    contactText:
      'Select your product, size and preferred color, then send the complete order through WhatsApp.',
    instagram: 'Instagram',
    selectProduct: 'Select product',
    size: 'Size',
    color: 'Preferred color',
    customSize: 'Custom size',
    customSizePlaceholder: 'Enter your preferred size',
    colorPlaceholder: 'Example: deep purple',
    addToBag: 'Add to order',
    bag: 'Your order',
    emptyBag: 'Your order is empty.',
    quantity: 'Quantity',
    remove: 'Remove',
    sendOrder: 'Order via WhatsApp',
    orderNote: 'Price and final details will be confirmed with the store on WhatsApp.',
    close: 'Close',
    language: 'عربي',
    footer: 'Viscose Design — Muscat, Oman',
  },
}

const products = [
  { code: 'A1', category: 'occasion', tone: 'plum', new: true },
  { code: 'A2', category: 'occasion', tone: 'gold', new: true },
  { code: 'B1', category: 'occasion', tone: 'sand', new: true },
  { code: 'B2', category: 'everyday', tone: 'ivory', new: true },
]

const standardSizes = ['50', '52', '54', '56', '57']
const LOGO_URL = `${import.meta.env.BASE_URL}viscose-logo.webp`

function Monogram({ compact = false }) {
  return (
    <img
      className={`monogram ${compact ? 'monogram--compact' : ''}`}
      src={LOGO_URL}
      alt="Viscose Design"
    />
  )
}

function App() {
  const [lang, setLang] = useState('ar')
  const [activeProduct, setActiveProduct] = useState(null)
  const [size, setSize] = useState('52')
  const [customSize, setCustomSize] = useState('')
  const [color, setColor] = useState('')
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const t = copy[lang]
  const rtl = lang === 'ar'

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart],
  )

  const selectProduct = (product) => {
    setActiveProduct(product)
    setSize('52')
    setCustomSize('')
    setColor('')
  }

  const addToCart = () => {
    if (!activeProduct) return
    const chosenSize = size === 'custom' ? customSize.trim() || t.customSize : size
    const chosenColor = color.trim() || (rtl ? 'يُحدد عبر واتساب' : 'To be confirmed on WhatsApp')
    const key = `${activeProduct.code}-${chosenSize}-${chosenColor}`

    setCart((current) => {
      const existing = current.find((item) => item.key === key)
      if (existing) {
        return current.map((item) =>
          item.key === key ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }

      return [
        ...current,
        {
          key,
          code: activeProduct.code,
          category: activeProduct.category,
          size: chosenSize,
          color: chosenColor,
          quantity: 1,
        },
      ]
    })

    setActiveProduct(null)
    setCartOpen(true)
  }

  const changeQuantity = (key, amount) => {
    setCart((current) =>
      current
        .map((item) =>
          item.key === key
            ? { ...item, quantity: Math.max(0, item.quantity + amount) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const removeItem = (key) => {
    setCart((current) => current.filter((item) => item.key !== key))
  }

  const whatsappUrl = useMemo(() => {
    const greeting = rtl
      ? 'السلام عليكم، أود طلب المنتجات التالية من Viscose Design:'
      : 'Hello, I would like to order the following from Viscose Design:'

    const lines = cart.map((item, index) => {
      const category =
        item.category === 'occasion'
          ? rtl
            ? 'مناسبات'
            : 'Occasion'
          : rtl
            ? 'يومي'
            : 'Everyday'

      return rtl
        ? `${index + 1}. المنتج ${item.code} — ${category}\nالمقاس: ${item.size}\nاللون: ${item.color}\nالكمية: ${item.quantity}`
        : `${index + 1}. Product ${item.code} — ${category}\nSize: ${item.size}\nColor: ${item.color}\nQuantity: ${item.quantity}`
    })

    const ending = rtl
      ? 'يرجى تأكيد السعر والتوفر. شكرًا.'
      : 'Please confirm price and availability. Thank you.'

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      [greeting, '', ...lines, '', ending].join('\n'),
    )}`
  }, [cart, rtl])

  const scrollToCategory = (category) => {
    const firstProduct = document.querySelector(`[data-category="${category}"]`)
    firstProduct?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <div className={`app ${rtl ? 'rtl' : 'ltr'}`} dir={rtl ? 'rtl' : 'ltr'}>
      <div className="announcement">
        <span>{rtl ? 'طلبات مخصصة بالألوان والمقاسات' : 'Custom colors & sizing available'}</span>
        <span className="announcement-dot" />
        <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">@viscose_design</a>
      </div>

      <header className="site-header" id="home">
        <a className="brand-link" href="#home" aria-label="Viscose Design home">
          <Monogram compact />
          <span>Viscose Design</span>
        </a>

        <nav className="nav" aria-label="Primary navigation">
          <a href="#home">{t.nav[0]}</a>
          <a href="#new-arrivals">{t.nav[1]}</a>
          <a href="#collections">{t.nav[2]}</a>
          <a href="#about">{t.nav[3]}</a>
          <a href="#contact">{t.nav[4]}</a>
        </nav>

        <div className="header-actions">
          <button className="language-button" type="button" onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}>
            {t.language}
          </button>
          <button className="bag-button" type="button" onClick={() => setCartOpen(true)} aria-label={t.bag}>
            <span>{t.bag}</span>
            <b>{cartCount}</b>
          </button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">{t.heroEyebrow}</p>
            <h1>{t.heroTitle}</h1>
            <p className="hero-text">{t.heroText}</p>
            <div className="hero-actions">
              <a className="button button--primary" href="#collections">{t.explore}</a>
              <a
                className="button button--ghost"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
              >
                {t.instagram}
              </a>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="hero-orbit hero-orbit--one" />
            <div className="hero-orbit hero-orbit--two" />
            <div className="hero-fabric hero-fabric--back" />
            <div className="hero-fabric hero-fabric--front" />
            <div className="hero-logo">
              <Monogram />
            </div>
            <span className="hero-code">VD · 2026</span>
          </div>
        </section>

        <section className="trust-strip" aria-label="Brand values">
          <span>{t.quality}</span>
          <i />
          <span>{t.fabric}</span>
          <i />
          <span>{t.custom}</span>
        </section>

        <section className="section" id="new-arrivals">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">{t.newEyebrow}</p>
              <h2>{t.newTitle}</h2>
            </div>
            <span className="section-number">01 — 04</span>
          </div>

          <div className="product-grid">
            {products.map((product, index) => (
              <article
                className="product-card"
                key={product.code}
                data-category={product.category}
              >
                <button
                  className={`product-visual product-visual--${product.tone}`}
                  type="button"
                  onClick={() => selectProduct(product)}
                  aria-label={`${t.selectProduct} ${product.code}`}
                >
                  <span className="product-index">0{index + 1}</span>
                  <span className="product-code">{product.code}</span>
                  <span className="product-thread product-thread--a" />
                  <span className="product-thread product-thread--b" />
                  <span className="product-watermark">V</span>
                </button>

                <div className="product-meta">
                  <div>
                    <p>
                      {product.category === 'occasion' ? t.occasion : t.everyday}
                    </p>
                    <h3>{product.code}</h3>
                  </div>
                  <button type="button" className="round-arrow" onClick={() => selectProduct(product)}>
                    ↗
                  </button>
                </div>
                <span className="price-placeholder">{t.priceSoon}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section collections" id="collections">
          <div className="section-heading centered">
            <p className="eyebrow">{t.collectionsEyebrow}</p>
            <h2>{t.collectionsTitle}</h2>
          </div>

          <div className="collection-grid">
            <button
              className="collection-card collection-card--occasion"
              type="button"
              onClick={() => scrollToCategory('occasion')}
            >
              <span className="collection-no">01</span>
              <div>
                <p>Viscose Design</p>
                <h3>{t.occasionTitle}</h3>
                <span>{t.occasionText}</span>
              </div>
              <b>{t.viewCollection} ↗</b>
            </button>

            <button
              className="collection-card collection-card--everyday"
              type="button"
              onClick={() => scrollToCategory('everyday')}
            >
              <span className="collection-no">02</span>
              <div>
                <p>Viscose Design</p>
                <h3>{t.everydayTitle}</h3>
                <span>{t.everydayText}</span>
              </div>
              <b>{t.viewCollection} ↗</b>
            </button>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="about-mark">
            <img className="about-logo" src={LOGO_URL} alt="Viscose Design" />
          </div>

          <div className="about-copy">
            <p className="eyebrow">{t.aboutEyebrow}</p>
            <h2>{t.aboutTitle}</h2>
            <p>{t.aboutText}</p>
            <div className="about-signature">Viscose Design</div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div>
            <p className="eyebrow">{t.contactEyebrow}</p>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactText}</p>
          </div>

          <div className="contact-actions">
            <button className="button button--primary" type="button" onClick={() => setCartOpen(true)}>
              {t.whatsapp}
            </button>
            <a className="button button--ghost" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              {t.instagram}
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <Monogram compact />
          <span>{t.footer}</span>
        </div>
        <span>© {new Date().getFullYear()}</span>
        <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">@viscose_design</a>
      </footer>

      {activeProduct && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setActiveProduct(null)}>
          <section className="product-modal" role="dialog" aria-modal="true" onMouseDown={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" onClick={() => setActiveProduct(null)} aria-label={t.close}>×</button>

            <div className={`modal-art product-visual--${activeProduct.tone}`}>
              <span>{activeProduct.code}</span>
              <b>Viscose Design</b>
            </div>

            <div className="modal-content">
              <p className="eyebrow">
                {activeProduct.category === 'occasion' ? t.occasion : t.everyday}
              </p>
              <h2>{activeProduct.code}</h2>
              <span className="modal-price">{t.priceSoon}</span>

              <fieldset>
                <legend>{t.size}</legend>
                <div className="size-grid">
                  {standardSizes.map((item) => (
                    <button
                      className={size === item ? 'selected' : ''}
                      type="button"
                      key={item}
                      onClick={() => setSize(item)}
                    >
                      {item}
                    </button>
                  ))}
                  <button
                    className={size === 'custom' ? 'selected' : ''}
                    type="button"
                    onClick={() => setSize('custom')}
                  >
                    {t.customSize}
                  </button>
                </div>
              </fieldset>

              {size === 'custom' && (
                <label className="field">
                  <span>{t.customSize}</span>
                  <input
                    value={customSize}
                    onChange={(event) => setCustomSize(event.target.value)}
                    placeholder={t.customSizePlaceholder}
                  />
                </label>
              )}

              <label className="field">
                <span>{t.color}</span>
                <input
                  value={color}
                  onChange={(event) => setColor(event.target.value)}
                  placeholder={t.colorPlaceholder}
                />
              </label>

              <button className="button button--primary button--full" type="button" onClick={addToCart}>
                {t.addToBag}
              </button>
            </div>
          </section>
        </div>
      )}

      <aside className={`cart-drawer ${cartOpen ? 'cart-drawer--open' : ''}`} aria-hidden={!cartOpen}>
        <div className="cart-header">
          <div>
            <p className="eyebrow">Viscose Design</p>
            <h2>{t.bag} <sup>{cartCount}</sup></h2>
          </div>
          <button type="button" onClick={() => setCartOpen(false)} aria-label={t.close}>×</button>
        </div>

        <div className="cart-body">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <Monogram compact />
              <p>{t.emptyBag}</p>
              <a href="#new-arrivals" onClick={() => setCartOpen(false)}>{t.explore}</a>
            </div>
          ) : (
            cart.map((item) => (
              <article className="cart-item" key={item.key}>
                <div className="cart-item-code">{item.code}</div>
                <div className="cart-item-info">
                  <strong>{item.code}</strong>
                  <span>{t.size}: {item.size}</span>
                  <span>{t.color}: {item.color}</span>
                  <div className="quantity-controls">
                    <button type="button" onClick={() => changeQuantity(item.key, -1)}>−</button>
                    <span>{item.quantity}</span>
                    <button type="button" onClick={() => changeQuantity(item.key, 1)}>+</button>
                  </div>
                  <button className="remove-button" type="button" onClick={() => removeItem(item.key)}>
                    {t.remove}
                  </button>
                </div>
              </article>
            ))
          )}
        </div>

        <div className="cart-footer">
          <p>{t.orderNote}</p>
          {cart.length > 0 && (
            <a className="button button--primary button--full" href={whatsappUrl} target="_blank" rel="noreferrer">
              {t.sendOrder}
            </a>
          )}
        </div>
      </aside>

      {cartOpen && <button className="drawer-backdrop" type="button" onClick={() => setCartOpen(false)} aria-label={t.close} />}
    </div>
  )
}

export default App
