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
let monthlyWageMap = 0;
let totalEmployeeHours = 0;
let employeeWageArray = new Array();
let employeeHrsMap = new Map();
let dayToDailyWageMap = new Map();
let employeeDailyHrsAndWageArray = new Array();
let counterMap = 0;
while(workingDays < MAX_DAYS_MONTH && totalEmployeeHours < MAX_HOURS_MONTH){
    let employeeType = Math.floor(Math.random()*10)%3;
    if(employeeType == 0)
        continue;
    counterMap++;
    employeeHours = getWorkHours(employeeType);
    totalEmployeeHours += employeeHours;
    let empWage = employeeHours*PER_HOUR_WAGE;
    employeeDailyHrsAndWageArray.push(
        {
            dayNum : counterMap,
            dailyHours : employeeHours,
            dailyWage : empWage,
            toString(){
                return "\nDay: " + this.dayNum + " hours worked: " + this.dailyHours + " salary for day: " + this.dailyWage
            },
        }
    )
    employeeWageArray.push(empWage);
    dayToDailyWageMap.set(counterMap,empWage);
    employeeHrsMap.set(counterMap,employeeHours);
    workingDays++;
}

function sum(dailyWage){
    monthlyWage += dailyWage;
}

function sumMap(value,key){
    monthlyWageMap += value;
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

function fullTimeOccurence(dailyWage){
    return dailyWage.includes("160");
}

function partTimeOccurence(dailyWage){
    return dailyWage.includes("80");
}

employeeWageArray.forEach(sum);
let totalWageReduce = employeeWageArray.reduce(monthlyWageReduce,0);

//Total wage through reduce by getting array from map
// let totalWage = Array.from(dayToDailyWageMap.values()).reduce(monthlyWageReduce,0);

// **************************************************************************************************************************************************//
//***********************                    Arrow Function Applications                     **************************//

//Total wage through reduce, from array of objects created
let totalWage = employeeDailyHrsAndWageArray.reduce((total,value) => { return total + value.dailyWage},0);
console.log("Total Wage through array of objects: " + totalWage);

//day along with daily wage printing
console.log("Mapping of days to daily wage: ");
employeeDailyHrsAndWageArray.forEach(val => { console.log("Day: " + val.dayNum + " and day's Wage: " + val.dailyWage)});

//Full time wage 160
let fullTimeArrow = new Array();
employeeDailyHrsAndWageArray.forEach(val => {if(val.dailyWage == 160)
    fullTimeArrow.push(val.dayNum + " : " + val.dailyWage);
});
console.log("The days for which employee worked fulltime " + fullTimeArrow);

// First occurrence when full time wage was earned
console.log("The first day when employee worked full time: " + employeeDailyHrsAndWageArray.find(val => {return val.dailyWage == 160}).dayNum);

// Is every element truly holding full time wage
console.log("Does full time wage array contain only days when employee worked fulltime? " + fullTimeArrow.every(val => val.includes("160")));

//Is there any day when the employee worked part time
console.log("Did employee work part time on any of the days? " + ((employeeDailyHrsAndWageArray.find(val => {return val.dailyWage == 80})) != undefined)  )

let fullWorkingDays = new Array();
let halfWorkingDays = new Array();
employeeHrsMap.forEach((value,key) => {
    if(value == 8)
        fullWorkingDays.push(key);
    if(value == 4)
        halfWorkingDays.push(key);
});


// console.log("The values are: " + employeeDailyHrsAndWageArray);
console.log("Full working days: " + fullWorkingDays);
console.log("half working days: "+halfWorkingDays);

let stringPartTime = employeeDailyHrsAndWageArray.filter(value => value.dailyWage == 80).map(value => value.dayNum).reduce((total,val) => { return total + val + " "; }," ");
console.log("Part time days " + stringPartTime);
// ****************************            Arrow Functions End              *****************************************************************
// ********************************************************************************************************************************************




dayToDailyWageMap.forEach(sumMap);
console.log("Days: " + workingDays + " and Hours: " + totalEmployeeHours + " and Employee Wage for the month using map: " + monthlyWageMap);
// console.log("Days: " + workingDays + " and Hours: " + totalEmployeeHours + " Employee Wage for the month using forEach: " + monthlyWage);
// console.log("Days: " + workingDays + " and Hours: " + totalEmployeeHours + " Employee Wage for the month using reduce: " + totalWageReduce);
// let dayWageMap = employeeWageArray.map(daysToWages);
// let fullDayWageMap = dayWageMap.filter(fullTime);
// console.log("Days for which employee worked full time");
// dayWageMap.filter(fullTime).forEach(split);
// let firstFullDay = dayWageMap.find(fullTimeOccurence);
// console.log("First Day for which he worked full time " + firstFullDay.substr(0,firstFullDay.indexOf(':')));
// console.log("Did employee work part time on any day? " + (dayWageMap.find(partTimeOccurence) != undefined));

// console.log("Does full time wage contain days when employee worked full time only? " + fullDayWageMap.every(fullTime));

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
