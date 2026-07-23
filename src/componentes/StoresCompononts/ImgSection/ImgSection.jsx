import './ImgSection.css'
import img1 from '../../../assets/img/img-landing-inspo-store-02.jpg'
import img2 from '../../../assets/img/img-landing-inspo-store-03.jpg'
const ImgSection = () => {
  return (
    <>
    <section className='img-text-img'>
    <img className='img-1' src={img1} alt="" />
    <span className='span-1'>Spaces designed to touch, feel, experience and enjoy the inspiration of well-made things.</span>
    <img className='img-2' src={img2} alt="" />
    </section>
    </>
  )
}

export default ImgSection
