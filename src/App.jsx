const arrivals = [
  { name: 'New Design 01', category: 'Occasion Mukhawar' },
  { name: 'New Design 02', category: 'Everyday Mukhawar' },
  { name: 'New Design 03', category: 'Occasion Mukhawar' },
]

const collections = [
  {
    title: 'Occasion Mukhawars',
    text: 'Elegant pieces designed for special occasions and celebrations.',
  },
  {
    title: 'Everyday Mukhawars',
    text: 'Comfortable, refined designs made for everyday wear.',
  },
]

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Viscose Design home">
          Viscose Design
        </a>

        <nav className="nav" aria-label="Primary navigation">
          <a href="#new-arrivals">New Arrivals</a>
          <a href="#collections">Collections</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Modern Mukhawar Collection</p>
          <h1>Tradition, shaped with a modern eye.</h1>
          <p className="hero-text">
            A refined space for Viscose Design&apos;s occasion and everyday
            mukhawars.
          </p>
          <a className="primary-button" href="#collections">
            Explore Collection
          </a>
        </div>

        <div className="hero-visual" aria-label="Product image placeholder">
          <span>Campaign image coming soon</span>
        </div>
      </section>

      <section className="section" id="new-arrivals">
        <div className="section-heading">
          <p className="eyebrow">Just In</p>
          <h2>New Arrivals</h2>
        </div>

        <div className="product-grid">
          {arrivals.map((item) => (
            <article className="product-card" key={item.name}>
              <div className="product-image">
                <span>Image coming soon</span>
              </div>
              <div className="product-info">
                <p>{item.category}</p>
                <h3>{item.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section collections" id="collections">
        <div className="section-heading centered">
          <p className="eyebrow">Shop by Style</p>
          <h2>Collections</h2>
        </div>

        <div className="collection-grid">
          {collections.map((collection) => (
            <article className="collection-card" key={collection.title}>
              <div>
                <p className="collection-label">Viscose Design</p>
                <h3>{collection.title}</h3>
                <p>{collection.text}</p>
              </div>
              <button type="button" className="text-button">
                View Collection
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="about section" id="about">
        <div className="about-visual">
          <span>Brand image coming soon</span>
        </div>

        <div className="about-copy">
          <p className="eyebrow">Our Story</p>
          <h2>About Viscose Design</h2>
          <p>
            Viscose Design brings together traditional mukhawar character and a
            clean contemporary presentation. Final brand copy will be added
            once the store provides its official story.
          </p>
        </div>
      </section>

      <section className="contact section" id="contact">
        <p className="eyebrow">Get in Touch</p>
        <h2>Contact Viscose Design</h2>
        <p>
          Orders will later be connected directly to WhatsApp. Instagram,
          WhatsApp number and store location will be added once confirmed.
        </p>

        <div className="contact-actions">
          <button className="primary-button" type="button" disabled>
            WhatsApp — coming soon
          </button>
          <button className="secondary-button" type="button" disabled>
            Instagram — coming soon
          </button>
        </div>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} Viscose Design</span>
        <span>Front-end preview</span>
      </footer>
    </main>
  )
}

export default App
