var all = document.getElementById("all");
var website = document.getElementById("website");
var mapp = document.getElementById("mapp");
var dapp = document.getElementById("dapp");
var w = document.getElementById("w");
var m = document.getElementById("m");
var d = document.getElementById("d");
function desktop() {
  if (dapp.click) {
    w.style.display = "none";
    m.style.display = "none";
    d.style.display = "block";
  }
}