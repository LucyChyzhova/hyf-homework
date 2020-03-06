//Flight booking fullname function


const returnedGetFullname = getFullname ('Benjamin','Hughes', true);
console.log (returnedGetFullname)

function getFullname(firstname, lastName, userFormalName){
    let formalName;
    if(userFormalName) 
    {
        formalName = 'Lord ' + firstname + " " + lastName;
    }
    else 
    {
        formalName = firstname + " " + lastName;
    }

    return formalName;
} 





