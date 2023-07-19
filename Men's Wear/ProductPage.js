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


//Logic to select the size
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