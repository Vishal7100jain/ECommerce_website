let postRequestBody = localStorage.getItem('postRequestBody');
let ShirtBackimage = "url('https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/m/t/f/s-st10-vebnor-original-imagprjgqffut9wf.jpeg?q=70')"
let jeansBackimage = "url('https://rukminim2.flixcart.com/image/832/832/xif0q/jean/c/v/e/-original-imaghseb6wjdg9un.jpeg?q=70')"
let ShoesBackimage = "url('https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/j/v/9/6-tm-12-6-trm-white-original-imagjqyzntcvcmhz.jpeg?q=90')"
let TracksBackimage = "url('https://dpassion.com/cdn/shop/products/057A5313_1000x.jpg?v=1678771278')"
let TShirtBackimage = "url('https://rukminim2.flixcart.com/image/832/832/jv5k2a80/t-shirt/e/f/h/m-msp19pn010b-metronaut-original-imafg49sb7z5ecx7.jpeg?q=70')"
let WatchBackimage = "url('https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/d/u/k/-original-imagzzukgevbkh9w.jpeg?q=70')"

if (postRequestBody) {
    //Main image of the product
    let mainPhoto = document.getElementById("mainPhotodiv")
    mainPhoto.style.backgroundImage = postRequestBody;

    //Choice for color
    let ChoiceOne = document.getElementsByClassName('Choice-one');
    for (let i = 0; i < ChoiceOne.length; i++) {
        let imageOne = ChoiceOne[i];
        imageOne.style.backgroundImage = postRequestBody;
        //Too change the main image to the seleted image
        imageOne.addEventListener('click', () => {
            mainPhoto.style.backgroundImage = postRequestBody
        })
    }

    let ChoiceTwo = document.getElementsByClassName('Choice-two');
    for (let i = 0; i < ChoiceTwo.length; i++) {
        let imageTwo = ChoiceTwo[i];
        imageTwo.style.backgroundImage = postRequestBody;

        //Too change the main image to the seleted image
        function imagechangingTwo() {
            imageTwo.addEventListener('click', (e) => {
                mainPhoto.style.backgroundImage = imageTwo.style.backgroundImage
            })
        }

        //setting the back image 
        //back image for Shirt
        if (postRequestBody == `url("https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/s/u/f/s-st10-vebnor-original-imagprjgsdzafrqb.jpeg?q=70")`) {
            imageTwo.style.backgroundImage = ShirtBackimage
            imagechangingTwo()
        }

        //back image for jeans
        else if (postRequestBody == `url("https://rukminim2.flixcart.com/image/832/832/xif0q/jean/n/r/2/-original-imaghsebtyzqzkyv.jpeg?q=70")`) {
            imageTwo.style.backgroundImage = jeansBackimage
            imagechangingTwo()
        }

        //back image for Shoes
        else if (postRequestBody == `url("https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/7/2/m/6-tm-12-6-trm-white-original-imagjqyzz8z9jrgf.jpeg?q=90")`) {
            imageTwo.style.backgroundImage = ShoesBackimage
            imagechangingTwo()
        }

        //back image for Tracks
        else if (postRequestBody == `url("https://dpassion.com/cdn/shop/products/057A5307_1000x.jpg?v=1678771278")`) {
            imageTwo.style.backgroundImage = TracksBackimage
            imagechangingTwo()
        }

        //back image for T-shirt
        else if (postRequestBody == `url("https://rukminim2.flixcart.com/image/832/832/kflftzk0-0/t-shirt/y/3/i/l-msp19pn010b-metronaut-original-imafwyf78bvf4rsy.jpeg?q=70")`) {
            imageTwo.style.backgroundImage = TShirtBackimage
            imagechangingTwo()
        }

        //back image for watch
        else if (postRequestBody == `url("https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/i/2/2/-original-imagzvhswuuzay6x.jpeg?q=70")`) {
            imageTwo.style.backgroundImage = WatchBackimage
            imagechangingTwo()
        }

    }
} else {
    console.log('Background image URL not found in local storage');
}