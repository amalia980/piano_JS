/*function playSound(filename) {
    var audio = new Audio('sounds/' + filename);
    audio.play();
}
*/

/*

const getAllKeys = document.querySelectorAll('.key');

function pressedKeys (event) {
    const element = event.target;
    const keyName = element.getAttribnute("data-value");

    playSound(keyName + '.wav');
}

getAllKeys.foreach(element => {
    element.addEventListener("click", pressedKeys);
});

*/

document.querySelectorAll(".key").forEach(
    el => el.addEventListener("click",
        e => new Audio('sounds/' + e.target.getAttribute("data-value") + '.wav').play()
    )
);