var all = document.getElementById("all");
var website = document.getElementById("website");
var mapp = document.getElementById("mapp");
var dapp = document.getElementById("dapp");
var w = document.getElementById("w");
var m = document.getElementById("m");
var d = document.getElementById("d");
function mobile() {
  if (mapp.click) {
    w.style.display = "none";
    m.style.display = "block";
    d.style.display = "none";
  }
}