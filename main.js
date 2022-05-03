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


const sortOnDom = () => {
  let domString = "";
  domString =`
  <div class="card" id="top" style="width: 18rem;">
  <img src="assets/magick.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">MAGICK SCHOOL</h5> 
    <p class="card-text">Let's get you sorted!</p>
    <form>
      <a href="#" class="btn btn-primary">Sort!</a>
    </form>
   
  </div>
</div>
`;
  
  renderToDom("#form-container", domString);
};

const buttonsOnDom = () => {
   let domString = "";
   domString =`
  
   <button type="button" id="all-btn">ALL</button>
   <button type="button" id="gryf-btn">Gryffindor</button>
   <button type="button" id="huff-btn">Hufflepuff</button>
   <button type="button" id="rav-btn">Ravenclaw</button>
   <button type="button" id="sly-btn">Slytherin</button>
   <button type="button" id="ex-btn">EXPELLED</button>
 
   `;
   renderToDom("#filter-container", domString);
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
   renderToDom("#student-container", domString);
};

const expelledOnDom = () => {
   let domString = "";
   domString += `
      <div class="card" id="lost" style="width: 18rem;">
        <img src="assets/fire.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h2>student name</h2>
         <p class="card-text">this student has been expelled to THE LOST BOYS</p>
      </div>
  </div>
   
   `;
   renderToDom("#expelled-container", domString)

}

sortOnDom();
buttonsOnDom();
cardsOnDom(students);
expelledOnDom();
