var employee1 = {
    id: 1,
    name: "Andrei Alejandro",
    department: "IT",
    salary: 30000,
    employmentType: "Full-Time",
    getDetails: function () {
        console.log("\n        Employee ID: ".concat(this.id, " \n        Name: ").concat(this.name, "\n        Department: ").concat(this.department, " \n        Salary: ").concat(this.salary, " \n        Employment Type: ").concat(this.employmentType, "\n        "));
    }
};
var employee2 = {
    id: 2,
    name: "Jane Smith",
    department: "Marketing",
    salary: 60000,
    employmentType: "Part-Time",
    getDetails: function () {
        console.log("\n        Employee ID: ".concat(this.id, " \n        Name: ").concat(this.name, "\n        Department: ").concat(this.department, " \n        Salary: ").concat(this.salary, " \n        Employment Type: ").concat(this.employmentType, "\n        "));
    }
};
var company = {
    name: "Accenture",
    location: "BGC",
    employees: [employee1, employee2],
    getTotalSalary: function () {
        var fullTime = 0;
        var partTime = 0;
        for (var _i = 0, _a = this.employees; _i < _a.length; _i++) {
            var employee = _a[_i];
            if (employee.employmentType === "Full-Time") {
                fullTime += employee.salary;
            }
            else {
                partTime += employee.salary;
            }
        }
        return { fullTime: fullTime, partTime: partTime };
    }
};
employee1.getDetails();
employee2.getDetails();
var salaryOutput = company.getTotalSalary();
console.log("The Full time salary: ".concat(salaryOutput.fullTime));
console.log("The Part time salary: ".concat(salaryOutput.partTime));
