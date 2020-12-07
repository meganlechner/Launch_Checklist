// Write your JavaScript code here!

window.addEventListener("load", function(){
   let button = document.getElementById("formSubmit");
   
   button.addEventListener("submit", function(event){
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.getElementById("copilotName");
      let fuelLevel = document.getElementById("fuelLevel");
      let cargoMass = document.getElementById("cargoMass");
      
      // if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
      //    alert("All fields are required");
      //    event.preventDefault();
      // }
      
      // if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)){
      //    alert("Fuel level & cargo mass should both be numbers.");
      //    event.preventDefault();
      // }

      
      
      let pilotStatus = document.getElementById("pilotStatus");
      pilotStatus.innerHTML = `Pilot ${pilotName.value} Ready.`;
      
   })
   

})


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
