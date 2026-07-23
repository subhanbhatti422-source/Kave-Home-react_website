import './OurCommitment.css'
import rightImg from '../../../assets/img/landing-about-us-img-07.avif'
import leftImg from '../../../assets/img/landing-about-us-img-06.avif'

const OurCommitment = () => {
  return (
   <>
   <section className='OurCommitment'> 
    <div className="point-of-view__text">
          <h2 className="point-of-view__title">Our commitment</h2>
          <p className="point-of-view__subtitle2">
            Our concept and understanding of the home is also born out of a different way of looking at the future.
          </p>
          <a href="">See how we do it</a>
         
        </div>

         <div className="StoryGallery2">
            <div className="left2">
                <img src={leftImg} alt="" />
            </div>
            <div className="right2">
                <img src={rightImg} alt="" />
            </div>
           </div>
        </section>


   </>
  )
}

export default OurCommitment
