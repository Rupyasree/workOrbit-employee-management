import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

function Login() {

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const navigate = useNavigate();

const handleSubmit=(e)=>{
e.preventDefault();
navigate("/dashboard");
}

return(

<div style={{
height:"100vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
position:"relative",
overflow:"hidden"
}}>

{/* Spline Background */}
<iframe
src="https://my.spline.design/projectpromolookatmouse-lfzk4OvPbVJMxbjA6DkccfML/"
frameBorder="0"
width="100%"
height="100%"
style={{
position:"absolute",
top:0,
left:0,
zIndex:-1
}}
title="Spline Background"
/>

<form
onSubmit={handleSubmit}
style={{
background:"rgba(255,255,255,0.3)",
padding:"40px",
width:"340px",
borderRadius:"12px",
boxShadow:"0 10px 30px rgba(0,0,0,0.2)",
backdropFilter:"blur(10px)"
}}
>

<h2 style={{
textAlign:"center",
marginBottom:"20px"
}}>
Admin Login
</h2>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
style={{
width:"100%",
padding:"10px",
marginTop:"10px",
border:"1px solid #ccc",
borderRadius:"6px"
}}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
style={{
width:"100%",
padding:"10px",
marginTop:"15px",
border:"1px solid #ccc",
borderRadius:"6px"
}}
/>

<button
style={{
width:"100%",
marginTop:"20px",
padding:"12px",
  background: "linear-gradient(45deg,#4facfe,#00f2fe)",
color:"white",
border:"none",
borderRadius:"6px",
cursor:"pointer",
fontWeight:"bold"
}}
>
Login
</button>

</form>

</div>

)

}

export default Login;