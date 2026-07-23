import './Hero.css'

const Hero = () => {
  return (
    <section className="hero2">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>Seasonal Deal</h1>
        <p className="hero-line">€100 discount on a fast delivery selection for purchases over €700.</p>
        <p className="hero-code">Code DEAL100</p>
        <p className="hero-note">For a limited time only.*</p>
      </div>
      <button className="hero-cta">Discover</button>
    </section>
  )
}

export default Hero