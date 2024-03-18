export function switchWalk(walk) {
    if (walk.classList.contains("X")) {
        walk.classList.toggle("X");
        walk.innerHTML = "ход: О";
    } else {
        walk.classList.toggle("X");
        walk.innerHTML = "ход: X";
    }
}

export function draw(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].innerHTML === "") {
            count++;
        }
    }
    if (count === 0) {
        return true;
    }
}
