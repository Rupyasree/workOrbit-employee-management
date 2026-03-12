import React from "react";
function Register(){

return(

<div style={{
height:"100vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
background:"#f4f6f9"
}}>

<div style={{
background:"white",
padding:"40px",
width:"340px",
borderRadius:"10px",
boxShadow:"0 4px 15px rgba(0,0,0,0.1)"
}}>

<h2 style={{textAlign:"center"}}>Register</h2>

<input placeholder="Name" style={inputStyle}/>
<input placeholder="Email" style={inputStyle}/>
<input placeholder="Password" style={inputStyle}/>

<button style={btnStyle}>
Register
</button>

</div>

</div>

)

}

const inputStyle={
width:"100%",
padding:"10px",
marginTop:"15px",
border:"1px solid #ccc",
borderRadius:"6px"
}

const btnStyle={
width:"100%",
marginTop:"20px",
padding:"10px",
background:"#5f6caf",
color:"white",
border:"none",
borderRadius:"6px",
cursor:"pointer"
}

export default Register;