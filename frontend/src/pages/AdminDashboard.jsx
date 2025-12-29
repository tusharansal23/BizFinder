import { useEffect, useState } from "react";
import { fetchAPI } from "../services/api";

const AdminDashboard = () => {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    fetchAPI("/admin/pending-businesses")
      .then(setBusinesses)
      .catch(console.error);
  }, []);

  const approveHandler = async (id) => {
    await fetchAPI(`/admin/approve-business/${id}`, {
      method: "PUT"
    });

    setBusinesses(businesses.filter(b => b._id !== id));
  };

  return (
    <div>
      <h2>Pending Businesses</h2>

      {businesses.map(b => (
        <div key={b._id}>
          <h4>{b.name}</h4>
          <p>{b.city} - {b.category}</p>
          <button onClick={() => approveHandler(b._id)}>
            Approve
          </button>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
