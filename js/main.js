import { switchWalk } from "./func.js";
import checkWin from "./checkWin.js";

const container = document.querySelector(".container");
const walk = document.querySelector(".walk");
let count = 0;

container.addEventListener("click", (e) => {
    if (e.target.closest(".item")) {
        if (walk.classList.contains("X")) {
            if (e.target.innerHTML === "") {
                switchWalk(walk);
                e.target.innerHTML = "X";
            }
        } else {
            if (e.target.innerHTML === "") {
                switchWalk(walk);
                e.target.innerHTML = "O";
            }
        }
        count++;
        if (count >= 5) {
            const items = document.querySelectorAll(".item");
            checkWin(items);
        }
    }
});
