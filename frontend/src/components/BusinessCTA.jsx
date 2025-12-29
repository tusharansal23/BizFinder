import { useNavigate } from "react-router-dom";
import "../styles/businessCTA.css";

const BusinessCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Own a Business?</h2>
        <p>List your business and reach more customers instantly</p>
        <button onClick={() => navigate("/add-business")}>
          Add Your Business
        </button>
      </div>
    </section>
  );
};

export default BusinessCTA;
