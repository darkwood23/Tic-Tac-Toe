const mainBody = document.querySelector(".main-body")

for(i = 1; i <= 3; i++) {
    const divContainers = document.createElement('div')
    divContainers.classList.add("div-sqaures")
    mainBody.appendChild(divContainers)
    for(u = 1; u <= 3; u++) {
        const divs = document.createElement('div')
        divs.classList.add("border-divs")
        divContainers.appendChild(divs)
    }
}