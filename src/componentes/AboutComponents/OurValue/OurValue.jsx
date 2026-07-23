import './OurValue.css'
import Value from "../../../assets/img/landing-about-us-img-08.avif"
import ValueImg from "../../../assets/img/landing-about-us-img-05.avif"

const OurValue = () => {
  return (
   <>
    <div className="main">
        <div className="left-right">
        <div className="left-Text">
            <span>Our value proposition</span>
            <p>Here to Stay</p>
            <img src={Value} alt="" />
        </div>
        <div className="right-Text">
            <div className="FiveInOne">
                <div className="h1-p">
                    <h1>A way of understanding the home.</h1>
                    <p>A home is not built in a single day, nor does it change with every season. It is built piece by piece, with objects that will endure and experiences that we collect.</p>
                </div>
                <div className="h1-p">
                    <h1>A way of designing furniture.</h1>
                    <p>We build furniture designed to endure, share space and evolve with you. Far from fleeting trends, we strive for timelessness, versatility and character.</p>
                </div>
                <div className="h1-p">
                    <h1>A way of being as a brand.</h1>
                    <p>We want to leave our mark on spaces and on people's lives. To be present when life happens and to be a part of what will continue to endure.</p>
                </div>
                <div className="h1-p">
                    <h1>A way of working together.</h1>
                    <p>Being there for each other and building something together that is worth sticking around for. A relationship between people, and between people and the company, with the aim of fostering a lasting bond.</p>
                </div>
                <div className="h1-p">
                    <h1>A way of seeing the world.</h1>
                    <p>We are proud of our Mediterranean spirit and our roots. We aim to continue growing without losing sight of what defines us.</p>
                </div>
                
            </div>
        </div>
        </div>

        <div className="value-img">
            <img src={ValueImg} alt="" />
        </div>
    </div>


   </>
  )
}

export default OurValue
