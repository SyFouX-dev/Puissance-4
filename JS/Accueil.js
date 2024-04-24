document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("pseudoForm").addEventListener("submit", function(event) {
        event.preventDefault();

        var pseudo = document.getElementById("pseudo").value;

        localStorage.setItem("pseudo", pseudo);

        alert("Pseudo enregistré : " + pseudo);
        document.location.href="http://127.0.0.1:5502/HTML/Jeux.html";
    });

});
