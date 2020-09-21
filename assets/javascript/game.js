let teamoneshootbutton = document.querySelector("#teamone-shoot-button");
let teamonenumbershots = document.querySelector("#teamone-numshots");
let teamtwoshootbutton = document.querySelector("#teamtwo-shoot-button");
let teamtwonumbershots = document.querySelector("#teamtwo-numshots");
let resetbutton = document.querySelector("#reset-button")
let numofresets = document.querySelector("#num-resets")
let teamonegoals = document.querySelector("#teamone-numgoals");
let teamtwogoals = document.querySelector("#teamtwo-numgoals");



teamoneshootbutton.addEventListener("click", function() {
    console.log("+ shootbutton clicked");
    let newCounterValue = Number(teamonenumbershots.innerHTML) + 1;
    
    teamonenumbershots.innerHTML = newCounterValue;
    if (Math.random() * 100 < 65) {
        
        console.log ("Good!");
        let newCounterValue = Number(teamonegoals.innerHTML) + 1;
    
        teamonegoals.innerHTML = newCounterValue;   
    }
    
})



teamtwoshootbutton.addEventListener("click", function() {
    console.log("+ shootbutton clicked");
    let newCounterValue = Number(teamtwonumbershots.innerHTML) + 1;
    
    teamtwonumbershots.innerHTML = newCounterValue;
    if (Math.random()  *100 < 65) {
        console.log ("Yes!");
        let newCounterValue = Number(teamtwogoals.innerHTML) + 1;

        teamtwogoals.innerHTML = newCounterValue;
    }
})


resetbutton.addEventListener("click",  function() {
    console.log("+ resetbutton clicked");
    let newCounterValue = Number(numofresets.innerHTML) + 1;
        
    numofresets.innerHTML = newCounterValue;
    teamonenumbershots.innerHTML = 0
    teamtwonumbershots.innerHTML = 0
    teamonegoals.innerHTML = 0
    teamtwogoals.innerHTML = 0
})



