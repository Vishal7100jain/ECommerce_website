let nav = document.getElementById('navbar')
let h3 = document.querySelector("h3")

window.addEventListener('scroll' , function navbarColorChange() {
    if (window.scrollY <= 100) {
        nav.style.backgroundColor = "rgb(74, 153, 210)"
        h3.style.color = "#fccd36"
    }else{
        nav.style.backgroundColor = "rgb(248, 3, 233)"
        h3.style.color = "white"
    }
})