// Write your JavaScript code here!

window.addEventListener("load", function(){
   
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json){
         const div = document.getElementById("missionTarget");
         function getRandomInt(max){
            return Math.floor(Math.random() * Math.floor(max));
         }
         index = getRandomInt(6);
         div.innerHTML = `
         <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[index].name}</li>
               <li>Diameter: ${json[index].diameter}</li>
               <li>Star: ${json[index].star}</li>
               <li>Distance from Earth: ${json[index].distance}</li>
               <li>Number of Moons: ${json[index].moons}</li>
            </ol>
            <img src="${json[index].image}"></img>
            `;
      });
   });
   
   let button = document.getElementById("formSubmit");

   button.addEventListener("click", function(event){
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
         alert("All fields are required");
         event.preventDefault();
      }
      
      if (!isNaN(pilotName.value) || !isNaN(copilotName.value)){
         alert("Pilot & Copilot names should not be numbers.");
         event.preventDefault();
      }

      if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)){
         alert("Fuel level & cargo mass should both be numbers.");
         event.preventDefault();
      }
   
      let pilotStatus = document.getElementById("pilotStatus");
      pilotStatus.innerHTML = `Pilot ${pilotName.value} Ready.`;

      let copilotStatus = document.getElementById("copilotStatus");
      copilotStatus.innerHTML = `Copilot ${copilotName.value} Ready.`;

      let launchStatus = document.getElementById("launchStatus");
      let faultyItems = document.getElementById("faultyItems");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      
      if (fuelLevel.value < 10000){
         fuelStatus.innerHTML = `Fuel level too low for launch.`
         launchStatus.style.color = "red";
         launchStatus.innerHTML =  `Shuttle not ready for launch.`
         faultyItems.style.visibility = "visible";
      } else if (cargoMass.value > 10000){
         cargoStatus.innerHTML = `Cargo mass is too high for launch.`
         launchStatus.style.color = "red";
         launchStatus.innerHTML =  `Shuttle not ready for launch.`
         faultyItems.style.visibility = "visible";
      } else {
         launchStatus.innerHTML = `Shuttle is ready for launch`;
         launchStatus.style.color = "green";
      }

   })
})