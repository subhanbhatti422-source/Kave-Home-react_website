import './WarmImg.css'
import rightImg from '../../../assets/img/img-landing-inspo-store-05.jpg'
import leftImg from '../../../assets/img/img-landing-inspo-store-04.jpg'


const WarmImg = () => {
  return (
   <>
    <section className="warm-img2">
        <div className="img-text-img2">
            <div className="left-content2">
                <img src={leftImg} alt="" />
                <span className='span-2'>A warm and welcoming atmosphere, designed to make you feel at home while you explore our range of furniture and accessories and get advice from our experts.</span>
            </div>
            <div className="right-img2">
                <img src={rightImg} alt="" />
            </div>
        </div>
    </section>
   </>
  )
}

export default WarmImg
