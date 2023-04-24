window.onload =function(){
  /* This code sets an event listener to execute a 
  function when the window finishes loading. The function retrieves an element with the ID 
  "backbutton" (which is the back arrow in the chllenges file) from the DOM and sets its onclick event to another function. This second 
  function changes the window's location to "Challenges.html" when the "kickerbutton" element is clicked.*/
  document.getElementById("backbutton").onclick = function () {
    window.location.href = "index.html"};
}