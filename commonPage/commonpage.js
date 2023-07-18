let SelectedProduct = localStorage.getItem('SelectedProduct');
let ShirtBackimage = "url('https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/s/g/p/l-st1-vebnor-original-imagmsyxunkgztzw.jpeg?q=70')"
let jeansBackimage = "url('https://rukminim2.flixcart.com/image/832/832/xif0q/jean/c/v/e/-original-imaghseb6wjdg9un.jpeg?q=70')"
let ShoesBackimage = "url('https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/j/v/9/6-tm-12-6-trm-white-original-imagjqyzntcvcmhz.jpeg?q=90')"
let TracksBackimage = "url('https://dpassion.com/cdn/shop/products/057A5313_1000x.jpg?v=1678771278')"
let TShirtBackimage = "url('https://rukminim2.flixcart.com/image/832/832/jv5k2a80/t-shirt/e/f/h/m-msp19pn010b-metronaut-original-imafg49sb7z5ecx7.jpeg?q=70')"
let WatchBackimage = "url('https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/d/u/k/-original-imagzzukgevbkh9w.jpeg?q=70')"

if (SelectedProduct) {
    //Main image of the product
    var mainPhoto = document.getElementById("mainPhotodiv")
    mainPhoto.style.backgroundImage = SelectedProduct;

    //Choice image one
    var ChoiceOne = document.getElementsByClassName('Choice-one');
    for (let i = 0; i < ChoiceOne.length; i++) {
        var imageOne = ChoiceOne[i];
        imageOne.style.backgroundImage = SelectedProduct;
        //Too change the main image to the seleted image
        imageOne.addEventListener('click', () => {
            mainPhoto.style.backgroundImage = SelectedProduct
        })
    }

    //Choice image two
    var ChoiceTwo = document.getElementsByClassName('Choice-two');
    for (let i = 0; i < ChoiceTwo.length; i++) {
        var imageTwo = ChoiceTwo[i];
        imageTwo.style.backgroundImage = SelectedProduct;

        //Too change the main image to the seleted image
        function imagechangingTwo(imageURL) {
            imageTwo.addEventListener('click', (e) => {
                mainPhoto.style.backgroundImage = imageURL
            })
        }

        //setting the back image 
        //back image for Shirt
        if (SelectedProduct == `url("https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/s/u/f/s-st10-vebnor-original-imagprjgsdzafrqb.jpeg?q=70")`) {
            imageTwo.style.backgroundImage = ShirtBackimage
            imagechangingTwo(`${ShirtBackimage}`)
        }

        //back image for jeans
        else if (SelectedProduct == `url("https://rukminim2.flixcart.com/image/832/832/xif0q/jean/n/r/2/-original-imaghsebtyzqzkyv.jpeg?q=70")`) {
            imageTwo.style.backgroundImage = jeansBackimage
            imagechangingTwo(`${jeansBackimage}`)
        }

        //back image for Shoes
        else if (SelectedProduct == `url("https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/7/2/m/6-tm-12-6-trm-white-original-imagjqyzz8z9jrgf.jpeg?q=90")`) {
            imageTwo.style.backgroundImage = ShoesBackimage
            imagechangingTwo(`${ShoesBackimage}`)
        }

        //back image for Tracks
        else if (SelectedProduct == `url("https://dpassion.com/cdn/shop/products/057A5307_1000x.jpg?v=1678771278")`) {
            imageTwo.style.backgroundImage = TracksBackimage
            imagechangingTwo()
            imagechangingTwo(`${TracksBackimage}`)
        }

        //back image for T-shirt
        else if (SelectedProduct == `url("https://rukminim2.flixcart.com/image/832/832/kflftzk0-0/t-shirt/y/3/i/l-msp19pn010b-metronaut-original-imafwyf78bvf4rsy.jpeg?q=70")`) {
            imageTwo.style.backgroundImage = TShirtBackimage
            imagechangingTwo(`${TShirtBackimage}`)
        }

        //back image for watch
        else if (SelectedProduct == `url("https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/i/2/2/-original-imagzvhswuuzay6x.jpeg?q=70")`) {
            imageTwo.style.backgroundImage = WatchBackimage
            imagechangingTwo(`${WatchBackimage}`)
        }

    }
} else {
    console.log('Background image URL not found in local storage');
}


//Funtionally for nav bar
let jeansNavBtn = document.getElementById("jeans-nav-btn")
let watchsNavBtn = document.getElementById("Watch-nav-btn")
let TracksNavBtn = document.getElementById("Tracks-nav-btn")
let TShirtNavBtn = document.getElementById("TShirt-nav-btn")
let ShoesNavBtn = document.getElementById("Shoes-nav-btn")

//function to add page according to navbar li click
jeansNavBtn.addEventListener('click', () => [
    mainPhoto.style.backgroundImage = SelectedProduct
])