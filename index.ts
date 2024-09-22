// Define an interface for the Person object
interface Person {
    id: number;
    name: string;
    birthdate: string;
    children: number;
    country: string;
    can_program: boolean;
}

// Create an array of people
const people: Person[] = [
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

function calculateAge(birthdate): number {
    const birthDate = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

// Function to display content in the DOM
function displayToDOM(content: string) {
    const outputDiv = document.getElementById("output");
    if (outputDiv) {
        const paragraph = document.createElement("p");
        paragraph.textContent = content;
        outputDiv.appendChild(paragraph);
    }
}

//1. Display how many children each person has
for (const person of people) {
    displayToDOM(`${person.name} has ${person.children} children`);
}

//2. Display name and age of each person
for (const person of people) {
    const age = calculateAge(person.birthdate);
    displayToDOM(`${person.name}: ${age} years old`);
}

//3. Display all properties of each person using for…in
for (const person of people) {
    displayToDOM(`\nProperties of ${person.name}:`);
    for (const key in person) {
        if (person.hasOwnProperty(key)) {
            displayToDOM(`${key}: ${person[key as keyof Person]}`);
        }
    }
}
