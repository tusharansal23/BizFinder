import { useState } from "react";
import { fetchAPI } from "../services/api";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await fetchAPI("/auth/register", {
        method: "POST",
        body: JSON.stringify(form)
      });
      localStorage.setItem("user", JSON.stringify(data));
      alert("Registered successfully");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} />
      <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
      <input type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} />
      <button>Register</button>
    </form>
  );
};

export default Register;
