var postRequestBody = localStorage.getItem('postRequestBody');

if (postRequestBody) {
    let mainPhoto = document.getElementById("mainPhotodiv")

    var ChoiceOne = document.getElementsByClassName('Choice-one');
    for (var i = 0; i < ChoiceOne.length; i++) {
        var divElement = ChoiceOne[i];
        divElement.style.backgroundImage = postRequestBody;
    }

    var ChoiceTwo = document.getElementsByClassName('Choice-two');
    for (var i = 0; i < ChoiceTwo.length; i++) {
        var divElement = ChoiceTwo[i];
        divElement.style.backgroundImage = postRequestBody;
    }

    mainPhoto.style.backgroundImage = postRequestBody;
} else {
    console.log('Background image URL not found in local storage');
}