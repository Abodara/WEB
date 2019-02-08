window.addEventListener("load", main);
var people =[{firstname:'firstname', 
	lastname:'lastname',
	age:'age', 
	address:'address',
	job:'job',
	telephoneNumber:'number'
}];
function randRage(min,max){
	return Math.floor(Math.random()*(max-min))+min;
}
function main(){
	console.log("test?");
	var fourmis = 98;
	var table = document.createElement("table");
	for (var i = 0; i < fourmis; i++) {
		
		var person = {firstname:faker.fake("{{name.lastName}}"), 
					lastname:faker.fake("{{name.lastName}}"),
					age:randRage(15,250),
					address:faker.fake("{{address.streetAddress}}"),
					job:faker.fake("{{name.jobTitle}}"),
					telephoneNumber:faker.fake("{{phone.phoneNumber}}")
					};
					people.push(person);
	}
	for(var i = 0; i < people.length; i++){
		var line = document.createElement("tr");
		for (caracteristc in people[i]) {
			var bug = document.createElement("td");
			bug.textContent = people[i][caracteristc];
			bug.style.border = "1px solid orange";
			line.appendChild(bug);
		}
		table.appendChild(line);
	}
	
	document.body.appendChild(table);

}
