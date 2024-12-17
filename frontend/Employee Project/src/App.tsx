import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/employee/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          {/* <Route path="/update/:id" element={<Update />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/addCart/:id" element={<AddCart />}></Route>
          <Route path="/  dashboard" element={<Cart />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
