import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/hero.css";

const Hero = () => {
  const [keyword, setKeyword] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const searchHandler = () => {
    navigate(`/list?keyword=${keyword}&city=${city}`);
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Find Trusted Local Businesses</h1>
        <p>Search services, shops, and professionals near you</p>

        <div className="hero-search">
          <input
            placeholder="Service or business"
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
          />

          <input
            placeholder="City"
            value={city}
            onChange={e => setCity(e.target.value)}
          />

          <button className="btn" onClick={searchHandler}>
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
