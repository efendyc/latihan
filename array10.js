const students = [
    {name: 'John', score: 50},
    {name: 'Jane', score: 72},
    {name: 'Mike', score: 69},
    {name: 'Emily', score: 85},
    {name: 'David', score: 94},
    {name: 'Sarah', score: 48},
];

const great_students = [];
const average_students = [];
const lazy_students = [];

for (let i = 0; i < students.length; i++) {
    const student = students[i];
    if (student.score >= 80) {
        great_students.push(student);
    } else if (student.score >= 60 && student.score < 80) {
        average_students.push(student);
    } else {
        lazy_students.push(student);
    }
}

console.log('Great students:', great_students);
console.log('Average students:', average_students);
console.log('Lazy students:', lazy_students);

output:
Great students: [ { name: 'Emily', score: 85 }, { name: 'David', score: 94 } ]
Average students: [ { name: 'Jane', score: 72 }, { name: 'Mike', score: 69 } ]
Lazy students: [ { name: 'John', score: 50 }, { name: 'Sarah', score: 48 } ]
