function opentabs(carousel_name) {
    let i;
    let x = document.getElementsByClassName("carousl");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(carousel_name).style.display = "flex";  
  }