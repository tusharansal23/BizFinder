import { useState } from "react";
import { fetchAPI } from "../services/api";

const AddBusiness = () => {
  const [form, setForm] = useState({
    name: "",
    category: "",
    city: "",
    description: ""
  });

  const user = JSON.parse(localStorage.getItem("user"));

  console.log("USER:", user);

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    await fetchAPI("/business/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`
      },
      body: JSON.stringify(form)
    });

    alert("Business submitted for approval");
    setForm({ name: "", category: "", city: "", description: "" });
  };

  return (
    <div style={{ maxWidth: 500, margin: "auto" }}>
      <h2>Add Business</h2>

      <form onSubmit={submitHandler}>
        <input name="name" placeholder="Business Name" onChange={changeHandler} />
        <input name="category" placeholder="Category" onChange={changeHandler} />
        <input name="city" placeholder="City" onChange={changeHandler} />
        <textarea
          name="description"
          placeholder="Description"
          onChange={changeHandler}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBusiness;
