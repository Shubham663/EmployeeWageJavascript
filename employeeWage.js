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
let monthlyWage = 0;
let totalEmployeeHours = 0;
let employeeWageArray = new Array();
while(workingDays < MAX_DAYS_MONTH && totalEmployeeHours < MAX_HOURS_MONTH){
    let employeeType = Math.floor(Math.random()*10)%3;
    if(employeeType == 0)
        continue;
    employeeHours = getWorkHours(employeeType);
    totalEmployeeHours += employeeHours;
    let empWage = employeeHours*PER_HOUR_WAGE;
    employeeWageArray.push(empWage);
    workingDays++;
}

function sum(dailyWage){
    monthlyWage += dailyWage;
}

function monthlyWageReduce(total,dailyWageReduce){
    return total + dailyWageReduce;
}

counter = 0;
function daysToWages(dailyWage){
    counter++;
    return counter+" : "+dailyWage;
}

function fullTime(dayToWageMap){
    return dayToWageMap.includes("160");
}

function split(dayToWageMap){
    console.log("Day: " + dayToWageMap.substr(0,dayToWageMap.indexOf(':')));
}
employeeWageArray.forEach(sum);
let totalWageReduce = employeeWageArray.reduce(monthlyWageReduce,0);
console.log("Days: " + workingDays + " and Hours: " + totalEmployeeHours + " Employee Wage for the month using forEach: " + monthlyWage);
console.log("Days: " + workingDays + " and Hours: " + totalEmployeeHours + " Employee Wage for the month using reduce: " + totalWageReduce);
let dayWageMap = employeeWageArray.map(daysToWages);
console.log("Days for which employee worked full time");
dayWageMap.filter(fullTime).forEach(split);

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
