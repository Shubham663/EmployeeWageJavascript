const NO_TIME = 0;
const PART_TIME =1;
const FULL_TIME =2;
const PER_HOUR_WAGE = 20;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const MAX_HOURS_MONTH = 120;
const MAX_DAYS_MONTH = 20;
let workingDays = 0;
let employeeHours = 0;
let totalEmployeeHours = 0;
let monthlyWage = 0;
while(workingDays < MAX_DAYS_MONTH && totalEmployeeHours < MAX_HOURS_MONTH){
    let employeeType = Math.floor(Math.random()*10)%3;
    if(employeeType == 0)
        continue;
    employeeHours = getWorkHours(employeeType);
    totalEmployeeHours += employeeHours;
    let empWage = employeeHours*PER_HOUR_WAGE;
    monthlyWage += empWage;
    workingDays++;
}
console.log("Days: " + workingDays + " and Hours: " + totalEmployeeHours + " Employee Wage for the month: " + monthlyWage);



function getWorkHours(employeeType){
    let employeeHours = 0;
    switch(employeeType){
        case 1: employeeHours = PART_TIME_HOURS;
            break;
        case 2: employeeHours = FULL_TIME_HOURS;
            break;  
        default: employeeHours = 0;
            break;
    }
    return employeeHours;
}
