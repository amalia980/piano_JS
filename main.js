const getAllKeys = document.querySelectorAll('.key');



function playSound(filename) {
    var audio = new Audio('sounds/' + filename);
    audio.play();
}

playSound.addEventListener("click", getAllKeys);