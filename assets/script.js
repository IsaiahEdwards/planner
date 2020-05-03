// Global
var date = moment().format("MMM Do YYYY");
var displayDate = document.getElementById("currentDay");
var info = document.querySelector("#info");
var saveButton = document.querySelector(".save");
 console.log(date);


 // current date documented 
function DisplayDate(){
    displayDate.innerHTML = date;
}
//save to local storage
saveButton.addEventListener("click",function(event){
    console.log("button pressed");
    event.preventDefault();
    var saveData = document.querySelector("#info").value;

    localStorage.setItem("info", saveData);
    Display();
});

//Display local Storage
function Display(){
    var getData = localStorage.getItem("info");
    console.log(getData);
    document.querySelector("#info").value = getData;
}





//RUN FUNCTIONS HERE
DisplayDate();
Display();