let ShirtPage = document.getElementById('MensWear-page-Shirt')
let JeansPage = document.getElementById('MensWear-page-Jeans')
let WatchPage = document.getElementById('MensWear-page-Watch')
let TrackPage = document.getElementById('MensWear-page-Tracks')
let TShirtPage = document.getElementById('MensWear-page-Tshirts')
let ShoesPage = document.getElementById('MensWear-page-Shoes')

//functionlly to open selected product page
ShirtPage.addEventListener('click', () => {
  window.open("Shirt Page/Shirt.html", "_blank")
})

JeansPage.addEventListener('click', () => {
  window.open("Jeans Page/Jeans.html", "_blank")
})

WatchPage.addEventListener('click', () => {
  window.open("Watch page/Watch.html", "_blank")
})

TrackPage.addEventListener('click', () => {
  window.open("Track Page/Track.html", "_blank")
})

TShirtPage.addEventListener('click', () => {
  window.open("T Shirt Page/TShirt.html", "_blank")
})

ShoesPage.addEventListener('click', () => {
  window.open("Shoes Page/Shoes.html", "_blank")
})

