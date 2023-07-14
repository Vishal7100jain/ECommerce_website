let section = document.getElementById('section')
let sectionDiv = section.querySelectorAll('div')
Array.from(sectionDiv).forEach((div)=>{
    div.addEventListener('click', (div)=>{
        var selectedDiv = div.target
        var DivBgImageSRC = window.getComputedStyle(selectedDiv).getPropertyValue('background-image')
        window.open("_blank")
    })
})