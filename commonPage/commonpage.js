let postRequestBody = localStorage.getItem('postRequestBody');

if (postRequestBody) {
    //Main image of the product
    let mainPhoto = document.getElementById("mainPhotodiv")
    mainPhoto.style.backgroundImage = postRequestBody;

    //Choice for color
    let ChoiceOne = document.getElementsByClassName('Choice-one');
    for (let i = 0; i < ChoiceOne.length; i++) {
        let divElementone = ChoiceOne[i];
        divElementone.style.backgroundImage = postRequestBody;
    }

    let ChoiceTwo = document.getElementsByClassName('Choice-two');
    for (let i = 0; i < ChoiceTwo.length; i++) {
        let divElementtwo = ChoiceTwo[i];
        divElementtwo.style.backgroundImage = postRequestBody;

        //setting the back image 
        //back image for Shirt
        if (postRequestBody == `url("https://image.made-in-china.com/2f0j00FjRYyOfKkPke/Men-s-Shirt-Fashion-Cotton-Hanging-Dyed-Gradient-Button-Chic-Shirts.webp")`) {
            let ShirtBackimage = "url('https://static-01.daraz.pk/p/9ca45c6a6ee3aa5ba34b10cde93a6e61.jpg')"
            divElementtwo.style.backgroundImage = ShirtBackimage
        }
        //back image for jeans
        else if (postRequestBody == `url("https://rukminim2.flixcart.com/image/832/832/xif0q/jean/n/r/2/-original-imaghsebtyzqzkyv.jpeg?q=70")`) {
            let jeansBackimage = "url('https://rukminim2.flixcart.com/image/832/832/xif0q/jean/c/v/e/-original-imaghseb6wjdg9un.jpeg?q=70')"
            divElementtwo.style.backgroundImage = jeansBackimage
        }

        //back image for Shoes
        else if (postRequestBody == `url("https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/7/2/m/6-tm-12-6-trm-white-original-imagjqyzz8z9jrgf.jpeg?q=90")`) {
            let ShoesBackimage = "url('https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/j/v/9/6-tm-12-6-trm-white-original-imagjqyzntcvcmhz.jpeg?q=90')"
            divElementtwo.style.backgroundImage = ShoesBackimage
        }

        //back image for Tracks
        else if (postRequestBody == `url("https://dpassion.com/cdn/shop/products/057A5307_1000x.jpg?v=1678771278")`) {
            let TracksBackimage = "url('https://dpassion.com/cdn/shop/products/057A5313_1000x.jpg?v=1678771278')"
            divElementtwo.style.backgroundImage = TracksBackimage
        }

        //back image for T-shirt
        else if (postRequestBody == `url("https://rukminim2.flixcart.com/image/832/832/kflftzk0-0/t-shirt/y/3/i/l-msp19pn010b-metronaut-original-imafwyf78bvf4rsy.jpeg?q=70")`) {
            let TShirtBackimage = "url('https://rukminim2.flixcart.com/image/832/832/jv5k2a80/t-shirt/e/f/h/m-msp19pn010b-metronaut-original-imafg49sb7z5ecx7.jpeg?q=70')"
            divElementtwo.style.backgroundImage = TShirtBackimage
        }

        //back image for watch
        else if (postRequestBody == `url("https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/i/2/2/-original-imagzvhswuuzay6x.jpeg?q=70")`) {
            let WatchBackimage = "url('https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/d/u/k/-original-imagzzukgevbkh9w.jpeg?q=70')"
            divElementtwo.style.backgroundImage = WatchBackimage
        }

    }
} else {
    console.log('Background image URL not found in local storage');
}