import Footer from "../../componentes/Footer/Footer"
import Hero from "../../componentes/HomeComponents/Hero/Hero"
import HeroBanner from "../../componentes/HomeComponents/HeroBanner/HeroBanner"
import KaveGalleryHero from "../../componentes/HomeComponents/Kavegalleryhero/Kavegalleryhero"
import Navbar from "../../componentes/Navbar/Navbar"
import StyleSlider from "../../componentes/HomeComponents/StyleSlider/StyleSlider"
import SupportSection from "../../componentes/HomeComponents/Supportsection/Supportsection"
import './Home.css'


const Home = () => {
  return (
    <>
     <Navbar/>
     <h1>Home Page</h1>
    <Hero/>
    <StyleSlider/>
    <HeroBanner/>

     <section className="hero3">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>Selected Collection</h1>
        <p className="hero-note">For a limited time only.</p>
      </div>
      <button className="hero-cta">Discover</button>
    </section>

    {/* <KaveGalleryHero/> */}
    {/* <SupportSection/> */}
    // <Footer/>
    </>
  )
}

export default Home
