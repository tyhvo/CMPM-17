// A function that changes the background color of the page when the user clicks a button
function changeColor(){
    const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "black", "white"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// a function that displays an alert when the user clicks a button
document.getElementById("click").onclick = function(){
    alert("Why did you click on this? Hi anyways."); 
}

// add a clicker counter that increments by 1 every time the user clicks the profile image
let clickCount = 0;
function incrementClick(){
    clickCount++;
    document.getElementById("clickCount").innerHTML = clickCount;
}

// a function that displays the current time on the page that updates every second
function updateTime() {
    const currentTime = new Date().toLocaleTimeString(); 
    document.getElementById("currentTime").innerHTML = currentTime; 
}

setInterval(updateTime, 1000)