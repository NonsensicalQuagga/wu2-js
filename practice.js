export function setupPractice(element) {
  // följande funktioner körs i ordning
  // se output i console.log()
  // du ska i varje del arbeta med att visa vad du lärt dig
  // i slutändan ska projektet köras och inte innehålla fel och
  // du ska kunna förklara vad, hur varför PM

  // Samtliga delar finns förklarade/beskrivna https://webbutveckling.jensa.dev/tekniker/javascript/

  varsAndTypes(element)
  operators(element)
  controlStructures(element)
  arraysAndObjects(element)
  domAndEvents(element)
  /*
  domManipulation(element)*/
}

// du kan använda kontrollstrukturer och variabler etc. i 
// andra moment än där funktionen heter så såklart
function varsAndTypes(element) {

  var wow;
  let x = Math.ceil(Math.random() * 100);
  wow = document.createElement("div");
  wow.textContent = x;
  element.appendChild(wow);
  // spenderade tid i webbläsaren för att lista ut hur dom fungerade
}

function operators(element) {
  // console.log(wow): "wow is not defined" 
  //              :(
  // Jag får inte använda min var :(
  // if(parseInt(wow.textContent) > 50);
  if (parseInt(element.children[0].textContent) > 50) {
    let newElement = document.createElement("h1");
    newElement.textContent = "Talet är större än 50";
    element.appendChild(newElement);
  }
}

function controlStructures(element) {
  try {
    console.log(element.children[1].textContent);
    while (true) {
      try {
        if (yeet === undefined) pog;
        if (yeet < parseInt(element.children[0].textContent)) {
          element.children[1].textContent += "!";
          yeet++
        }
        else break;
      }
      catch (error) {
        var yeet = 50;
      }
    }
  }
  catch (error) {
    let bad = document.createElement("h1");
    bad.textContent = "SÄMST";
    element.appendChild(bad);
  }

}

function arraysAndObjects(element) {
  // kod för att visa vad du lärt dig om arrays och objekt
  let numbers = [];
  for(let i = 0; i <= 100; i++){
    numbers.push(i)
  }
  console.log(numbers)
  let coolElement ={
    type: "semantik", 
    text: "wow",
    display: "grid"
  }
  let newElement = document.createElement(coolElement.type);
  newElement.textContent = coolElement.text
  newElement.style.display = coolElement.display;
  element.appendChild(newElement);
}

function domAndEvents(element) {
  // kod för att visa vad du lärt dig om DOM och events
  // använd med html och listeners
  let newElement = document.createElement("button");
  let newElementText = document.createElement("h2");
  newElementText.textContent = "pog";
  newElement.appendChild(newElementText);
  let factor = 1;
  newElement.addEventListener('click', (e) =>{
    factor++;
    newElement.children[0].textContent = "pog^" + factor;
  })
  element.appendChild(newElement);
}

function domManipulation(element) {
  // kod för att visa vad du lärt dig om DOM-manipulation
  // skapa element och lägga till och ta bort
  element.innerHTML = 'dom manipulation, ändra och lägg till element'
}