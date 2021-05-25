function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");

  arrayOfPeople.forEach(element => {

    let personNameHeader = document.createElement("h1");
    personNameHeader.innerText = element.name;
    content.appendChild(personNameHeader);
    
    let personJobHeader = document.createElement("h2");
    personJobHeader.innerText = element.job;
    content.appendChild(personJobHeader);
  });

}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);



