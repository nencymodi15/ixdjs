
window.onload = function(){ 
   /* This code sets an event listener to execute a 
  function when the window finishes loading. The function retrieves an element with the ID 
  "kickerbutton" (Which is a football image in the profile page)from the DOM and sets its onclick event to another function. This second 
  function changes the window's location to "Challenges.html" when the "kickerbutton" element is clicked.*/
  document.getElementById("kickerbutton").onclick = function () {
    window.location.href = "Chellenges.html"};
  }; 