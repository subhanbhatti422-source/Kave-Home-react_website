import rightImg from '../../../assets/img/landing-about-us-img-02.jpg'
import leftImg from '../../../assets/img/landing-about-us-img-03.avif'
import './StoryGallery.css'
const StoryGallery = () => {
  return (
   <div className="StoryGallery">
    <div className="right">
        <img src={rightImg} alt="" />
    </div>
    <div className="left">
        <img src={leftImg} alt="" />
    </div>
   </div>
  )
}

export default StoryGallery
