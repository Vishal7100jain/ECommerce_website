window.addEventListener('DOMContentLoaded', () => {
  localStorage.clear()
})
let section = document.getElementById('section')
let sectionDiv = section.querySelectorAll('div')
Array.from(sectionDiv).forEach((div) => {
  div.addEventListener('click', (event) => {
    
    var selectedDiv = event.target;
    var DivBgImageSRC = window.getComputedStyle(selectedDiv).getPropertyValue('background-image');
    localStorage.setItem('postRequestBody', DivBgImageSRC);

    setInterval(() => {
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key.startsWith("postRequestBody")) {
          window.location.href = "Product.html"
        }
      }
    },1000)
  });
});

