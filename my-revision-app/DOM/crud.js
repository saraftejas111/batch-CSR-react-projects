// optimized file for crud 
let employees = [

    {
        id: 101,
        name: "Rahul",
        salary: 45000
    },

    {
        id: 102,
        name: "Priya",
        salary: 52000
    },

    {
        id: 103,
        name: "Amit",
        salary: 61000
    },

    {
        id: 104,
        name: "Sneha",
        salary: 48000
    },

    {
        id: 105,
        name: "Karan",
        salary: 70000
    }

];

const tbody = document.getElementById("tbody");

const idInput = document.getElementById("id");
const nameInput = document.getElementById("name");
const salaryInput = document.getElementById("salary");
const saveBtn = document.getElementById("saveBtn");

let editId = null;

renderEmployees();



function renderEmployees() {

    let rows = "";

    employees.forEach(emp => {

        rows += `

        <tr>

            <td>${emp.id}</td>

            <td>${emp.name}</td>

            <td>${emp.salary}</td>

            <td>

                <button class="delete"
                    onclick="deleteEmployee(${emp.id})">

                    Delete

                </button>

            </td>

            <td>

                <button class="edit"
                    onclick="editEmployee(${emp.id})">

                    Edit

                </button>

            </td>

        </tr>

        `;

    });

    tbody.innerHTML = rows;

}



function getEmployeeFromForm() {

    return {

        id: Number(idInput.value),

        name: nameInput.value.trim(),

        salary: Number(salaryInput.value)

    };

}



function clearForm() {

    idInput.value = "";
    nameInput.value = "";
    salaryInput.value = "";

    editId = null;

    saveBtn.innerHTML = "Add Employee";

}



function saveEmployee() {

    let emp = getEmployeeFromForm();

    if (emp.id == "" || emp.name == "" || emp.salary == "") {

        alert("Fill all fields");

        return;

    }

    if (editId === null) {

        let exists = employees.find(e => e.id === emp.id);

        if (exists) {

            alert("Employee ID already exists");

            return;

        }

        employees.push(emp);

    }

    else {

        employees = employees.map(e =>

            e.id === editId ? emp : e

        );

    }

    renderEmployees();

    clearForm();

}



function deleteEmployee(id) {

    employees = employees.filter(e => e.id !== id);

    renderEmployees();

}



function editEmployee(id) {

    let emp = employees.find(e => e.id === id);

    idInput.value = emp.id;
    nameInput.value = emp.name;
    salaryInput.value = emp.salary;

    editId = id;

    saveBtn.innerHTML = "Update Employee";

}