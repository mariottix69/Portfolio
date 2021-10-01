var all = document.getElementById("all");
var website = document.getElementById("website");
var mapp = document.getElementById("mapp");
var dapp = document.getElementById("dapp");
var w = document.getElementById("w");
var m = document.getElementById("m");
var d = document.getElementById("d");
function allshow() {
  if (all.click) {
    w.style.display = "block";
    m.style.display = "block";
    d.style.display = "block";
  }
}