type Employee = {
    id: number,
    name: string,
    department: string,
    salary: number,
    employmentType: "Full-Time" | "Part-Time",
    getDetails(): void
}

type Company = {
    name: string,
    location: string,
    employees: Employee[],
    getTotalSalary(): {fullTime: number, partTime: number}
}

const employee1: Employee = {
    id: 1,
    name: "Andrei Alejandro",
    department: "IT",
    salary: 30000,
    employmentType: "Full-Time",
    getDetails() {
        console.log(`
        Employee ID: ${this.id} 
        Name: ${this.name}
        Department: ${this.department} 
        Salary: ${this.salary} 
        Employment Type: ${this.employmentType}
        `)
    }
}

const employee2: Employee = {
    id: 2,
    name: "Jane Smith",
    department: "Marketing",
    salary: 60000,
    employmentType: "Part-Time",
    getDetails() {
        console.log(`
        Employee ID: ${this.id} 
        Name: ${this.name}
        Department: ${this.department} 
        Salary: ${this.salary} 
        Employment Type: ${this.employmentType}
        `)
    }
}

const company: Company = {
    name: "Accenture",
    location: "BGC",
    employees: [employee1, employee2],
    getTotalSalary() {
        let fullTime = 0;
        let partTime = 0;

        for(const employee of this.employees) {
            if(employee.employmentType === "Full-Time") {
                fullTime += employee.salary;
            }

            else{
                partTime += employee.salary;
            }
        }
        return {fullTime, partTime};
    }
}

employee1.getDetails();
employee2.getDetails();

const salaryOutput = company.getTotalSalary();

console.log(`The Full time salary: ${salaryOutput.fullTime}`);
console.log(`The Part time salary: ${salaryOutput.partTime}`);

