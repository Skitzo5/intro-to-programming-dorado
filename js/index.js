
/* Mentors Version
let today = new Date();
const today_year = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
const myName = "Louie";
copyright.innerHTML = myName + " " + today_year;
footer.appendChild(copyright);
*/


const today = new Date();
const thisYear = today.getFullYear();
const myName = "Louie";
console.log(thisYear);

//this will select the "footer" in the document
const footer = document.querySelector("footer");

//this will create a new paragraph in the document and store it in variable
const copyright = document.createElement("p");

//set the inner HTML to the copyright element previously created to display my name and year
//document.querySelector("footer").innerHTML = "©" + thisYear + "Louie Mendoza";

//Using "DOM Manipulation", append the copyright element to the footer
//document.appendChild(copyright);
copyright.innerHTML = `Louie Mendoza &copy ${thisYear} &#9835`;
footer.appendChild(copyright);

const skills = [
    "HTML",
    "CSS",
    "NODE.JS",
    "Musician",
];

const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}












