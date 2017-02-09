var atticus = { name: "Atticus", employeeNumber: "2405", annualSalary: "47000", reviewRating: 3 };
var jem = { name: "Jem", employeeNumber: "62347", annualSalary: "63500", reviewRating: 4 };
var boo = { name: "Boo", employeeNumber: "11435", annualSalary: "54000", reviewRating: 3 };
var scout = { name: "Scout", employeeNumber: "6243", annualSalary: "74750", reviewRating: 5 };
var robert = { name: "Robert", employeeNumber: "26835", annualSalary: "66000", reviewRating: 1 };
var mayella = { name: "Mayella", employeeNumber: "89068", annualSalary: "35000", reviewRating: 2 };

var employees = [ atticus, jem, boo, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT


function bonusCalculator(employeeArray){
  for (var i = 0; i < employeeArray.length; i++) {
    var employee = employeeArray[i]

    var bonusPercent = 0;
    if(employee.reviewRating<=2) {
      bonusPercent = 0;
    }else if (employee.reviewRating == 3) {
      bonusPercent += 4;
    } else if (employee.reviewRating == 4) {
      bonusPercent += 6;
    }else if (employee.reviewRating == 5) {
      bonusPercent += 10;
    }

    if(employee.employeeNumber.length == 4){
      bonusPercent += 5;
    }

    if(Number(employee.annualSalary)> 65000){
      bonusPercent-= 1;
    }

    if(bonusPercent>13){
      bonusPercent =13;
    } else if (bonusPercent<0 ){
      bonusPercent=0;
    }
    var bonusAmount = parseInt((bonusPercent / 100) * employee.annualSalary);
    var compTotal = Number(employee.annualSalary) + bonusAmount;
    employee.bonusPercentage = bonusPercent;
    employee.totalBonus = bonusAmount;
    employee.totalCompensation = compTotal;
  }
  return employeeArray;
}

employees = bonusCalculator(employees);
console.log(employees);

var employeeList = '';

for (var i = 0; i < employees.length; i++) {
  employeeList = employeeList + 'Name: ' + employees[i].name + '<br>' + " Employee #: " + employees[i].employeeNumber+ '<br>' + ' Base Salary: '+ employees[i].annualSalary+ ' Review Rating: ' + employees[i].reviewRating + ' Bonus %: ' + employees[i].bonusPercentage + ' Total Bonus: ' + employees[i].totalBonus + ' Total Compensation: ' + employees[i].totalCompensation + '<br>' + '<br>';
}

var employeeHeading = document.getElementById("employees");
employeeHeading.innerHTML = employeeList;
