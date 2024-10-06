
// Task 1: Create a Department Structure

const company = { //Creating a company as an object
    departments : [ // Developing two departments as objects
        {
            departmentName: "Finance", // The marketing department has two employee arrays
            employees: [
                {
                    name: "Mar",
                    salary: 124800,
                    subordinates: [ // The first employee has one subordinate, and that subordinates has another employee
                        {
                            name: "Marisabel",
                            salary: 100000,
                            subordinates: [
                                {
                                    name: "Sara",
                                    salary: 80000,
                                    subordinates: [] //Empty array
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Melissa",
                    salary: 130000,
                    subordinates: [ //Second employee has one subordinate
                        {
                            name: "Michelle",
                            salary: 91000,
                            subordinates: [] //Empty array
                        }
                    ]
                }
            ]
        },
        {
            departmentName: "Marketing", //Second department is Finance, has two employees
            employees: [
                {
                    name: "Pilar",
                    salary: 124800,
                    subordinates: [ //Employee has one subordinate
                        {
                            name: "Alessandra",
                            salary: 100000,
                            subordinates: [] //Empty array 
                        }
                    ]
                },
                {
                    name: "Arianna",
                    salary: 85000,
                    subordinates: [ //Employee has one subordinate
                        {
                            name: "Fernanda",
                            salary: 100000,
                            subordinates: [] //Empty array 
                        }
                    ]
                }
            ]            
        }
    ]
}; // End of object

console.log(company) // Display object in console



// Task 2: Create a Recursive Function to Calculate Total Salary for a Department

function calculateDepartmentSalary(department) { // Created a function
    let totalSalary = 0; // Beginning Balance of total salary
    

    const calculateEmployeeSalary = (employee) => {
        totalSalary += employee.salary; // Sum employee's salary
        employee.subordinates.forEach(calculateEmployeeSalary); // Calculate subordinates' salaries.
    };

      department.employees.forEach(calculateEmployeeSalary); // In order to repeat this for each employee in a department

      return totalSalary; // Have a return of the sum of all employee's salary in each department.
};

company.departments.forEach(department => { //Run the function for each department
    const totalSalary = calculateDepartmentSalary(department);
    console.log(`The ${department.departmentName} department's total salary value is $${totalSalary}`) // Display in console
});



// Task 3: Create a Function to Calculate the Total Salary for All Departments

function calculateCompanySalary (company) { // Initialized function
    let companyTotalSalary = 0; // Beginning Balance of total salary for the company

    company.departments.forEach(department => {
        companyTotalSalary += calculateDepartmentSalary(department); // Sum of department salaries
    });
        return companyTotalSalary; // Return total company salary
};

const totalCompanySalary = calculateCompanySalary(company);
console.log(`The total salary for the entire company is $${totalCompanySalary}`); // Return 
