import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAPI } from "../services/api";
import "../styles/businessDetails.css";
import Reviews from "../components/Reviews";


const BusinessDetails = () => {
  const { id } = useParams();
  const [business, setBusiness] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBusiness = async () => {
      try {
        const data = await fetchAPI(`/business/${id}`);
        setBusiness(data);
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadBusiness();
  }, [id]);

  if (loading) return <p className="loading">Loading details...</p>;
  if (!business) return <p>Business not found</p>;

  return (
    <div className="details-container">
      <h2>{business.name}</h2>
      <p className="category">{business.category}</p>
      <p className="city">{business.city}</p>

      <div className="info-box">
        <p><strong>Phone:</strong> {business.phone}</p>
        <p><strong>Address:</strong> {business.address || "Not available"}</p>
        <p><strong>Description:</strong> {business.description || "No description"}</p>
      </div>

      <button className="call-btn">📞 Call Business</button>

      <Reviews businessId={business._id} />

    </div>
  );
};

export default BusinessDetails;
