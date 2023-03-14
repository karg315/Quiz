//const word1 = document.getElementById("word1");
/* const word2 = document.getElementById("word2");
const word3 = document.getElementById("word3"); */
const imgHangman = document.getElementById("imgHangman");

const wordHangman1 = "GOLD";
var fails = 0;
var currentWord = "";

var ArrayWord1 = ["", "", "", "", ""];

/* Verficar la palabra 1 de la frase */
document
    .getElementById("checkword1")
    .addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que se envíe el formulario
        var word1 = document.getElementById("word1").value;
        word1 = word1.toLowerCase();
        if (word1.trim() !== "") {
            if (word1.trim() === "tumbaga") {
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
        word2 = word2.toLowerCase();
        if (word2.trim() !== "") {
            if (word2.trim() === "teyuna") {
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
        word3 = word3.toLowerCase();
        if (word3.trim() !== "") {
            if (word3.trim() === "conical") {
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
                if (char.includes("l") || char.includes("L")) {
                    document.getElementById("c3").innerHTML = "L";
                    currentWord += "l";
                } else if (char.includes("g") || char.includes("G")) {
                    document.getElementById("c1").innerHTML = "G";
                    currentWord += "g";
                } else if (char.includes("o") || char.includes("O")) {
                    document.getElementById("c2").innerHTML = "O";
                    currentWord += "o";
                } else if (char.includes("d") || char.includes("D")) {
                    document.getElementById("c4").innerHTML = "D";
                    currentWord += "d";
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
                        $("#WrongModal6").modal("show");
                    } else if (fails === 4) {
                        imgHangman.src = "./images/hangman4.jpg";
                        $("#WrongModal7").modal("show");
                    } else if (fails === 5) {
                        imgHangman.src = "./images/hangman5.jpg";
                        $("#WrongModal8").modal("show");
                    } else if (fails === 6) {
                        imgHangman.src = "./images/hangman6.jpg";
                        $("#WrongModal9").modal("show");
                    } else if (fails >= 7) {
                        imgHangman.src = "./images/hangman7.jpg";
                        $("#WrongModal5").modal("show");
                        document.getElementById("live").innerHTML =
                            "Dead image: ";
                    }
                }
                if (
                    currentWord.includes("g") &&
                    currentWord.includes("o") &&
                    currentWord.includes("l") &&
                    currentWord.includes("d")
                ) {
                    $("#CorrectModal2").modal("show");
                    imgHangman.src = "./images/hangman8.jpg";
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
    if (e.target.id === "box1") {
        ArrayWord1[0] = data;
    }
    if (e.target.id === "box2") {
        ArrayWord1[1] = data;
    }
    if (e.target.id === "box3") {
        ArrayWord1[2] = data;
    }
    if (e.target.id === "box4") {
        ArrayWord1[3] = data;
    }
    if (e.target.id === "box5") {
        ArrayWord1[4] = data;
    }
    e.target.appendChild(document.getElementById(data));
}

/* function drop(e, contenedor) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    var imagenObj = document.getElementById(data);
    document.getElementById("box" + contenedor).appendChild(imagenObj);
} */

/* function resetear() {
    var imagenes = document.querySelectorAll(".letters-container img");
    var contenedores = document.querySelectorAll(
        "#box1, #box2, #box3, #box4, #box5"
    );
    for (var i = 0; i < imagenes.length; i++) {
        imagenes[i].style.position = "static";
    }
    for (var j = 0; j < contenedores.length; j++) {
        contenedores[j].innerHTML = "";
    }
} */

/*------------------------------------------------*/
var imagenes = document.querySelectorAll(".letters-container img");

function resetear() {
    var contenedorImagenes = document.getElementById("letters-container");
    var contenedores = document.querySelectorAll(
        "#box1, #box2, #box3, #box4, #box5"
    );
    for (var i = 0; i < imagenes.length; i++) {
        contenedorImagenes.appendChild(imagenes[i]);
    }
    for (var j = 0; j < contenedores.length; j++) {
        contenedores[j].innerHTML = "";
    }
    ArrayWord1 = ["", "", "", "", ""];
}


/* Verficar el último juego */
document
    .getElementById("orderWord")
    .addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que se envíe el formulario
        if ((ArrayWord1[0] === "letterH1") && 
        (ArrayWord1[1] === "letterU1") &&
        (ArrayWord1[2] === "letterN1") &&
        (ArrayWord1[3] === "letterZ1") &&
        (ArrayWord1[4] === "letterA1")) {
            $("#CorrectModal3").modal("show");
        } else {
            $("#WrongModal10").modal("show");
        }
    });