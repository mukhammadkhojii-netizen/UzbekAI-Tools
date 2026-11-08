import './App.css'

const tools = [
  { icon: '✍️', title: 'AI Matn yozuvchi', desc: 'Istalgan mavzuda sifatli matnlar yarating.', tag: 'MATN' },
  { icon: '🌍', title: 'AI Tarjimon', desc: 'Matnlarni turli tillarga tarjima qiling.', tag: 'TARJIMA' },
  { icon: '🧠', title: 'AI Matn tahlilchisi', desc: 'Matnlarni tahlil qiling va xulosa oling.', tag: 'TAHLIL' },
  { icon: '💡', title: 'AI G‘oya generatori', desc: 'Yangi g‘oyalar va ijodiy takliflar oling.', tag: 'G‘OYA' },
  { icon: '🤖', title: 'AI Yordamchi', desc: 'Savollaringizga aqlli javoblar oling.', tag: 'CHAT' },
]

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <a className="logo" href="#">
          <span className="logo-icon">U</span>
          UzbekAI<span>Tools</span>
        </a>

        <nav>
          <a href="#home">Bosh sahifa</a>
          <a href="#tools">AI vositalar</a>
          <a href="#about">Biz haqimizda</a>
        </nav>

        <a href="#tools" className="nav-button">Boshlash ↗</a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="badge">
            <span className="pulse"></span>
            O‘zbekiston uchun yaratilgan AI platforma
          </div>

          <h1>
            Sun’iy intellekt<br />
            <span>imkoniyatlari</span> bir joyda.
          </h1>

          <p>
            Ishingizni osonlashtiring, vaqtingizni tejang.
            O‘zbek tilidagi zamonaviy AI vositalaridan foydalaning.
          </p>

          <div className="hero-buttons">
            <a href="#tools" className="primary-button">AI vositalarni ko‘rish ↗</a>
            <a href="#about" className="secondary-button">Batafsil ma’lumot</a>
          </div>

          <div className="hero-stats">
            <div><strong>5+</strong><span>AI vositalar</span></div>
            <div><strong>100%</strong><span>O‘zbekcha interfeys</span></div>
            <div><strong>∞</strong><span>Imkoniyatlar</span></div>
          </div>
        </section>

        <section className="tools-section" id="tools">
          <div className="section-heading">
            <div>
              <span className="eyebrow">BIZNING IMKONIYATLAR</span>
              <h2>AI vositalarimiz</h2>
              <p>Kerakli vositani tanlang va ishni boshlang.</p>
            </div>
            <span className="tools-count">01 — 05</span>
          </div>

          <div className="tools-grid">
            {tools.map((tool, index) => (
              <article className="tool-card" key={tool.title}>
                <div className="card-top">
                  <span className="tool-icon">{tool.icon}</span>
                  <span className="tool-tag">{tool.tag}</span>
                </div>
                <h3>{tool.title}</h3>
                <p>{tool.desc}</p>
                <a href="#about" className="card-link">
                  Foydalanish <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="about" id="about">
          <span className="eyebrow">BIZNING MAQSADIMIZ</span>
          <h2>AI texnologiyalari<br />hamma uchun ochiq.</h2>
          <p>
            UzbekAI Tools — o‘zbek tilida sun’iy intellekt
            imkoniyatlarini hammaga qulay qilishga qaratilgan
            ochiq kodli loyiha.
          </p>
          <a href="#tools" className="primary-button">Imkoniyatlarni kashf eting ↗</a>
        </section>
      </main>

      <footer>
        <a className="logo" href="#">
          <span className="logo-icon">U</span>
          UzbekAI<span>Tools</span>
        </a>
        <p>© 2026 UzbekAI Tools. Ochiq kodli loyiha.</p>
      </footer>
    </div>
  )
}

export default App