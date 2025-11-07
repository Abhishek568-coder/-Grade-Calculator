function calculateGrade() {
    let s1 = Number(prompt("Enter marks for Subject 1:"));
    let s2 = Number(prompt("Enter marks for Subject 2:"));
    let s3 = Number(prompt("Enter marks for Subject 3:"));
    let s4 = Number(prompt("Enter marks for Subject 4:"));
    let s5 = Number(prompt("Enter marks for Subject 5:"));

    let total = s1 + s2 + s3 + s4 + s5;
    let average = total / 5;
    let grade;

    if (average >= 90) {
        grade = "A+";
    } else if (average >= 80 && average <= 89) {
        grade = "A";
    } else if (average >= 70 && average <= 79) {
        grade = "B";
    } else if (average >= 60 && average <= 69) {
        grade = "C";
    } else if (average >= 50 && average <= 59) {
        grade = "D";
    } else {
        grade = "F";
    }

    alert("Total Marks: " + total +
          "\nAverage Marks: " + average.toFixed(2) +
          "\nGrade: " + grade);
}
