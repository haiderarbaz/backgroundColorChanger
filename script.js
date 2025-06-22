const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "lush-forest") {
      body.style.backgroundColor = "#2e6f40";
    }
    if(e.target.id==='chili-spice'){
        body.style.backgroundColor= "#ffa896";
    }
    if(e.target.id==='blue-eclipse'){
        body.style.backgroundColor= "#8686ac";
    }
    if(e.target.id==='stormy-morning'){
        body.style.backgroundColor= "#88bdf2";
    }
    if(e.target.id==='mossy-hollow'){
        body.style.backgroundColor= "#bac095";
    }
  });
});
