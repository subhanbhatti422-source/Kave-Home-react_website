import Navbar from "../../componentes/Navbar/Navbar"
import Footer from "../../componentes/Footer/Footer"
import "./Contact.css"

const Contact = () => {
  return (
    <>
      <Navbar />

      <main className="contact-page">
        <div className="contact-breadcrumb">
          <span>Help Center</span>
          <span className="sep">/</span>
          <span className="active">Contact</span>
        </div>

        <div className="contact-container">
          <aside className="contact-sidebar">
            <h3>Articles in this section</h3>
            <ul>
              <li className="active">Contact</li>
              <li>Request a Quote</li>
              <li>Project Timelines</li>
            </ul>
          </aside>

          <div className="contact-main">
            <h1 className="contact-title">
              <svg className="growth-icon" viewBox="0 0 100 100" fill="none">
                <path d="M10 80 L35 55 L52 68 L90 20" stroke="#FF3EA5" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M70 20 L90 20 L90 40" stroke="#2E0854" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Contact
            </h1>
            <p className="contact-sub">Growth Strategy · Support</p>

            <p className="contact-text">
              Got a question about your project, a new enquiry, or need a quote? Reach us via{" "}
              <a href="#chat">live chat</a>. Our team replies as quickly as possible — we're here to help you grow.
            </p>

            <p className="contact-text">
              Already working with us? Check the status of your project directly{" "}
              <a href="#status">here</a>. You'll only need the email address used to submit your brief and your project reference.
            </p>

            <div className="contact-cards">
              <div className="contact-card">
                <div className="card-head"> <h3>Telephone contact</h3></div>
                <p>Call us at <strong>+92 3XX XXX XXXX</strong></p>
              </div>
              <div className="contact-card">
                <div className="card-head"> <h3>Email us</h3></div>
                <p>Write to <strong>hello@growthstrategy.site</strong></p>
              </div>
            </div>

            <div className="contact-hours">
              <div className="card-head"> <h3>Opening hours</h3></div>
              <p>Monday to Friday: 09:00 – 18:00</p>
              <span>Karachi (PKT, GMT+5)</span>
            </div>

            <hr />

            <div className="contact-feedback">
              <p>Was this article helpful?</p>
              <div className="feedback-buttons">
                <button className="btn-yes">Yes</button>
                <button className="btn-no">No</button>
              </div>
            </div>

            <div className="contact-related">
              <h3>Related articles</h3>
              <ul>
                <li><a href="#">How do I request a quote?</a></li>
                <li><a href="#">What happens after I submit a project brief?</a></li>
                <li><a href="#">How do I track my project's progress?</a></li>
                <li><a href="#">Can I request changes mid-project?</a></li>
                <li><a href="#">What payment methods do you accept?</a></li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default Contact