import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const path = location.pathname.split("/")[1];

  const breadcrumbLabel = {
    "": "Home",
    list: "Businesses",
    "add-business": "Add Business",
    admin: "Admin",
    login: "Login",
    register: "Register"
  }[path] || "Page";

  const logoutHandler = () => {
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload();
  };

  return (
    <nav className="nav">
      <h2 className="logo">BizFinder</h2>


      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* Desktop Links */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/list">Businesses</Link>

        {user ? (
          <>
            <Link to="/add-business">Add Business</Link>
            {user.role === "admin" && <Link to="/admin">Admin</Link>}
            <button className="btn" onClick={logoutHandler}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register" className="btn">Register</Link>
          </>
        )}
      </div>

      {/* Mobile Slide Menu */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/list" onClick={() => setOpen(false)}>Businesses</Link>

        {user ? (
          <>
            <Link to="/add-business" onClick={() => setOpen(false)}>Add Business</Link>
            {user.role === "admin" && (
              <Link to="/admin" onClick={() => setOpen(false)}>Admin</Link>
            )}
            <button onClick={logoutHandler}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
            <Link to="/register" onClick={() => setOpen(false)}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
