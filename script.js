let dy = 1
let showText = false

function anim() {
    const fill = document.querySelector("#fill-mask")
    let posY = parseFloat(fill.getAttribute("cy"))

    if (posY > 200) {
        dy = Math.min(0, dy)
    } else if (posY < 100) {
        dy = Math.max(0, dy)
        showText = true
    }

    fill.setAttribute("cy", posY + dy)

    if (showText) {
        const bd = document.querySelector("h1")
        bd.animate([{transform: "translateY(100%)"}], 600)

    }

    window.requestAnimationFrame(anim)
}

function handleMouseDown(ev) {
    dy = -1
}
function handleMouseUp(ev) {
    dy = 1
}

anim()

document.querySelector("svg").onmousedown = handleMouseDown
window.onmouseup = handleMouseUp