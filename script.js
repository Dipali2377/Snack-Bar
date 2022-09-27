function MyFunction() {
  var a = document.getElementById("bar"); // get the bar div

  //Then add the show class to the div
  a.className = "show";
  setTimeout(function () {
    a.className = a.className.replace("show", ""); // Hide the message after 3 seconds
  }, 3000);
}
