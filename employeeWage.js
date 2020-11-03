const NO_TIME = 0;
const PART_TIME =1;
const FULL_TIME =2;
const PER_HOUR_WAGE = 20;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
let employeeHours = 0;
employeeType = Math.floor(Math.random()*10)%3;
switch(employeeType){
    case 1: employeeHours = PART_TIME_HOURS;
            break;
    case 2: employeeHours = FULL_TIME_HOURS;
            break;
    default: employeeHours = 0;
            break;
}
let empWage = employeeHours*PER_HOUR_WAGE;
console.log("Employee Wage : " + empWage);
