function goBack() {
    window.location.href = "dashboard.html";
}

document.getElementById("employeeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let department = document.getElementById("dept").value;
    let salary = document.getElementById("salary").value;
    let doj = document.getElementById("doj").value;

    let employee = {
        name: name,
        gender: gender,
        department: department,
        salary: salary,
        doj: doj
    };

    fetch("http://localhost:3000/employees", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employee)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Data not saved");
        }

        return response.json();
    })
    .then(data => {
        window.location.replace("dashboard.html");
    })
    .catch(error => {
        document.getElementById("message").textContent =
            "Error! Please check the server.";
    });
});