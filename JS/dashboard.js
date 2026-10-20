function openForm() {
    window.location.href = "form.html";
}

function showEmployees() {
    fetch("http://localhost:3000/employees")
        .then(response => response.json())
        .then(data => {
            let table = document.getElementById("employeeList");

            table.innerHTML = "";

            data.forEach(employee => {
                let tr = document.createElement("tr");

                let values = [
                    employee.name,
                    employee.gender,
                    employee.department,
                    employee.salary,
                    employee.doj
                ];

                values.forEach(value => {
                    let td = document.createElement("td");
                    td.textContent = value;
                    tr.appendChild(td);
                });

                table.appendChild(tr);
            });
        });
}

showEmployees();