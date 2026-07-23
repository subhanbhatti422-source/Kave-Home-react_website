import './PointOfView.css'
import ViewImg from '../../../assets/img/landing-about-us-img-04.avif'
const PointOfView = () => {
  return (
 <>
   <section className="point-of-view">
        <div className="point-of-view__text">
          <h2 className="point-of-view__title">Our point of view</h2>
          <p className="point-of-view__subtitle">
            Through objects, we build bonds between people and spaces.
          </p>
          <p className="point-of-view__body">
            In a world where constant change and speed are the order of the
            day, at Kave we believe that a true home is created through{" "}
            <span className="point-of-view__highlight point-of-view__highlight--blue">
              connection
            </span>{" "}
            and{" "}
            <span className="point-of-view__highlight point-of-view__highlight--orange">
              experiences
            </span>{" "}
            that are built bit by bit. That's why we create objects and
            furniture designed to accompany you throughout your life and,
            over time, become part of you.
          </p>
        </div>
 
        <img
          src={ViewImg}
          alt="Dining room styled with Kave Home furniture"
          className="point-of-view__img"
        />
      </section>
 </>
  )
}

export default PointOfView
