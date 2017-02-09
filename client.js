var atticus = { name: "Atticus", employeeNumber: "2405", annualSalary: "47000", reviewRating: 3 };
var jem = { name: "Jem", employeeNumber: "62347", annualSalary: "63500", reviewRating: 4 };
var boo = { name: "Boo", employeeNumber: "11435", annualSalary: "54000", reviewRating: 3 };
var scout = { name: "Scout", employeeNumber: "6243", annualSalary: "74750", reviewRating: 5 };
var robert = { name: "Robert", employeeNumber: "26835", annualSalary: "66000", reviewRating: 1 };
var mayella = { name: "Mayella", employeeNumber: "89068", annualSalary: "35000", reviewRating: 2 };

var employees = [ atticus, jem, boo, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT


function BonusCalculator(employeeObject){
  var bonusPercent = 0;
  if(employeeObject.reviewRating<=2) {
    bonusPercent = 0;
  }else if (employeeObject.reviewRating == 3) {
    bonusPercent += 4;
  } else if (employeeObject.reviewRating == 4) {
    bonusPercent += 6;
  }else if (employeeObject.reviewRating == 5) {
    bonusPercent += 10;
  }

  if(employeeObject.employeeNumber.length == 4){
    bonusPercent += 5;
  }

  if(Number(employeeObject.annualSalary)> 65000){
    bonusPercent-= 1;
  }

  if(bonusPercent>13){
    bonusPercent =13;
  } else if (bonusPercent<0 ){
    bonusPercent=0;
  }
var bonusAmount = parseInt((bonusPercent / 100) * employeeObject.annualSalary);
var compTotal = Number(employeeObject.annualSalary) + bonusAmount;
  this.name = employeeObject.name;
  this.bonusPercentage = bonusPercent;
  this.totalBonus = bonusAmount;
  this.totalCompensation = compTotal;

}



// var scoutsBonusThing = new BonusCalculator(scout);
//
// console.log(scoutsBonusThing);

var employeesBonuses={};

for (var i = 0; i < employees.length; i++) {
  employeesBonuses.push(new BonusCalculator(employees[i]));
}
console.log(employeesBonuses);
