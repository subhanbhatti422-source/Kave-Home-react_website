import footer2 from "../../../assets/img/footer-women.jpg";
import footer1 from "../../../assets/img/footer-city.jpg";
import footer3 from "../../../assets/img/footer.jpg";


import logo1 from "../../../assets/img/footer-logo.png";
import logo2 from "../../../assets/img/footer-logo-1.png";
import logo3 from "../../../assets/img/footer-logo-2.png";
import logo4 from "../../../assets/img/footer-logo-3.png";
import logo5 from "../../../assets/img/footer-logo-5.png";
import logo6 from "../../../assets/img/footer-logo-1.png";

const styles = `
.kh-wrap {
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: #111;
  max-width: 1320px;
  margin: 0 auto;
  padding: 24px 16px;
}

@media (min-width: 900px) {
  .kh-wrap {
    padding: 40px 16px;
  }
}

.kh-heading {
  font-size: 22px;
  font-weight: 500;
  line-height: 1.15;
  font-family: font-1;
  margin-bottom: 16px;
}

@media (min-width: 640px) {
  .kh-heading {
    font-size: 26px;
  }
}

@media (min-width: 900px) {
  .kh-heading {
    font-size: 32px;
    margin-bottom: 24px;
  }
}

.kh-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 640px) {
  .kh-cards {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
}

@media (min-width: 900px) {
  .kh-cards {
    grid-template-columns: repeat(3, 1fr);
  }
}

.kh-card-img {
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  margin-bottom: 16px;
}

@media (min-width: 640px) {
  .kh-card-img {
    height: 340px;
  }
}

@media (min-width: 900px) {
  .kh-card-img {
    height: 420px;
  }
}

@media (min-width: 1200px) {
  .kh-card-img {
    height: 500px;
  }
}

.kh-card-title {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 6px;
  font-family: font-1;
  letter-spacing: 1px;
}

@media (min-width: 900px) {
  .kh-card-title {
    font-size: 17px;
  }
}

.kh-card-link {
  font-size: 14px;
  color: #111;
  text-decoration: underline;
  cursor: pointer;
  font-family: font-2;
}

.kh-categories {
  margin-top: 40px;
  position: relative;
}

@media (min-width: 900px) {
  .kh-categories {
    margin-top: 64px;
  }
}

.kh-categories-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

@media (min-width: 900px) {
  .kh-categories-head {
    margin-bottom: 20px;
  }
}

.kh-categories-title {
  font-size: 18px;
  font-weight: 500;
  font-family: font-2;
}

@media (min-width: 900px) {
  .kh-categories-title {
    font-size: 22px;
  }
}

.kh-cat-arrows {
  display: flex;
  gap: 12px;
}

.kh-cat-arrow {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  background: #fff;
  border-radius: 50%;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.kh-cat-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 20px;
}

@media (min-width: 900px) {
  .kh-cat-list {
    gap: 24px 32px;
  }
}

.kh-cat-item {
  font-size: 13px;
  font-family: font-2;
  color: #111;
  cursor: pointer;
  white-space: nowrap;
}

@media (min-width: 900px) {
  .kh-cat-item {
    font-size: 14px;
  }
}

.kh-cat-item:hover {
  text-decoration: underline;
}

.kh-commitment {
  margin-top: 32px;
  background: #ece7dc;
  padding: 24px 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;
}

@media (min-width: 900px) {
  .kh-commitment {
    margin-top: 56px;
    padding: 32px 32px;
    flex-direction: row;
    align-items: center;
    gap: 24px;
  }
}

.kh-commitment-text {
  max-width: 360px;
}

.kh-commitment-title {
  font-size: 17px;
  font-weight: 500;
  font-family: font-2;
  margin-bottom: 6px;
}

@media (min-width: 900px) {
  .kh-commitment-title {
    font-size: 19px;
  }
}

.kh-commitment-link {
  font-size: 14px;
  text-decoration: underline;
  font-family: font-4;
  color: #111;
  cursor: pointer;
}

.kh-badges {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

@media (min-width: 900px) {
  .kh-badges {
    gap: 28px;
  }
}

.kh-badge {
  font-size: 11px;
  color: #555;
  text-align: center;
  line-height: 1.3;
  width: 74px;
  font-family: font-2;
}

.kh-badge img {
  width: 50px;
  height: 50px;
  object-fit: contain;
  display: block;
  margin: 0 auto 8px;
}

@media (min-width: 900px) {
  .kh-badge img {
    width: 55px;
    height: 55px;
  }
}

.kh-disclaimer {
  margin-top: 20px;
  font-size: 11px;
  line-height: 1.6;
  color: #777;
}

@media (min-width: 900px) {
  .kh-disclaimer {
    margin-top: 28px;
  }
}
`;

const categories = [
  "Garden sofas",
  "Garden tables",
  "Garden chairs",
  "Garden sets",
  "Bar tables",
  "Beds",
  "Bedside tables",
  "Corner sofas & chaise longues",
  "Floor lamps",
  "Round tables",
  "Rugs",
];

const badges = [
  { name: "ClimatePartner", image: logo1 },
  { name: "DNV", image: logo2 },
  { name: "FSC", image: logo3 },
  { name: "ecovadis", image: logo4 },
  { name: "amfori Member", image: logo5 },
  { name: "SUSTAINABLE DEVELOPMENT GOALS", image: logo6 },
];

export default function SupportSection() {
  return (
    <>
      <style>{styles}</style>
      <div className="kh-wrap">
        {/* Heading */}
        <h2 className="kh-heading">
          We support you<br />every step of the way
        </h2>

        {/* Support cards */}
        <div className="kh-cards">
          <div>
            <div className="kh-card-img stores "  style={{
    backgroundImage: `url(${footer1})`,
  }}>

            </div>
            <p className="kh-card-title">Spaces where you can see, touch and try</p>
            <span className="kh-card-link">Stores</span>
          </div>

          <div>
            <div className="kh-card-img design"   style={{
    backgroundImage: `url(${footer2})`,
  }}></div>
            <p className="kh-card-title">Together, we design a bespoke home for you</p>
            <span className="kh-card-link">Interior Design Service</span>
          </div>

          <div>
            <div className="kh-card-img trade"   style={{
    backgroundImage: `url(${footer3})`,
  }}></div>
            <p className="kh-card-title">We support your project</p>
            <span className="kh-card-link">Trade Programme</span>
          </div>
        </div>

        {/* Categories */}
        <div className="kh-categories">
          <div className="kh-categories-head">
            <h3 className="kh-categories-title">Categories</h3>
            <div className="kh-cat-arrows">
              <button className="kh-cat-arrow" aria-label="Previous">←</button>
              <button className="kh-cat-arrow" aria-label="Next">→</button>
            </div>
          </div>
          <div className="kh-cat-list">
            {categories.map((cat) => (
              <span className="kh-cat-item" key={cat}>{cat}</span>
            ))}
          </div>
        </div>
        
        <div className="kh-commitment">
          <div className="kh-commitment-text">
            <p className="kh-commitment-title">Our commitment to responsible practices.</p>
            <span className="kh-commitment-link">Discover the project</span>
          </div>
          <div className="kh-badges">
  {badges.map((badge) => (
    <div className="kh-badge" key={badge.name}>
      <img src={badge.image} alt={badge.name} />
      <p>{badge.name}</p>
    </div>
  ))}
</div>
        </div>


        <p className="kh-disclaimer">
          *Seasonal Deal promotion: €100 discount with code DEAL100 on the purchase of a
          selection of products with a minimum amount of €700. Only products included in the
          selection Seasonal Deal will be calculated to meet said amount. Some products have
          limited units and others are available while stocks last. Promotion valid from
          07/07/2026 to 07/20/2026 online at www.kavehome.com and in store. Code cannot be
          combined with other discount codes or promotions, unless otherwise expressly
          indicated. Some products have limited quantities available; others are available
          while stocks last. Check availability here. | *Sale: Offer valid from 19/06/26 to
          31/08/26 on selected items. Discounts are applied according to availability. Some
          products are available in limited quantities, while others will be available until
          stocks last.
        </p>
      </div>
    </>
  );
}