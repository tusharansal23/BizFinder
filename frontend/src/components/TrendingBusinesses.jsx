import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAPI } from "../services/api";
import "../styles/grid.css";

const TrendingBusinesses = () => {
  const [businesses, setBusinesses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAPI("/business/trending")
      .then(data => setBusinesses(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="category-section">
      <h2 className="category-heading">Trending Businesses</h2>

      <div className="grid">
        {businesses.map(b => (
          <div
            key={b._id}
            className="business-card"
            onClick={() => navigate(`/business/${b._id}`)}
          >
            <h3>{b.name}</h3>
            <p>{b.category}</p>
            <p>{b.city}</p>
            <span>⭐ {b.rating || 0}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingBusinesses;
