// Write your solution in this file!
// Initializing the employee object
let employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
};

// Function to non-destructively update an employee with a key and value
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}

// Function to destructively update an employee with a key and value
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// Function to non-destructively delete a key from an employee
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

// Function to destructively delete a key from an employee
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

// Example usage:
let updatedEmployee = updateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Oak St");
console.log(updatedEmployee); // { name: 'John Doe', streetAddress: '456 Oak St' }
console.log(employee); // { name: 'John Doe', streetAddress: '123 Main St' }

destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "789 Pine St");
console.log(employee); // { name: 'John Doe', streetAddress: '789 Pine St' }

let deletedEmployee = deleteFromEmployeeByKey(employee, "name");
console.log(deletedEmployee); // { streetAddress: '789 Pine St' }
console.log(employee); // { name: 'John Doe', streetAddress: '789 Pine St' }

destructivelyDeleteFromEmployeeByKey(employee, "name");
console.log(employee); // { streetAddress: '789 Pine St' }
