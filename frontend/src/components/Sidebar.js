import { useNavigate } from "react-router-dom";
import React from "react";

function Sidebar(){

const navigate = useNavigate();

return(

<div style={{
width:"220px",
background:"#2f3542",
color:"white",
padding:"20px"
}}>

<h3>Admin</h3>

<p style={menu} onClick={()=>navigate("/dashboard/add-employee")}>
Add Employee
</p>

<p style={menu} onClick={()=>navigate("/dashboard/employees")}>
Employees
</p>

<p style={menu}>
Logout
</p>

</div>

)

}

const menu={
marginTop:"20px",
cursor:"pointer"
}

export default Sidebar;