const parallax_el = document.querySelectorAll(".parallax")

let xValue = 0
let yValue = 0

window.addEventListener("mousemove" , (e) => {
    xValue = e.clientX - window.innerWidth / 2
    yValue = e.clientY - window.innerHeight / 2

    parallax_el.forEach(elem => {
        let speedX = elem.dataset.speedx
        let speedY = elem.dataset.speedy
        elem.style.transform = `translateX(calc(-50% + ${- xValue * speedX}px ))  translateY(calc(-50% + ${- yValue * speedY}px ))`
    })
})

const loaderContainer = document.querySelector(".loader")
const contentContainer = document.querySelector("#main")

window.addEventListener('load', () => {
    loaderContainer.classList.add('hide')
    contentContainer.classList.add('show')
})