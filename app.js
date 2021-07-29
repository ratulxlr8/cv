function chagngeExpe() {
  // const eduid = document.getElementById("education");
  document.getElementById("education").style.display = "none";
  document.getElementById("experience").style.display = "block";
  console.log("clicked ");
}
function chagngeEdu() {
  document.getElementById("education").style.display = "block";
  document.getElementById("experience").style.display = "none";
}
function displayAbout() {
  document.getElementById("aboutMe").style.display = "block";
  document.getElementById("homeID").style.display = "none";
}
function displayHome() {
  document.getElementById("portfolio").style.display = "none";
  document.getElementById("aboutMe").style.display = "none";
  document.getElementById("homeID").style.display = "block";
}
function displayPortfolio() {
  document.getElementById("portfolio").style.display = "block";
  document.getElementById("homeID").style.display = "none";
}
