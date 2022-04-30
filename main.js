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
