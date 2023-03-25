// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
 function returnFirstTwoDrivers(drivers){

    const result1 = (drivers.slice(0,2));
    return result1;
}
console.log(returnFirstTwoDrivers(drivers));
 function returnLastTwoDrivers(drivers){
    const result2 = drivers.slice(2,drivers.length);
    return result2;
}
console.log(returnLastTwoDrivers(drivers));
const selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers]
console.log(selectingDrivers);
    
function createFareMultiplier(fare){
    return fareQuintupler;
}
const fareQuintupler =fare => fare *fare;
function fareDoubler(num){
    return num *2;
}
function fareTripler(num){
    return num*3;
}
function selectDifferentDrivers(drivers,returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers);
}
console.log(selectDifferentDrivers);