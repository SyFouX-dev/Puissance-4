import Jeux from "./jeux.js";

const jeux = new Jeux;
const table = document.getElementsByClassName('jeux')[0];

jeux.generate_table()

// const rows = document.querySelectorAll('tr');
const rows = document.querySelectorAll('td');


for (let td of rows) {
    td.onclick = () => {
        jeux.add_piece(td);
    }
}