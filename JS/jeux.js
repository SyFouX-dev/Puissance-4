class Jeux {
    constructor() {
        this.nextplayer = "rouge";
        this.table = []; 
        this.score = 0;
    }

    generate_table() {
        const body = document.getElementsByTagName("body")[0];
        const tbl = document.createElement("table");
        const tblBody = document.createElement("tbody");

        for (let i = 0; i < 6; i++) {
            const row = document.createElement("tr");

            for (let j = 0; j < 7; j++) {
                let cell = document.createElement("td");
                cell.setAttribute("id", j);
                row.appendChild(cell);
            }

            tblBody.appendChild(row);
        }

        tbl.appendChild(tblBody);
        tbl.style.background = "#e43dde";
        body.appendChild(tbl);
        tbl.setAttribute("border", "2");

        for (let i = 0; i < 6; i++) {
            this.table.push(new Array(7).fill(null));
        }
    }

    check_winner(row, col, color) {
        let count = 0;
        for (let i = Math.max(0, col - 3); i <= Math.min(6, col + 3); i++) {
            if (this.table[row][i] === color) {
                count++;
                if (count === 4) return true;
            } else {
                count = 0;
            }
        }

        count = 0;
        for (let i = Math.max(0, row - 3); i <= Math.min(5, row + 3); i++) {
            if (this.table[i][col] === color) {
                count++;
                if (count === 4) return true;
            } else {
                count = 0;
            }
        }

        count = 0;
        for (let i = -3; i <= 3; i++) {
            let r = row + i;
            let c = col + i;
            if (r >= 0 && r < 6 && c >= 0 && c < 7) {
                if (this.table[r][c] === color) {
                    count++;
                    if (count === 4) return true;
                } else {
                    count = 0;
                }
            }
        }

        count = 0;
        for (let i = -3; i <= 3; i++) {
            let r = row + i;
            let c = col - i;
            if (r >= 0 && r < 6 && c >= 0 && c < 7) {
                if (this.table[r][c] === color) {
                    count++;
                    if (count === 4) return true;
                } else {
                    count = 0;
                }
            }
        }

        return false;
    }

    add_piece(td) {
        let index = td.id;
        let p = td.parentNode.parentNode;
        for (let i = p.children.length - 1; i >= 0; i--) {
            if (p.childNodes[i].childNodes[index].style.backgroundColor !== "") {
                continue;
            } else {
                if (this.nextplayer === "rouge") {
                    p.childNodes[i].childNodes[index].style.backgroundColor = "red";
                    this.table[i][index] = "red";
                    if (this.check_winner(i, parseInt(index), "red")) {
                        alert("Le joueur rouge a gagné !");
                    } else {
                        this.nextplayer = "jaune";
                    }
                    return;
                } else {
                    p.childNodes[i].childNodes[index].style.backgroundColor = "yellow";
                    this.table[i][index] = "yellow";
                    if (this.check_winner(i, parseInt(index), "yellow")) {
                        alert("Le joueur jaune a gagné !");
                    } else {
                        this.nextplayer = "rouge";
                    }
                    return;
                }
                
            }
        }
        if (this.winner !== null){
            if (window.confirm("Vous voulais rejouer ?")){
                this.reset();
                this.render();
            }
            return;
        }
        alert("Colonne remplie!");
    }
}

export default Jeux;
