import "../styles/whyChoose.css";

const WhyChoose = () => {
  return (
    <section className="why-section">
      <h2 className="why-heading">Why Choose BizFinder?</h2>

      <div className="why-features">
        <div className="why-item">
          <span className="why-icon">✔</span>
          <div>
            <h3>Verified Listings</h3>
            <p>Every business is manually reviewed and approved</p>
          </div>
        </div>

        <div className="why-item delay-1">
          <span className="why-icon">⭐</span>
          <div>
            <h3>Trusted Reviews</h3>
            <p>Real feedback from real customers</p>
          </div>
        </div>

        <div className="why-item delay-2">
          <span className="why-icon">⚡</span>
          <div>
            <h3>Fast Search</h3>
            <p>Find services instantly across cities</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
