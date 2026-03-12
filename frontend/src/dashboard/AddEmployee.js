import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/footer";

function AddEmployee() {

const navigate = useNavigate();

const [formData, setFormData] = useState({
name: "",
department: "",
role: ""
});

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value
});
};

const handleSubmit = async (e) => {
e.preventDefault();

try{

const res = await fetch("http://localhost:5000/api/employees",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(formData)
});

const data = await res.json();

if(res.ok){

console.log("Employee saved:",data);

setFormData({
name:"",
department:"",
role:""
});

navigate("/dashboard/employees");

}else{

alert("Failed to add employee");

}

}catch(error){

console.error("Error:",error);

}

};

return (

<div style={{ fontFamily: "Arial, sans-serif" }}>

{/* TOP NAVBAR */}

<div style={{
display: "flex",
justifyContent: "space-between",
padding: "10px 40px",
borderBottom: "1px solid #eee",
fontSize: "14px",
background: "#fff"
}}>

<div style={{ display: "flex", gap: "20px" }}>
<b>WorkOrbit</b>
<span>Payroll</span>
<span>Recruit</span>
<span>Expense</span>
<span>Mail</span>
<span>Cliq</span>
<span>Sign</span>
<span>All Products</span>
</div>

<div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
<span>🔍</span>
<span style={{ color: "red" }}>Sign In</span>

<button style={{
background: "red",
color: "white",
border: "none",
padding: "8px 14px",
borderRadius: "4px",
cursor: "pointer"
}}>
Get Started
</button>

</div>
</div>

{/* SECOND NAVBAR */}

<div style={{
display: "flex",
justifyContent: "space-between",
padding: "15px 40px",
borderBottom: "1px solid #eee",
background: "#fff"
}}>

<h2>WorkOrbit People</h2>

<div style={{ display: "flex", gap: "25px" }}>
<span>Features</span>
<span>Solutions</span>
<span>Pricing</span>
<span>Resources</span>
</div>

</div>

{/* HERO SECTION */}

<div style={{
display: "flex",
justifyContent: "space-between",
padding: "80px",
background: "linear-gradient(135deg,#0a0a0a,#4fc3f7,#9b30ff)",
minHeight: "60vh"
}}>

{/* LEFT CONTENT */}

<motion.div
initial={{ opacity: 0, x: -80 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8 }}
style={{ width: "50%", color: "white" }}
>

<h1 style={{ fontSize: "55px", marginBottom: "20px" }}>
Add Employee
</h1>

<p style={{ fontSize: "18px", marginBottom: "25px" }}>
Manage employees easily inside your organization dashboard.
Add employee details to your HR management system.
</p>

<ul style={{ lineHeight: "2", fontSize: "16px" }}>
<li>✔ Store employee information</li>
<li>✔ Manage departments</li>
<li>✔ Build your HR dashboard</li>
</ul>

</motion.div>

{/* FORM CARD */}

<motion.div
initial={{ opacity: 0, x: 80 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8 }}
style={{
width: "420px",
background: "rgba(255,255,255,0.2)",
backdropFilter: "blur(10px)",
boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
padding: "35px",
borderRadius: "20px",
color: "white"
}}
>

<h3 style={{ marginBottom: "20px" }}>Add Employee</h3>

<form onSubmit={handleSubmit}>

<input
type="text"
name="name"
placeholder="Employee Name"
value={formData.name}
onChange={handleChange}
style={inputStyle}
required
/>

<input
type="text"
name="department"
placeholder="Department"
value={formData.department}
onChange={handleChange}
style={inputStyle}
required
/>

<input
type="text"
name="role"
placeholder="Role"
value={formData.role}
onChange={handleChange}
style={inputStyle}
required
/>

<motion.button
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
style={buttonStyle}
type="submit"
>
Add Employee
</motion.button>

</form>

</motion.div>

</div>

{/* FOOTER */}

<Footer />

</div>

);
}

const inputStyle = {
width: "90%",
padding: "10px",
marginBottom: "15px",
border: "1px solid #ddd",
borderRadius: "20px",
fontSize: "14px"
};

const buttonStyle = {
width: "50%",
padding: "13px",
background: "#e53935",
color: "white",
border: "none",
borderRadius: "60px",
fontSize: "16px",
cursor: "pointer"
};

export default AddEmployee;