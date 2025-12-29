import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BusinessList from "./pages/BusinessList";
import BusinessDetails from "./pages/BusinessDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import AddBusiness from "./pages/AddBusiness";
import Navbar from "./components/Navbar";


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route
  path="/add-business"
  element={
    <ProtectedRoute>
      <AddBusiness />
    </ProtectedRoute>
  }
/>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<BusinessList />} />
        <Route path="/business/:id" element={<BusinessDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
  path="/admin"
  element={
    <ProtectedRoute adminOnly={true}>
      <AdminDashboard />
    </ProtectedRoute>
  }
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
