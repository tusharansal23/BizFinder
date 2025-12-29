import "../styles/businessCard.css";
import { useNavigate } from "react-router-dom";

const BusinessCard = ({ business }) => {
  const navigate = useNavigate();

  return (
    <div
      className="business-card"
      onClick={() => navigate(`/business/${business._id}`)}
    >
      <h3 className="business-title">{business.name}</h3>
      <p className="business-meta">
        {business.category} • {business.city}
      </p>
      <p className="business-meta">⭐ {business.rating.toFixed(1)}</p>
    </div>
  );
};

export default BusinessCard;
