import StoresImg from '../../../assets/img/img-landing-inspo-store-01.jpg'
import './OurFind.css'
const OurFind = () => {
  return (
   <>
    <section className="Our-stores">
        <div className="our">
    <div className="stores-Content-left">
        <span>Our stores</span>
        <p>We welcome you to our stores, where design, quality and inspiration are intertwined to offer you a unique brand experience.</p>
        <button>Find your</button>
    </div>
    <div className="stores-img-right">
        <img src={StoresImg} alt="" />
    </div>
    </div>
    </section>
   
   </>
  )
}

export default OurFind
