import { draw } from "./func.js";

function addStyle(item1, item2, item3) {
    item1.classList.add("win");
    item2.classList.add("win");
    item3.classList.add("win");
}

export default function checkWin(arr) {
    if (
        (arr[0].innerHTML === "X" &&
            arr[1].innerHTML === "X" &&
            arr[2].innerHTML === "X") ||
        (arr[0].innerHTML === "O" &&
            arr[1].innerHTML === "O" &&
            arr[2].innerHTML === "O")
    ) {
        addStyle(arr[0], arr[1], arr[2]);
        setTimeout(() => {
            location.reload();
        }, 2000);
    } else if (
        (arr[0].innerHTML === "X" &&
            arr[3].innerHTML === "X" &&
            arr[6].innerHTML === "X") ||
        (arr[0].innerHTML === "O" &&
            arr[3].innerHTML === "O" &&
            arr[6].innerHTML === "O")
    ) {
        addStyle(arr[0], arr[3], arr[6]);
        setTimeout(() => {
            location.reload();
        }, 2000);
    } else if (
        (arr[0].innerHTML === "X" &&
            arr[4].innerHTML === "X" &&
            arr[8].innerHTML === "X") ||
        (arr[0].innerHTML === "O" &&
            arr[4].innerHTML === "O" &&
            arr[8].innerHTML === "O")
    ) {
        addStyle(arr[0], arr[4], arr[8]);
        setTimeout(() => {
            location.reload();
        }, 2000);
    } else if (
        (arr[2].innerHTML === "X" &&
            arr[5].innerHTML === "X" &&
            arr[8].innerHTML === "X") ||
        (arr[2].innerHTML === "O" &&
            arr[5].innerHTML === "O" &&
            arr[8].innerHTML === "O")
    ) {
        addStyle(arr[2], arr[5], arr[8]);
        setTimeout(() => {
            location.reload();
        }, 2000);
    } else if (
        (arr[2].innerHTML === "X" &&
            arr[4].innerHTML === "X" &&
            arr[6].innerHTML === "X") ||
        (arr[2].innerHTML === "O" &&
            arr[4].innerHTML === "O" &&
            arr[6].innerHTML === "O")
    ) {
        addStyle(arr[2], arr[4], arr[6]);
        setTimeout(() => {
            location.reload();
        }, 2000);
    } else if (
        (arr[1].innerHTML === "X" &&
            arr[4].innerHTML === "X" &&
            arr[7].innerHTML === "X") ||
        (arr[1].innerHTML === "O" &&
            arr[4].innerHTML === "O" &&
            arr[7].innerHTML === "O")
    ) {
        addStyle(arr[1], arr[4], arr[7]);
        setTimeout(() => {
            location.reload();
        }, 2000);
    } else if (
        (arr[3].innerHTML === "X" &&
            arr[4].innerHTML === "X" &&
            arr[5].innerHTML === "X") ||
        (arr[3].innerHTML === "O" &&
            arr[4].innerHTML === "O" &&
            arr[5].innerHTML === "O")
    ) {
        addStyle(arr[3], arr[4], arr[5]);
        setTimeout(() => {
            location.reload();
        }, 2000);
    } else if (
        (arr[6].innerHTML === "X" &&
            arr[7].innerHTML === "X" &&
            arr[8].innerHTML === "X") ||
        (arr[6].innerHTML === "O" &&
            arr[7].innerHTML === "O" &&
            arr[8].innerHTML === "O")
    ) {
        addStyle(arr[6], arr[7], arr[8]);
        setTimeout(() => {
            location.reload();
        }, 2000);
    } else {
        if (draw(arr)) {
            location.reload();
        }
    }
}
