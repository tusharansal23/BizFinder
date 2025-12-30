const BASE_URL = "https://bizfinder-2.onrender.com/api";

export const fetchAPI = async (endpoint, options = {}) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(user?.token && {
        Authorization: `Bearer ${user.token}`
      }),
      ...(options.headers || {})
    }
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("API ERROR RESPONSE:", text);
    throw new Error("Request failed");
  }

  return res.json();
};
