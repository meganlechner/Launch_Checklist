// Write your JavaScript code here!

window.addEventListener("load", function(){
   
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json){
         const div = document.getElementById("missionTarget");
         div.innerHTML = `
         <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[2].name}</li>
               <li>Diameter: ${json[2].diameter}</li>
               <li>Star: ${json[2].star}</li>
               <li>Distance from Earth: ${json[2].distance}</li>
               <li>Number of Moons: ${json[2].moons}</li>
            </ol>
            <img src="${json[2].image}"></img>
            `;
      });
   });
   
   let button = document.getElementById("formSubmit");

   button.addEventListener("submit", function(event){
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
         alert("All fields are required");
         event.preventDefault();
      }
      
      if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)){
         alert("Fuel level & cargo mass should both be numbers.");
         event.preventDefault();
      }
   })

   button.addEventListener("submit", function(event){
      alert("Your submit is working, keep guessing");
      let pilotStatus = document.getElementById("pilotStatus");
      pilotStatus.innerHTML = `Pilot ${pilotName.value} Ready.`;
   })
})