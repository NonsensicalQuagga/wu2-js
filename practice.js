export function setupPractice (element) {
  // följande funktioner körs i ordning
  // se output i console.log()
  // du ska i varje del arbeta med att visa vad du lärt dig
  // i slutändan ska projektet köras och inte innehålla fel och
  // du ska kunna förklara vad, hur varför PM

  // Samtliga delar finns förklarade/beskrivna https://webbutveckling.jensa.dev/tekniker/javascript/

  varsAndTypes(element)
  operators(element)
  /*
  controlStructures(element)
  arraysAndObjects(element)
  domAndEvents(element)
  domManipulation(element)*/
}

// du kan använda kontrollstrukturer och variabler etc. i 
// andra moment än där funktionen heter så såklart
function varsAndTypes(element){
    
  var wow;
  let x = Math.ceil(Math.random() * 100);
  wow = document.createElement("div");
  wow.textContent = x;
  element.appendChild(wow)
}

function operators(element) {
  // console.log(wow): "wow is not defined" 
  //              :(
  // Jag får inte använda min var :(
  // if(parseInt(wow.textContent) > 50)
  if(parseInt(element.children[0].textContent) > 50){
    let newElement = document.createElement("h1");
    newElement.textContent = "Talet är större än 50!!!"
    element.appendChild(newElement)
  }

}

function controlStructures(element) {
  // kod för att visa vad du lärt dig om kontrollstrukturer
  // if och loopar
  let controlStructures = 'controlStructures'
  console.log(controlStructures, controlStructures ? 'if' : 'loopar')
}

function arraysAndObjects (element) {
  // kod för att visa vad du lärt dig om arrays och objekt
  console.log(['arrays', {and: 'objects'}])
}

function domAndEvents (element) {
  // kod för att visa vad du lärt dig om DOM och events
  // använd med html och listeners
  console.log(element, 'lyssna efter event för att ändra element')
}

function domManipulation (element) {
  // kod för att visa vad du lärt dig om DOM-manipulation
  // skapa element och lägga till och ta bort
  element.innerHTML = 'dom manipulation, ändra och lägg till element'
}