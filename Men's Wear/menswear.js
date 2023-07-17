window.addEventListener('DOMContentLoaded', () => {
  localStorage.clear()
})
let section = document.getElementById('section')
let sectionDiv = section.querySelectorAll('div')
Array.from(sectionDiv).forEach((div) => {
  div.addEventListener('click', (event) => {
    
    var selectedDiv = event.target;
    var DivBgImageSRC = window.getComputedStyle(selectedDiv).getPropertyValue('background-image');
    localStorage.setItem('SelectedProduct', DivBgImageSRC);

      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key.startsWith("SelectedProduct")) {
          window.open("/commonPage/Product.html", "_blank")
        }
      }
  });
});

