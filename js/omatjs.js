// Omat JS kokelmat tänne!
function korostus() {
    document.getElementById("ekajs").innerHTML = "Leikkipaikan helmi on paras kaveri";
    document.getElementById("ekajs").style.color = "red";
  }
  function poisto() {
    document.getElementById("ekajs").innerHTML = "Leikkipaikan helmi";
    document.getElementById("ekajs").style.color = "black";
  }
// kaikkiin sivuihin vaikuttava nappula
document.getElementById("taustavari").addEventListener("mouseover", myBackGround); // voi poistaa, mutta toimii
function myBackGround() {
    document.getElementById("taustavari").style.backgroundColor = "white";
    
}