const symbols = ["X", "O"]

function select(className) {
    const classNames = document.querySelector(`.${className}`)
    classNames.style = "background: red;"
}

function clearEverything() {
    const boxes = document.querySelectorAll(".boxes")
    boxes.textContent = "background: ;"
}