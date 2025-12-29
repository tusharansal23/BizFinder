import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  {user?.role === "admin" && (
  <Link to="/admin">Dashboard</Link>
)}

{user && <Link to="/add-business">Add Business</Link>}

{!user && <Link to="/login">Login</Link>}
  const logoutHandler = () => {
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload(); // important for navbar refresh
  };

  return (
    <nav className="nav">
      <h2 className="logo">BizFinder</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/list">Businesses</Link>

        {user ? (
          <>
            <Link to="/add-business">Add Business</Link>

            {user.role === "admin" && (
              <Link to="/admin">Admin</Link>
            )}

            <button className="btn" onClick={logoutHandler}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register" className="btn">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
