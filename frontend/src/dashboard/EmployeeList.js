import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/footer";

function EmployeeList() {

const [employees,setEmployees] = useState([]);
const [loading,setLoading] = useState(true);
const [error,setError] = useState(null);

useEffect(()=>{
 

fetch("http://localhost:5000/api/employees")
.then(res=>res.json())
.then(data=>setEmployees(data))
.catch(err=>console.log(err));



const fetchEmployees = async ()=>{

try{

const res = await fetch("http://localhost:5000/api/employees");
const data = await res.json();

setEmployees(data.data || data);
setLoading(false);

}catch(err){
console.log(err);
setError("Failed to load employees");
setLoading(false);
}

};

fetchEmployees();

},[]);

return(

<div style={{fontFamily:"Arial, sans-serif"}}>

{/* TOP GLOBAL NAVBAR */}

<div style={{
display:"flex",
justifyContent:"space-between",
padding:"10px 40px",
borderBottom:"1px solid #eee",
fontSize:"14px",
background:"#fff"
}}>

<div style={{display:"flex",gap:"20px"}}>
<b>WorkOrbit</b>
<span>Payroll</span>
<span>Recruit</span>
<span>Expense</span>
<span>Mail</span>
<span>Cliq</span>
<span>Sign</span>
<span>All Products</span>
</div>

<div style={{display:"flex",gap:"20px",alignItems:"center"}}>
<span>🔍</span>
<span style={{color:"red"}}>Sign In</span>

<button style={{
background:"red",
color:"white",
border:"none",
padding:"8px 14px",
borderRadius:"4px",
cursor:"pointer"
}}>
Get Started
</button>

</div>

</div>


{/* SECOND NAVBAR */}

<div style={{
display:"flex",
justifyContent:"space-between",
padding:"15px 40px",
borderBottom:"1px solid #eee",
background:"#fff"
}}>

<h2>WorkOrbit People</h2>

<div style={{display:"flex",gap:"25px"}}>
<span>Features</span>
<span>Solutions</span>
<span>Pricing</span>
<span>Resources</span>
</div>

</div>


{/* HERO SECTION */}

<div style={{
padding:"50px",
background:"linear-gradient(135deg,#0a0a0a,#4fc3f7,#9b30ff)",
minHeight:"60vh",
color:"white"
}}

>

<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.8}}
>

<h1 style={{fontSize:"50px",marginBottom:"20px"}}>
Employee Directory
</h1>

<p style={{fontSize:"18px",marginBottom:"40px"}}>
View and manage employees in your organization.
</p>


{/* EMPLOYEE TABLE */}

<div style={{
background:"rgba(255,255,255,0.15)",
backdropFilter:"blur(10px)",
borderRadius:"15px",
padding:"30px"
}}

>

{loading ? (

<p>Loading employees...</p>

) : error ? (

<p>{error}</p>

) : (

<table style={{width:"100%",color:"white",borderCollapse:"collapse"}}>

<thead>

<tr style={{borderBottom:"1px solid rgba(255,255,255,0.3)"}}>
<th style={thStyle}>Name</th>
<th style={thStyle}>Department</th>
<th style={thStyle}>Role</th>
</tr>

</thead>

<tbody>

{employees.length === 0 ? (

<tr>
<td colSpan="3" style={{textAlign:"center",padding:"20px"}}>
No employees found
</td>
</tr>

) : (

employees.map((emp)=>(
<tr key={emp._id} style={{borderBottom:"1px solid rgba(255,255,255,0.2)"}}>

<td style={tdStyle}>{emp.name}</td>
<td style={tdStyle}>{emp.department}</td>
<td style={tdStyle}>{emp.role}</td>

</tr>
))

)}

</tbody>

</table>

)}

</div>

</motion.div>

</div>


{/* FOOTER */}

<Footer/>

</div>

);

}

const thStyle={
padding:"12px",
textAlign:"left",
fontSize:"16px"
};

const tdStyle={
padding:"12px",
fontSize:"15px"
};

export default EmployeeList;