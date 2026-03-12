let employees = [];

export const login = async () => {
return true;
};

export const getEmployees = () => {
return employees;
};

export const addEmployee = (employee) => {
employee.id = Date.now();
employees.push(employee);
};

export const deleteEmployee = (id) => {
employees = employees.filter(emp => emp.id !== id);
};

export const updateEmployee = (updatedEmployee) => {
employees = employees.map(emp =>
emp.id === updatedEmployee.id ? updatedEmployee : emp
);
};