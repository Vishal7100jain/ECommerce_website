let ShirtBackimage = "url('https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/s/g/p/l-st1-vebnor-original-imagmsyxunkgztzw.jpeg?q=70')"
let jeansBackimage = "url('https://rukminim2.flixcart.com/image/832/832/xif0q/jean/c/v/e/-original-imaghseb6wjdg9un.jpeg?q=70')"
let ShoesBackimage = "url('https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/j/v/9/6-tm-12-6-trm-white-original-imagjqyzntcvcmhz.jpeg?q=90')"
let TracksBackimage = "url('https://dpassion.com/cdn/shop/products/057A5313_1000x.jpg?v=1678771278')"
let TShirtBackimage = "url('https://rukminim2.flixcart.com/image/832/832/jv5k2a80/t-shirt/e/f/h/m-msp19pn010b-metronaut-original-imafg49sb7z5ecx7.jpeg?q=70')"
let WatchBackimage = "url('https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/d/u/k/-original-imagzzukgevbkh9w.jpeg?q=70')"

// Selecting all image div to change image based on image clicked
let mainPhoto = document.getElementById('mainPhotodiv')

//****************************     Choice one image    *****************************\\

//Funtion to change main image to image One
let ChoiceOne = document.getElementsByClassName('Choice-one')
for (i = 0; i < ChoiceOne.length; i++) {
    let imageOne = ChoiceOne[i]
    let imageOneUrl = window.getComputedStyle(imageOne).getPropertyValue('background-image')

    imageOne.addEventListener('click', () => {
        mainPhoto.style.backgroundImage = imageOneUrl
    })
}

//Funtion to change main image to image Two
let ChoiceTwo = document.getElementsByClassName('Choice-two')
for (i = 0; i < ChoiceTwo.length; i++) {
    let imageTwo = ChoiceTwo[i]
    let imageTwoUrl = window.getComputedStyle(imageTwo).getPropertyValue('background-image')

    imageTwo.addEventListener('click', () => {
        mainPhoto.style.backgroundImage = imageTwoUrl
    })
}


let sizeDiv = document.getElementById('size')
let eachSizeDiv = sizeDiv.querySelectorAll('div')
let SSizeDiv = document.getElementById('S')
let previousDiv = null;
Array.from(eachSizeDiv).forEach((div) => {
    div.addEventListener('click', (e) => {
        //to clear the previous div color
        if (previousDiv) {
            previousDiv.style.background = "white"
        }

        SSizeDiv.style.backgroundColor = "white"
        div.style.background = "#89808046"
        previousDiv = div
    })
})