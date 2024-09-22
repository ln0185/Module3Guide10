// Create an array of people
var people = [
    { id: 1, name: "Quentin Guile", birthdate: "1/6/1981", children: 0, country: "Portugal", can_program: false },
    { id: 2, name: "Corabelle Panner", birthdate: "7/8/2001", children: 3, country: "Czech Republic", can_program: true },
    { id: 3, name: "Smith Limpkin", birthdate: "8/16/1970", children: 3, country: "Moldova", can_program: true },
    { id: 4, name: "Katti Langlands", birthdate: "6/4/1960", children: 5, country: "United States", can_program: true },
    { id: 5, name: "Betteann Westmore", birthdate: "12/22/1992", children: 5, country: "Zambia", can_program: false },
    { id: 6, name: "Dora Ballin", birthdate: "9/28/1966", children: 5, country: "Canada", can_program: true },
    { id: 7, name: "Cecil Sneesbie", birthdate: "1/13/1987", children: 3, country: "Venezuela", can_program: true },
    { id: 8, name: "Hope Gauld", birthdate: "7/11/1953", children: 3, country: "Brazil", can_program: false },
    { id: 9, name: "Rabi Graeme", birthdate: "12/6/1996", children: 3, country: "Brazil", can_program: true },
    { id: 10, name: "Jareb Kliement", birthdate: "5/29/1961", children: 5, country: "Russia", can_program: false }
];
function calculateAge(birthdate) {
    var birthDate = new Date(birthdate);
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
// Function to display content in the DOM
function displayToDOM(content) {
    var outputDiv = document.getElementById("output");
    if (outputDiv) {
        var paragraph = document.createElement("p");
        paragraph.textContent = content;
        outputDiv.appendChild(paragraph);
    }
}
//1. Display how many children each person has
for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
    var person = people_1[_i];
    displayToDOM("".concat(person.name, " has ").concat(person.children, " children"));
}
//2. Display name and age of each person
for (var _a = 0, people_2 = people; _a < people_2.length; _a++) {
    var person = people_2[_a];
    var age = calculateAge(person.birthdate);
    displayToDOM("".concat(person.name, ": ").concat(age, " years old"));
}
//3. Display all properties of each person using for…in
for (var _b = 0, people_3 = people; _b < people_3.length; _b++) {
    var person = people_3[_b];
    displayToDOM("\nProperties of ".concat(person.name, ":"));
    for (var key in person) {
        if (person.hasOwnProperty(key)) {
            displayToDOM("".concat(key, ": ").concat(person[key]));
        }
    }
}
