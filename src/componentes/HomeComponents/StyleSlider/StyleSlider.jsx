import { useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import './StyleSlider.css'
import slider1 from "../../../assets/img/styleslider1.jpg";
import slider2 from "../../../assets/img/styleslider2.jpg";
import slider3 from "../../../assets/img/styleslider3.jpg";
import slider4 from "../../../assets/img/styleslider4.jpg";
import slider5 from "../../../assets/img/styleslider5.jpg";
import slider6 from "../../../assets/img/styleslider6.jpg";
import slider7 from "../../../assets/img/styleslider7.jpg";
import slider8 from "../../../assets/img/styleslider8.jpg";
import slider9 from "../../../assets/img/styleslider9.jpg";

const slides = [
  {
    image: slider1,
    caption: '',
  },
  {
    image: slider2,
    caption: 'Garden tables',
  },
  {
    image: slider3,
    caption: 'Ideas for every corner',
  },
  {
    image: slider4,
    caption: 'Kave x ILCB | Limited edition',
  },
  {
    image: slider5,
    caption: 'Kave x ILCB | Limited edition',
  },
  {
    image: slider6,
    caption: 'Kave x ILCB | Limited edition',
  },
  {
    image: slider7,
    caption: 'Kave x ILCB | Limited edition',
  },
  {
    image: slider8,
    caption: 'Kave x ILCB | Limited edition',
  },
  {
    image: slider9,
    caption: 'Kave x ILCB | Limited edition',
  },
]

const StyleSlider = () => {
  const trackRef = useRef(null)

  const scroll = (direction) => {
    const track = trackRef.current
    if (!track) return
    const amount = track.clientWidth * 0.8
    track.scrollBy({ left: direction === 'next' ? amount : -amount, behavior: 'smooth' })
  }

  return (
    <section className="style-slider">
      <div className="style-slider-header">
        <h2>Our style of outdoor living</h2>
        <div className="slider-arrows">
          <button aria-label="Previous" onClick={() => scroll('prev')}>
            <ArrowLeft size={18} />
          </button>
          <button aria-label="Next" onClick={() => scroll('next')}>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div className="style-slider-track" ref={trackRef}>
        {slides.map((slide, i) => (
          <div className="style-slide" key={i}>
            <div
              className="style-slide-img"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            {slide.caption && <p className="style-slide-caption">{slide.caption}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default StyleSlider