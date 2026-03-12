import axios from "axios";

const API = axios.create({
 baseURL:"http://localhost:5000/api"
});

export const login = (data)=>API.post("/login",data);
export const register = (data)=>API.post("/register",data);

export const getEmployees = ()=>API.get("/employees");
export const addEmployee = (data)=>API.post("/employees",data);
export const deleteEmployee = (id)=>API.delete(`/employees/${id}`);