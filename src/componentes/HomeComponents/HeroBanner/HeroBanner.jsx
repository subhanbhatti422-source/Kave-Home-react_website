
import saleImg from "../../../assets/img/styleslider6.jpg";
import newInImg from "../../../assets/img/styleslider5.jpg";
import './HeroBanner.css'



export default function HeroBanner() {
  return (
    <>
    

      <section className="kh-hero">

        {/* Sale */}
        <div
          className="kh-panel sale"
          style={{
            backgroundImage: `
              linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,0.6) 100%),
              url(${saleImg})
            `,
          }}
        >
          <div className="kh-content">
            <h2 className="kh-title">Sale</h2>
            <p className="kh-subtitle">
              Up to 50% off on selected items*
            </p>
            <button className="kh-btn">View products</button>
          </div>
        </div>

        {/* New In */}
        <div
          className="kh-panel new-in"
          style={{
            backgroundImage: `
              linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,0.6) 100%),
              url(${newInImg})
            `,
          }}
        >
          <div className="kh-content">
            <h2 className="kh-title">New In</h2>
            <p className="kh-subtitle">
              A Dialogue in Time
            </p>
            <button className="kh-btn">View products</button>
          </div>
        </div>

      </section>
    </>
  );
}