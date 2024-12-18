import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/employee/Dashboard";
import AddEmployee from "./components/employee/AddEmployee";
import EditEmployee from "./components/employee/EditEmployee";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/add-employee" element={<AddEmployee />}></Route>
          <Route path="/update/:id" element={<EditEmployee />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
