import "../styles/howItWorks.css";

const HowItWorks = () => {
  return (
    <section className="how-section">
      <h2 className="how-heading">How BizFinder Works</h2>

      <div className="how-flow">
        <div className="how-step">
          <span className="step-number">01</span>
          <h3>Search Services</h3>
          <p>Find trusted local businesses near you</p>
        </div>

        <div className="how-line"></div>

        <div className="how-step">
          <span className="step-number">02</span>
          <h3>Compare Listings</h3>
          <p>Check ratings, reviews and details</p>
        </div>

        <div className="how-line"></div>

        <div className="how-step">
          <span className="step-number">03</span>
          <h3>Connect Instantly</h3>
          <p>Call or message businesses directly</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
