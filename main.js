const hogHouses = ['G', 'H', 'R', 'S', 'Ex']

const students = [
  {
    sId: 1,
    name: "Robby",
    location: "Gryffindor",
    enlisted: true
  },

  {
    sId: 2,
    name: "T-Dog",
    location: "Hufflepuff",
    enlisted: true
  },

  {
    sId: 3,
    name: "Eliza",
    location: "Ravenclaw",
    enlisted: true
  },

  {
    sId: 4,
    name: "Hazel",
    location: "Slytherin",
    enlisted: true
  },

];

const lostKids = [

  {
    sId: 5,
    name: "Frazier",
    location: "LK Army",
    enlisted: false
  },

  {
    sId: 6,
    name: "Nick",
    location: "LK Army",
    enlisted: false
  },

];

const newStudents = [];


const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};


const sortOnDom = () => {
  let domString = "";
  domString =`
  <div class="card" id="top" style="width: 45rem;">
  <img src="assets/magick.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">MAGICK SCHOOL</h5> 
    <p class="card-text">Let's get you sorted!</p>
    <form id="sortMe">
     <div class="inputs">
      <span class="inputs2">NAME</span>
       <input type="text" aria-label="name" class="name form-control" id="blank" required>
       <button type="submit" class="btn btn-primary" id="sort">SORT</button>
      </div>
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
   <div class="card-header" id="head">School of Magick</div>
   <div class="card-body">
     <h5 class="card-title">${student.name}</h5>
     <p ${gryffindorType ? "class=gryffindor-type" : ""} ${hufflepuffType ? "class=hufflepuff-type" : ""} ${ravenclawType ? "class=ravenclaw-type" : ""} ${slytherinType ? "class=slytherin-type" : ""}>${student.location}</p>
     <a href="#" class="btn btn-primary" id="xpel--${student.sId}">EXPEL</a>
   </div>
 </div>`
    
   }
   renderToDom("#student-container", domString);
};




const expelledOnDom = () => {
   let domString = "";
   domString += `
      <div class="card" id="lost" style="width: 45rem;">
        <img src="assets/fire.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h2>student name</h2>
         <p class="card-text">this student has been expelled to THE LOST KIDS ARMY</p>
         <div>
           <p id="xpel"></p>
         </div>
      </div>
  </div>
   
   `;
   renderToDom("#expelled-container", domString)

}

const kidsOnDom = () => {
  let domString = "";

  for (const kid of lostKids) {
    domString += `<div class="card" id="exCard">
   <div class="card-header" id="exHead">LOST KIDS</div>
   <div class="card-body">
     <h5 class="card-title" id="exBody">${kid.name}</h5>
     <p>Get Lost!</p>
   </div>
 </div>`;

  renderToDom("#expelled-cards", domString);
 }
};



//*********************EVENT LISTENERS***************/

const eventListeners = () => {

//*********************FILTER BUTTON ROW************/

document.querySelector("#filter-container").addEventListener("click", (e) => {
  //console.log("you clicked a filter buttton", e.target.id); 
  if (e.target.id === "all-btn") {
    cardsOnDom(students);
  } else if (e.target.id === "gryf-btn") {
     const gryfs = students.filter(stud => stud.location === "Gryffindor");
     cardsOnDom(gryfs);
  } else if (e.target.id === "huff-btn") {
    const huffs = students.filter(stud => stud.location === "Hufflepuff");
    cardsOnDom(huffs);
  } else if (e.target.id === "rav-btn") {
    const ravs = students.filter(stud => stud.location === "Ravenclaw");
    cardsOnDom(ravs);
  } else if (e.target.id === "sly-btn") {
    const slys = students.filter(stud => stud.location === "Slytherin");
    cardsOnDom(slys);
  } else if (e.target.id === "ex-btn") {
    const exs = students.filter(stud => stud.location === "EXPELLED");
    cardsOnDom(exs);
  } 
  
 });

//*********************BUTTON on CARDS*************/
             //card buttons must have unique id's
             document.querySelector("#student-container").addEventListener("click", (e) => {
              //get student id off of button pushed
   if (e.target.id) {
     const [action, sId] = e.target.id.split("--"); //destructured split of button id
            //taco
             //finding index of student object in students array
     const index = students.findIndex(taco => taco.sId === parseInt(sId));
 
     if (e.target.id.includes("xpel")) {
     
       lostKids.push(students[index]);
       students.splice(index, 1);
       
     }

     kidsOnDom(lostKids);
     cardsOnDom(students);
   
 
   }
 
 });
};
 //******************sorting shit*******************/
 const findHouse = () => {
  const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

  document.querySelector("#form-container").addEventListener("submit", (e) => {
    e.preventDefault();

    const newStudent = {
      sId: students[students.length - 1].sId + 1,
      name: document.querySelector("#blank").value,
      location: houses[Math.floor(Math.random() * 4)],
      enlisted: true,
    };

    students.push(newStudent);
    cardsOnDom(students, "#student-container");
    document.querySelector("#sortMe").reset();
  });
};


const run = () => {
  sortOnDom();
  buttonsOnDom();
  cardsOnDom(students);
  expelledOnDom();
  kidsOnDom();
  findHouse();
  eventListeners();
};

run();
