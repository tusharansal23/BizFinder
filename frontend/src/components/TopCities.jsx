import { useNavigate } from "react-router-dom";
import "../styles/grid.css";

const TopCities = () => {
  const navigate = useNavigate();

  const cities = [
    "Delhi",
    "Mumbai",
    "Bangalore",
    "Pune",
    "Chennai",
    "Hyderabad",
    "Chandigarh",
    "Derabassi",
    "Kharar"
  ];

  const clickHandler = (city) => {
    navigate(`/list?city=${city}`);
  };

  return (
    <section className="category-section">
      <h2 className="category-heading">Popular Cities</h2>

      <div className="grid">
        {cities.map(city => (
          <div
            key={city}
            className="business-card city-card"
            onClick={() => clickHandler(city)}
          >
            {city}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCities;
