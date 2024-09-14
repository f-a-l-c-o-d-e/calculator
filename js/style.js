const buttons = document.querySelectorAll("button")
buttons.forEach(item => {
    item.addEventListener("mouseover", () => {
        item.style.filter = "brightness(75%)"
    })
    item.addEventListener("mouseout", () => {
        item.style.filter = "brightness(100%)"
    })
    item.addEventListener("mousedown", () => {
        item.style.filter = "brightness(50%)"
    })
    item.addEventListener("mouseup", () => {
        item.style.filter = "brightness(100%)"
    })
})