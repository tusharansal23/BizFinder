import { useNavigate } from "react-router-dom";
import "../styles/grid.css";

const categories = [
  "Electronics",
  "Electricians",
  "Plumbers",
  "Hospitals",
  "Restaurants",
  "Salons",
  "Gyms",
  "Coaching",
  "IT"
];

const Categories = () => {
  const navigate = useNavigate();

  const clickHandler = (category) => {
    navigate(`/list?keyword=${category}`);
  };

  return (
    <section className="category-section">
      <h2 className="category-heading">Popular Categories</h2>

      <div className="grid">
        {categories.map(c => (
          <div
            key={c}
            className="business-card"
            onClick={() => clickHandler(c)}
          >
            {c}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
