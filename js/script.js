//const word1 = document.getElementById("word1");
/* const word2 = document.getElementById("word2");
const word3 = document.getElementById("word3"); */
const imgHangman = document.getElementById("imgHangman");

const wordHangman1 = "EGG";
var fails = 0;

var ArrayWord1 = ["", "", "", "", ""];

/* Verficar la palabra 1 de la frase */
document
    .getElementById("checkword1")
    .addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que se envíe el formulario
        var word1 = document.getElementById("word1").value;
        if (word1.trim() !== "") {
            if (word1.trim() === "word") {
                $("#CorrectModal1").modal("show");
            } else {
                $("#WrongModal1").modal("show");
            }
        } else {
            $("#EmptyModal1").modal("show");
        }
    });

/* Verficar la palabra 2 de la frase */
document
    .getElementById("checkword2")
    .addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que se envíe el formulario
        var word2 = document.getElementById("word2").value;
        if (word2.trim() !== "") {
            if (word2.trim() === "pan") {
                $("#CorrectModal1").modal("show");
            } else {
                $("#WrongModal1").modal("show");
            }
        } else {
            $("#EmptyModal1").modal("show");
        }
    });

/* Verficar la palabra 3 de la frase */
document
    .getElementById("checkword3")
    .addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que se envíe el formulario
        var word3 = document.getElementById("word3").value;
        if (word3.trim() !== "") {
            if (word3.trim() === "yes") {
                $("#CorrectModal1").modal("show");
            } else {
                $("#WrongModal1").modal("show");
            }
        } else {
            $("#EmptyModal1").modal("show");
        }
    });

/* Parte del ahorcado 1 */
document
    .getElementById("checkchar")
    .addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que se envíe el formulario
        var char1 = document.getElementById("char1").value;
        if (char1.trim() !== "") {
            let char = char1.split("");
            if (char.length > 1) {
                $("#WrongModal2").modal("show");
            } else {
                if (char.includes("e") || char.includes("E")) {
                    document.getElementById("c1").innerHTML = "E";
                } else if (char.includes("g") || char.includes("G")) {
                    document.getElementById("c2").innerHTML = "G";
                    document.getElementById("c3").innerHTML = "G";
                } else {
                    fails++;
                    if (fails === 1) {
                        imgHangman.src = "./images/hangman1.jpg";
                        $("#WrongModal3").modal("show");
                    } else if (fails === 2) {
                        imgHangman.src = "./images/hangman2.jpg";
                        $("#WrongModal4").modal("show");
                    } else if (fails === 3) {
                        imgHangman.src = "./images/hangman3.jpg";
                        $("#WrongModal3").modal("show");
                    } else if (fails === 4) {
                        imgHangman.src = "./images/hangman4.jpg";
                        $("#WrongModal4").modal("show");
                    } else if (fails === 5) {
                        imgHangman.src = "./images/hangman5.jpg";
                        $("#WrongModal3").modal("show");
                    } else if (fails === 6) {
                        imgHangman.src = "./images/hangman6.jpg";
                        $("#WrongModal4").modal("show");
                    } else if (fails >= 7) {
                        imgHangman.src = "./images/hangman7.jpg";
                        $("#WrongModal5").modal("show");
                    } else {
                    }
                }
            }
        } else {
            $("#EmptyModal1").modal("show");
        }
    });

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(e) {
    e.preventDefault();
        var data = e.dataTransfer.getData("text");
        e.target.appendChild(document.getElementById(data))
}