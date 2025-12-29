import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchAPI } from "../services/api";
import BusinessCard from "../components/BusinessCard";
import "../styles/grid.css";

const BusinessList = () => {
  const [businesses, setBusinesses] = useState([]);
  const location = useLocation();

  useEffect(() => {
  const keyword = new URLSearchParams(location.search).get("keyword");

  if (keyword) {
    // Track keyword in backend
    fetchAPI("/search/track", {
      method: "POST",
      body: JSON.stringify({ keyword }),
    }).catch(console.error);
  }

  // Fetch businesses
  fetchAPI(`/business${location.search}`).then(setBusinesses);
}, [location.search]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Search Results</h2>

      <div className="grid">
        {businesses.length > 0 ? (
          businesses.map(b => (
            <BusinessCard key={b._id} business={b} />
          ))
        ) : (
          <p>No businesses found</p>
        )}
      </div>
    </div>
  );
};

export default BusinessList;
