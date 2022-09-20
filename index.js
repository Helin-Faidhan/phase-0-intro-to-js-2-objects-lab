const employee = {
    name:"sam" ,
   streetAddress:"11 Broadway"
    }
function updateEmployeeWithKeyAndValue(employee, key, value)  {

    
    const newemployee = {
        ...employee
   }
 newemployee[key] = value;
 return newemployee;
 }

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
        return employee;
    }
    
    
 const newemployee =(employee, "streetAddress", "12 Broadway");


function deleteFromEmployeeByKey(employee,key){
const newObj2 = {...employee[key]}
delete newObj2[key]
return newObj2}

 function destructivelyDeleteFromEmployeeByKey(employee, key) {

delete employee[key];
return employee;
}



 
 
  

  


