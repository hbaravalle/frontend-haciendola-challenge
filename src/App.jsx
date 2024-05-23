import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FormWizard from "./pages/FormWizard";

import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password/:step?" element={<FormWizard />} />
    </Routes>
  );
}

export default App;
