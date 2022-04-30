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





]


const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

const cardsOnDom = (pets) => {
  let domString = "";
  for (const member of pets) {
    //const catType = member.type === "cat";
    //const dogType = member.type === "dog";
    //const dinoType = member.type === "dino";
   domString += `<div class="card">
   <div class="card-header">School of Magick</div>
   <div class="card-body">
     <h5 class="card-title">${student.name}</h5>
     <p class="card-text">${student.location}</p>
     <a href="#" class="btn btn-primary">EXPEL</a>
   </div>
 </div>`
    
 }
 renderToDom("#app", domString);
}

cardsOnDom(students);
