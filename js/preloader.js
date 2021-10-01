var time;

function myFunction() {
    myVar = setTimeout(showPage, 2000);
  }
  
  function showPage() {
    document.getElementById("preload").style.display = "none";
    document.getElementById("page").style.display = "block";
  }
