import React from "react";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";

function Dashboard() {

const navigate = useNavigate();   // ✅ must be here (before return)

return (

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
padding:"18px 40px",
background:"#fff",
alignItems:"center",
borderBottom:"1px solid #eee"
}}>

<h2 style={{margin:0}}>WorkOrbit People</h2>

<div style={{display:"flex",gap:"30px",fontSize:"15px"}}>
<span>Features</span>
<span>Solutions</span>
<span>Pricing</span>
<span>Customers</span>
<span>Partners</span>
<span>Resources</span>
</div>

</div>


{/* DASHBOARD LAYOUT */}

<div style={{display:"flex"}}>

{/* Sidebar */}

<Sidebar />

{/* MAIN CONTENT */}

<div style={{flex:1}}>

<motion.div
initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
transition={{duration:0.8}}

style={{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
padding:"70px 40px",
background:"linear-gradient(135deg,#0a0a0a,#4fc3f7,#9b30ff)",
color:"white",
minHeight:"60vh"
}}
>

{/* LEFT CONTENT */}

<div style={{width:"55%"}}>

<h1 style={{fontSize:"50px",marginBottom:"20px"}}>
Manage your global employees
</h1>

<p style={{
fontSize:"18px",
lineHeight:"1.6",
marginBottom:"30px"
}}>
Streamline HR operations, track employee performance, and ensure compliance across multiple regions with an integrated workforce management platform.
</p>

<div style={{display:"flex",gap:"20px"}}>

<button
style={btnPrimary}
onClick={() => navigate("/dashboard/add-employee")}
>
Add Employee
</button>

<button style={btnOutline}>
Request a demo
</button>

</div>

</div>


{/* RIGHT SIDE */}

<div style={{width:"40%",textAlign:"center"}}>

<div style={{
width:"100%",
height:"300px",
background:"rgba(255,255,255,0.2)",
borderRadius:"20px",
display:"flex",
alignItems:"center",
justifyContent:"center",
overflow:"hidden"
}}>

<img
src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
alt="Laptop Dashboard"
style={{
width:"100%",
height:"100%",
objectFit:"cover",
borderRadius:"20px"
}}
/>

</div>

</div>

</motion.div>

</div>

</div>


{/* FOOTER */}

<Footer/>

</div>

);
}

const btnPrimary={
padding:"14px 30px",
background:"white",
color:"#0a0a0a",
border:"none",
borderRadius:"30px",
fontSize:"16px",
cursor:"pointer",
fontWeight:"bold"
};

const btnOutline={
padding:"14px 30px",
background:"transparent",
color:"white",
border:"2px solid white",
borderRadius:"30px",
fontSize:"16px",
cursor:"pointer",
fontWeight:"bold"
};

export default Dashboard;