var studentName = prompt("Enter your name")

var maths = +prompt("Enter your  maths marks")
var english = +prompt("Enter your english marks")
var urdu = +prompt("Enter your urdu marks")
var addMaths = +prompt("Enter  addmaths your marks")
var fsx = +prompt("Enter your fsx marks")

var obtainMarks = maths + english + urdu + addMaths + fsx
var totalMarks = 500

var percentage = (obtainMarks / totalMarks) * 100
var grade;

if (percentage >= 90) {
    grade = "A+"
}
else if (percentage >= 80) {
    grade = "A"
}
else if (percentage >= 70) {
    grade = "B"
}
else if (percentage >= 60) {
    grade = "C"
}
else if (percentage >= 55) {
    grade = "D"
}
else {
    grade = F
}


document.writeln(
    `
    <table border = '' width = "60%" align = "center">
        <tr>
            <th> Name </th>
            <th> MATHS </th>
            <th> ENGLISH </th>
            <th> URDU </th>
            <th> ADDMATHS </th>
            <th> FSX </th>
            <th> OBTAIN MARKS </th>
            <th> PERCENTAGE </th>
            <th> GRADE </th>
        </tr>

        <tr>
            <td> ${studentName} </td>
            <td> ${maths} </td>
            <td> ${english} </td>
            <td> ${urdu} </td>
            <td> ${addMaths} </td>
            <td> ${fsx} </td>
            <td> ${obtainMarks} / ${totalMarks} </td>
            <td> ${percentage}</td>
            <td> ${grade} </td>
        </tr>
    </table>
`
)
