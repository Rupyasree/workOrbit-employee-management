import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";

import DashboardLayout from "./dashboard/DashboardLayout";
import AddEmployee from "./dashboard/AddEmployee";
import EmployeeList from "./dashboard/EmployeeList";

import Footer from "./components/footer";

function App() {

  // SEND EMPLOYEE DATA TO BACKEND
  const addEmployee = async (employee) => {

    try {

      const res = await fetch("http://localhost:5000/api/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(employee)
      });

      const data = await res.json();
      console.log("Employee saved:", data);

    } catch (error) {
      console.error("Error:", error);
    }

  };

  return (
    <BrowserRouter>

      <Routes>

        {/* Public pages */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard Layout */}
        <Route path="/dashboard" element={<DashboardLayout />} />

        {/* Add Employee */}
        <Route
          path="/dashboard/add-employee"
          element={<AddEmployee addEmployee={addEmployee} />}
        />

        {/* Employee List */}
        <Route
          path="/dashboard/employees"
          element={<EmployeeList />}
        />

      </Routes>

      {/* Global Footer */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;