const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");


/* ADD EMPLOYEE */
router.post("/", async (req,res)=>{

try{

const {name,department,role} = req.body;

if(!name || !department || !role){
return res.status(400).json({message:"All fields required"});
}

const employee = new Employee({
name,
department,
role
});

const savedEmployee = await employee.save();

res.status(201).json(savedEmployee);

}catch(error){

res.status(500).json({message:error.message});

}

});


/* GET EMPLOYEES */
router.get("/", async (req,res)=>{

try{

const employees = await Employee.find();

res.json(employees);

}catch(error){

res.status(500).json({message:error.message});

}

});

module.exports = router;