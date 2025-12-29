import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAPI } from "../services/api";
import "../styles/popularSearches.css";

const PopularSearches = () => {
  const [searches, setSearches] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAPI("/search/popular")
      .then(data => setSearches(data))
      .catch(console.error);
  }, []);

  return (
    <section className="popular-section">
      <h2 className="popular-heading">Popular Searches</h2>

      <div className="popular-list">
        {searches.map(s => (
          <span
            key={s._id}
            className="popular-chip"
            onClick={() =>
              navigate(`/list?keyword=${encodeURIComponent(s.keyword)}`)
            }
          >
            🔍 {s.keyword}
          </span>
        ))}
      </div>
    </section>
  );
};

export default PopularSearches;
