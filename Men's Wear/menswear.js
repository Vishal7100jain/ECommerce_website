let section = document.getElementById('section')
let sectionDiv = section.querySelectorAll('div')
Array.from(sectionDiv).forEach((div) => {
    div.addEventListener('click', (event) => {
      var selectedDiv = event.target;
      var DivBgImageSRC = window.getComputedStyle(selectedDiv).getPropertyValue('background-image');
      let imageurl = DivBgImageSRC

      fetch('Product.html', {
        method: 'POST',
        body: imageurl,
      })
        .then(function (response) {
          return response.json(); // Parse response as JSON
        })
        .then(function (data) {
          console.log(data); // Access imageurl value
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  });
  
