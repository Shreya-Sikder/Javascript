const student = {
    name: "shreya",
    age: 23,
    cgpa: 3.5,
    isPassed: true

};
//typeof student "object"
console.log(student["age"]);// 23
//or
console.log(student.age);// 23

console.log(student.name);// shreya
console.log(student.cgpa);// 3.5
console.log(student.isPassed);// true

student.age = student.age + 1; // object's key can be updated 
console.log(student.age);// 24