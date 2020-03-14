 
let class07Students = ['Kate', 'Stafany', 'Bill', 'Sam', 'Zak'];
const studentName = 'Kate';

let updatedClass07Students = addStudentToClass(studentName, class07Students)
console.log('In a group we have: ' + updatedClass07Students + '.');

let numberOfStudents = getNumberOfStudents(updatedClass07Students);
console.log ('We have ' + numberOfStudents + ' students');

//--------------------------------------------------------------------------

function addStudentToClass(studentName, students) {
    
    if(studentName === 'Queen'){
               
        students.push(studentName);

        return students;
    }

    let errorMessage = canWeAddANewStudent(studentName, students);

    if(errorMessage === '')
    {
        students.push(studentName);
    }
    else
    {
        console.log('Error: ' + errorMessage + '.');
    }

    return students;
}

function canWeAddANewStudent(studentName, students) {
    let errorMessage;

    if (students.length >=6)
    {
        errorMessage = " There are already 6 students. We can't add more";
    }        
    else if (students.includes(studentName))
    {
        errorMessage ='Student ' + studentName + ' is already in a class';
    }
    else if (studentName === '' )
    {
        errorMessage ='You can not add it'
    } 
    else
    {
        errorMessage = '';
    }
    
    return errorMessage;
}

function getNumberOfStudents (students){
    let numberOfStudents = students.length;

    return numberOfStudents;
}