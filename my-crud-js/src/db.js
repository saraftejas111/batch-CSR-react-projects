let employees = [
  { id: 101, name: "raj", role: "dev", salary: 123456 },
  { id: 102, name: "tina", role: "dev", salary: 123456 },
];

export const showAllEmployees = () => employees;

export const deleteByID = (id) => {
  const newList = employees.filter((e) => e.id != id);
  employees = newList;
};

export const addEmployee = (emp) => {
  const empFound = employees.find((e) => e.id == emp.id);

  if (empFound) {
    alert("ID already Exists");
  } else {
    employees = [...employees, emp];
  }
};

export const updateById = (id, emp) => {
  const newList = employees.filter((e) => e.id != id);
  employees = [...newList, emp];
};
