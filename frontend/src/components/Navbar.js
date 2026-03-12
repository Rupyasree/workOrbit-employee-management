import { useNavigate } from "react-router-dom";
import React from "react";
function Navbar(){

const navigate = useNavigate();

return(

<div style={{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
padding:"20px 60px",
color:"white"
}}>

<h2>WorkOribit</h2>

<div>

<button
onClick={()=>navigate("/login")}
style={{
marginRight:"10px",
padding:"8px 20px",
borderRadius:"6px",
border:"none",
cursor:"pointer"
}}
>
Login
</button>

<button
onClick={()=>navigate("/register")}
style={{
padding:"8px 20px",
borderRadius:"6px",
border:"none",
cursor:"pointer"
}}
>
Register
</button>

</div>

</div>

)

}

export default Navbar;