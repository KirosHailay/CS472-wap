"use strict"
/*
author: kiros Gebregewergs
Problem requirment: to solve the problem using revealing module pattern
*/

const employee = (function() {
	var name, age, salary;
  
  function setAge(newAge) {
  		age = newAge;
  };
  
  function setSalary(newSalary) {
  	salary = newSalary;
  };
  
  function setName(newName) {
  	name = newName;
  };
  
  function getAge() {
  	return age;
  };
  
  function getSalary() {
  	return salary;
  };
  
  function getName() {
  		return name;
  };
  
  function increaseSalary(percentage) { 
  	
    // using private method then setSalary
  	 let current  = getSalary();
     // I could have assinged it directly but let's try this way
     let newSalary = current + current * percentage;
     setSalary(newSalary);
  };
  
  function incrementAge() {
  		let current = getAge();
      age = current + 1;
  };
  return  {
  	setAge: setAge,
    setName: setName,
    setSalary: setSalary,
    increaseSalary: increaseSalary,
    incrementAge: incrementAge
  }
  
})();
// adding public address property 
employee.address = "address";

// adding public method
employee.setAddress = function(newAddress) {
		employee.address = newAddress;
}

// adding public method
employee.getAddress = function() {
	return employee.address;
}

