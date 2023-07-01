// Your code here
// Create employee record from array
function createEmployeeRecord(arr) {
    return {
      firstName: arr[0],
      familyName: arr[1],
      title: arr[2],
      payPerHour: arr[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  }
  
  // Create employee records from array of arrays
  function createEmployeeRecords(arr) {
    return arr.map(createEmployeeRecord);
  }
  
  // Create timeIn event for an employee
  function createTimeInEvent(employee, dateTime) {
    let [date, hour] = dateTime.split(' ');
  
    employee.timeInEvents.push({
      type: 'TimeIn',
      date: date,
      hour: parseInt(hour, 10)
    });
  
    return employee;
  }
  
  // Create timeOut event for an employee
  function createTimeOutEvent(employee, dateTime) {
    let [date, hour] = dateTime.split(' ');
  
    employee.timeOutEvents.push({
      type: 'TimeOut',
      date: date,
      hour: parseInt(hour, 10)
    });
  
    return employee;
  }
  
  // Calculate hours worked on a specific date
  function hoursWorkedOnDate(employee, date) {
    let timeIn = employee.timeInEvents.find(event => event.date === date).hour;
    let timeOut = employee.timeOutEvents.find(event => event.date === date).hour;
  
    return (timeOut - timeIn) / 100;
  }
  
  // Calculate wages earned on a specific date
  function wagesEarnedOnDate(employee, date) {
    let hoursWorked = hoursWorkedOnDate(employee, date);
    return hoursWorked * employee.payPerHour;
  }
  
  // Calculate all wages for an employee
  function allWagesFor(employee) {
    let dates = employee.timeInEvents.map(event => event.date);
    let wages = dates.map(date => wagesEarnedOnDate(employee, date));
    return wages.reduce((total, wage) => total + wage, 0);
  }
  
  // Calculate payroll for all employees
  function calculatePayroll(employees) {
    return employees.reduce((total, employee) => total + allWagesFor(employee), 0);
  }
  
  module.exports = {
    createEmployeeRecord,
    createEmployeeRecords,
    createTimeInEvent,
    createTimeOutEvent,
    hoursWorkedOnDate,
    wagesEarnedOnDate,
    allWagesFor,
    calculatePayroll
  };
  