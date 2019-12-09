let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";


function moveDodgerLeft(){
    let position = dodger.style.left.replace("px", "");
    let left = parseInt(position, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`
    }
}

function moveDodgerRight() {
    let position = dodger.style.left.replace('px', "");
    let right = parseInt(position, 10)

    if (right < 360 ) {
   dodger.style.left = `${right + 1}px`
    }
}

document.addEventListener("keydown", function(e) {
   if (e.key === "ArrowLeft") {
    moveDodgerLeft();
   }
});

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
       moveDodgerRight()
    }
  });

  