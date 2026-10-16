const students = [
    {name: 'John', score: 50},
    {name: 'Jane', score: 72},
    {name: 'Mike', score: 69},
    {name: 'Emily', score: 85},
    {name: 'David', score: 94},
    {name: 'Sarah', score: 48},
];

const A_students = students.filter(student => student.score >= 80);
const B_students = students.filter(student => student.score >= 70 && student.score < 80);
const C_students = students.filter(student => student.score >= 60 && student.score < 70);
const D_students = students.filter(student => student.score >= 50 && student.score < 60);
const F_students = students.filter(student => student.score < 50);

console.log('A students:', A_students);
console.log('B students:', B_students);
console.log('C students:', C_students);
console.log('D students:', D_students);
console.log('F students:', F_students);

output:
A students: [ { name: 'Emily', score: 85 }, { name: 'David', score: 94 } ]
B students: [ { name: 'Jane', score: 72 } ]
C students: [ { name: 'Mike', score: 69 } ]
D students: [ { name: 'John', score: 50 } ]
F students: [ { name: 'Sarah', score: 48 } ]
