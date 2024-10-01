
// Task 1: Create a Department Structure

const company = { //Creating a company as an object
    departments : [ // Developing two departments as objects
        {
            departmentName: 'Marketing', // The marketing department has two employee arrays
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
            departmentName: "Finance", //Second department is Finance, has two employees
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

console.log(company)