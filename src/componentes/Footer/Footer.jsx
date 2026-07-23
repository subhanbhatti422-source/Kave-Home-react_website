const styles = `
.kh-footer {
  font-family: font-3;
  color: #111;
  max-width: 1320px;
  margin: 0 auto;
  padding: 32px 16px 0;
}

@media (min-width: 900px) {
  .kh-footer {
    padding: 40px 16px 0;
  }
}

.kh-disclaimer {
  font-size: 11px;
  line-height: 1.6;
  color: #444;
  margin-bottom: 32px;
}

@media (min-width: 900px) {
  .kh-disclaimer {
    margin-bottom: 48px;
  }
}

.kh-footer-top {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 32px;
}

@media (min-width: 900px) {
  .kh-footer-top {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 40px;
    margin-bottom: 48px;
  }
}

.kh-newsletter {
  max-width: 340px;
}

.kh-newsletter-title {
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 12px;
}

@media (min-width: 900px) {
  .kh-newsletter-title {
    font-size: 26px;
    margin-bottom: 14px;
  }
}

.kh-newsletter-text {
  font-size: 13px;
  font-family: font-2;
  line-height: 1.5;
  color: #333;
  margin-bottom: 18px;
}

.kh-subscribe-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  color: #111;
  border: 1px solid #111;
  font-size: 13px;
  font-weight: 500;
  padding: 12px 20px;
  cursor: pointer;
  font-family: font-2;
}

.kh-subscribe-btn:hover {
  background: #111;
  color: #fff;
}

.kh-linkcols {
  display: flex;
  gap: 28px 32px;
  flex-wrap: wrap;
}

@media (min-width: 900px) {
  .kh-linkcols {
    gap: 64px;
  }
}

.kh-linkcol h4 {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 12px;
  font-family: font-3;
}

@media (min-width: 900px) {
  .kh-linkcol h4 {
    font-size: 15px;
    margin-bottom: 14px;
  }
}

.kh-linkcol ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.kh-linkcol a {
  font-size: 13px;
  color: #111;
  font-family: font-2;
  text-decoration: none;
}

.kh-linkcol a:hover {
  text-decoration: underline;
}

.kh-footer-mid {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding-bottom: 24px;
}

@media (min-width: 900px) {
  .kh-footer-mid {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-bottom: 32px;
  }
}

.kh-socials {
  display: flex;
  gap: 20px;
}

.kh-socials a {
  font-size: 13px;
  color: #111;
  text-decoration: none;
  font-family: font-2;
}

.kh-socials a:hover {
  text-decoration: underline;
}

.kh-locale {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 13px;
  flex-wrap: wrap;
}

@media (min-width: 900px) {
  .kh-locale {
    gap: 24px;
  }
}

.kh-locale-item {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
}

.kh-bottombar {
  background: #000;
  color: #fff;
  padding: 24px 16px;
}

.kh-bottombar-inner {
  max-width: 1320px;
  margin: 0 auto;
}

.kh-legal-row {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 18px;
  font-size: 12px;
  margin-bottom: 20px;
  justify-content: center;
  text-align: center;
}

@media (min-width: 900px) {
  .kh-legal-row {
    justify-content: flex-start;
    text-align: left;
  }
}

.kh-legal-row a {
  color: #fff;
  text-decoration: none;
  font-family: font-2;
}

.kh-legal-row a:hover {
  text-decoration: underline;
}

.kh-payments {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.kh-payment-badge {
  width: 34px;
  align-items: center;
  justify-content: center;
  height: 22px;
  background: #fff;
  font-size: 9px;
  display: flex;
  color: #111;
  font-weight: 600;
  font-family: font-2;
}

.kh-trustpilot {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 13px;
  flex-wrap: wrap;
  text-align: center;
}

.kh-stars {
  color: #00b67a;
  letter-spacing: 2px;
}

.kh-trustpilot a {
  color: #fff;
  text-decoration: underline;
}
`;

const linkColumns = [
  {
    title: "About us",
    links: ["About us", "Responsible practices", "Our stores", "Work with us"],
  },
  {
    title: "Contact",
    links: ["FAQ", "Incidents and returns", "Your order status", "Contact us"],
  },
  {
    title: "Collaboration",
    links: ["Professionals", "Affiliate programme", "Suppliers", "Partners"],
  },
  {
    title: "Account",
    links: ["Register", "Log in", "Gift Card"],
  },
];

const socials = ["Instagram", "Pinterest", "Facebook", "LinkedIn", "X"];

const legalLinks = [
  "Legal notice",
  "Terms & conditions",
  "Privacy policy",
  "Code of Ethics",
  "Integrity Line",
  "Accessibility",
  "Sustainability reports",
  "FSC° Policy",
  "Cookies policy",
  "Cookies settings",
];

const payments = ["PayPal", "MC", "VISA", "AmEx", "Pay", "GPay", "Kave"];

export default function SiteFooter() {
  return (
    <>
      <style>{styles}</style>

      <div className="kh-footer">
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

        <div className="kh-footer-top">
          <div className="kh-newsletter">
            <h3 className="kh-newsletter-title">Subscribe to our newsletter</h3>
            <p className="kh-newsletter-text">
              Be inspired by our ideas for the home and get a €20 discount on your first
              purchase over €200.
            </p>
            <button className="kh-subscribe-btn">Subscribe →</button>
          </div>

          <div className="kh-linkcols">
            {linkColumns.map((col) => (
              <div className="kh-linkcol" key={col.title}>
                <h4>{col.title}</h4>
                <ul>
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="kh-footer-mid">
          <div className="kh-socials">
            {socials.map((s) => (
              <a href="#" key={s}>{s}</a>
            ))}
          </div>

          <div className="kh-locale">
            <span className="kh-locale-item">🌐 International</span>
            <span className="kh-locale-item">English ▾</span>
          </div>
        </div>
      </div>

      <div className="kh-bottombar">
        <div className="kh-bottombar-inner">
          <div className="kh-legal-row">
            <span>©2026 Kave Home</span>
            {legalLinks.map((l) => (
              <a href="#" key={l}>{l}</a>
            ))}
          </div>

          <div className="kh-payments">
            {payments.map((p) => (
              <div className="kh-payment-badge" key={p}>{p}</div>
            ))}
          </div>

          <div className="kh-trustpilot">
            <span>Excellent</span>
            <span className="kh-stars">★★★★★</span>
            <a href="#">41,936 reviews on</a>
            <span>★ Trustpilot</span>
          </div>
        </div>
      </div>
    </>
  );
}