let students = [];

function addStudent() {

    let roll = document.getElementById("roll").value;
    let name = document.getElementById("name").value;

    if (roll === "" || name === "") {
        alert("Please enter all details");
        return;
    }

    if (students.some(student => student.roll === roll)) {
        alert("Student already exists");
        return;
    }

    students.push({
        roll: roll,
        name: name,
        present: 0,
        absent: 0
    });

    displayStudents();

    document.getElementById("roll").value = "";
    document.getElementById("name").value = "";
}

function markAttendance(index, status) {

    if (status === "P") {
        students[index].present++;
    } else {
        students[index].absent++;
    }

    displayStudents();
}

function displayStudents() {

    let output = "";

    students.forEach((student, index) => {

        let total = student.present + student.absent;

        let percentage = total === 0
            ? 0
            : (student.present / total) * 100;

        output += `
            <tr>
                <td>${student.roll}</td>
                <td>${student.name}</td>
                <td>
                    <button onclick="markAttendance(${index}, 'P')">Present</button>
                    <button onclick="markAttendance(${index}, 'A')">Absent</button>
                </td>
                <td>${percentage.toFixed(2)}%</td>
            </tr>
        `;
    });

    document.getElementById("studentList").innerHTML = output;
}