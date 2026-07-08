// console.log("hello JS");

// let one = document.querySelector("h1");
// console.log(one.innerHTML);

// let count = 0 ;
// function changeh1() {
//     count++ ;
//   one.innerHTML = "Hi to h1 from JS..."+count
// }

// // tag-tagname , id-#idname  , class- .className

// let two = document.querySelector("#two");

// console.log(two.innerText);
// console.log(two.id); //

// // let th = document.querySelector('#three')

// let th = document.getElementById("three");

// console.log("by getElementById --> ", th.innerHTML);

// let f = document.querySelector(".four");

// console.log(f.innerHTML);

// function greet() {
//   console.log("Hello From Greet.. ");
// }

// validation
function checkLogin() {
  let u = document.querySelector("#uname");
  let p = document.querySelector("#pass");
  let m = document.getElementById("msg");

  if (u.value == "tejas" && p.value == "tka") {
    m.innerHTML = "Login Success";
    m.style.color = "blue";
  } else {
    m.innerHTML = "Login Failed";
    m.style.color = "";
  }
}

let employees = [
  {
    id: 101,
    name: "Rahul",
    salary: 45000,
  },
  {
    id: 102,
    name: "Priya",
    salary: 52000,
  },
  {
    id: 103,
    name: "Amit",
    salary: 61000,
  },
  {
    id: 104,
    name: "Sneha",
    salary: 48000,
  },
  {
    id: 105,
    name: "Karan",
    salary: 70000,
  },
];

let tbody = document.getElementById("tbody");

employees.map((e) => {
  tbody.innerHTML += `<tr key=${e.id}>
    
    <td>${e.id}</td>
    <td>${e.name}</td>
    <td>${e.salary}</td>
    <td>
     <button type="button" onclick="deleteById(${e.id})">Delete</button>
    </td>

     <td>
     <button type="button" onclick="updateEmployee(${e.id})">Update</button>
    </td>
    
    </tr>`;
});

function deleteById(id) {
  console.log("deleted id --> ", id);

  const newData = employees.filter((e) => e.id !== id);

  tbody.innerHTML = "";

  employees = newData;

  employees.map((e) => {
    tbody.innerHTML += `<tr key=${e.id}>
    
    <td>${e.id}</td>
    <td>${e.name}</td>
    <td>${e.salary}</td>
    <td>
     <button type="button" onclick="deleteById(${e.id})">Delete</button>
    </td>
    <td>
     <button type="button" onclick="updateEmployee(${e.id})">Update</button>
    </td>
    
    </tr>`;
  });
}

function addEmployee() {
  let id = document.getElementById("id");
  let name = document.getElementById("name");
  let salary = document.getElementById("salary");

  let emp = { id: id.value, name: name.value, salary: salary.value };

  newList = [...employees, emp];

  tbody.innerHTML = "";

  employees = newList;

  employees.map((e) => {
    tbody.innerHTML += `<tr key=${e.id}>
    
    <td>${e.id}</td>
    <td>${e.name}</td>
    <td>${e.salary}</td>
    <td>
     <button type="button" onclick="deleteById(${e.id})">Delete</button>
    </td>
     <td>
     <button type="button" onclick="updateEmployee(${e.id})">Update</button>
    </td>
    
    </tr>`;
  });
}

function updateEmployee(empId) {
  let id = document.getElementById("id");
  let name = document.getElementById("name");
  let salary = document.getElementById("salary");

  const toBeUpdate = employees.find((e) => e.id === empId);

  console.log(toBeUpdate);

  id.value = toBeUpdate.id;
  name.value = toBeUpdate.name;
  salary.value = toBeUpdate.salary;

  employees = employees.filter((e) => e.id !== empId);
}
