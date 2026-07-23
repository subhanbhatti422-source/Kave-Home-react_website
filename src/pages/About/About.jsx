import Navbar from "../../componentes/Navbar/Navbar"
import AboutHero from "../../componentes/AboutComponents/AboutHero/AboutHero"
import Story from "../../componentes/AboutComponents/OurStory/OurStory"
import StoryGallery from "../../componentes/AboutComponents/StoryGallery/StoryGallery"
import PointOfView from "../../componentes/AboutComponents/PointOfView/PointOfView"
import OurValue from "../../componentes/AboutComponents/OurValue/OurValue"
import OurCommitment from "../../componentes/AboutComponents/OurCommitment/OurCommitment"
import Footer from '../../componentes/Footer/Footer'



const About = () => {
  return (
   <>

   <Navbar/>
   <AboutHero/>
   <Story/>
   <StoryGallery/>
   <PointOfView/>
   <OurValue/>
   <OurCommitment/>
   <Footer/>

   </>
  )
}

export default About
