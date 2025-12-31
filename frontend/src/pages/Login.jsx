import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAPI } from "../services/api";
import "../styles/login.css";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const data = await fetchAPI("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password })
    });

    localStorage.setItem("user", JSON.stringify(data));

    console.log("LOGIN RESPONSE:", data);

    // 🔥 ROLE BASED REDIRECT
    if (data.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input value={email} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Login</button>
    </form>
  );
};

export default Login;
