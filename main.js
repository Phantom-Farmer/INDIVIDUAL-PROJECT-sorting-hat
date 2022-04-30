const hogHouses = ['G', 'H', 'R', 'S']

const students = [
  {
    id: 1,
    name: "Robby",
    location: "Gryffindor",
    enlisted: true
  },

  {
    id: 2,
    name: "T-Dog",
    location: "Hufflepuff",
    enlisted: true
  },

  {
    id: 3,
    name: "Eliza",
    location: "Ravenclaw",
    enlisted: true
  },

  {
    id: 4,
    name: "Hazel",
    location: "Slytherin",
    enlisted: false
  },

];


const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

const cardsOnDom = (students) => {
  let domString = "";
  for (const student of students) {
    const gryffindorType = student.location === "Gryffindor";
    const hufflepuffType = student.location === "Hufflepuff";
    const ravenclawType = student.location === "Ravenclaw";
    const slytherinType = student.location === "Slytherin"
   domString += `<div class="card">
   <div class="card-header">School of Magick</div>
   <div class="card-body">
     <h5 class="card-title">${student.name}</h5>
     <p ${gryffindorType ? "class=gryffindor-type" : ""} ${hufflepuffType ? "class=hufflepuff-type" : ""} ${ravenclawType ? "class=ravenclaw-type" : ""} ${slytherinType ? "class=slytherin-type" : ""}>${student.location}</p>
     <a href="#" class="btn btn-primary">EXPEL</a>
   </div>
 </div>`
    
 }
 renderToDom("#app", domString);
}

cardsOnDom(students);
