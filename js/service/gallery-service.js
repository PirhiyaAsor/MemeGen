'use strict'

var imgNextIdx = 1
var gImgs = [
    { id: imgNextIdx++, url: "../../img/1.jpg", keywords: ['funny','men'] },
    { id: imgNextIdx++, url: "../../img/2.jpg", keywords: ['dog', 'cute'] },
    { id: imgNextIdx++, url: "../../img/3.jpg", keywords: ['dog' ,'cute'] },
    { id: imgNextIdx++, url: "../../img/4.jpg", keywords: ['cat', 'cute'] },
    { id: imgNextIdx++, url: "../../img/5.jpg", keywords: ['funny', 'cute'] },
    { id: imgNextIdx++, url: "../../img/6.jpg", keywords: ['funny','men'] },
    { id: imgNextIdx++, url: "../../img/7.jpg", keywords: ['funny', 'cute'] },
    { id: imgNextIdx++, url: "../../img/8.jpg", keywords: ['funny','men'] },
    { id: imgNextIdx++, url: "../../img/9.jpg", keywords: ['funny', 'evil'] },
    { id: imgNextIdx++, url: "../../img/10.jpg", keywords: ['funny', 'men'] },
    { id: imgNextIdx++, url: "../../img/11.jpg", keywords: [ 'funny','men'] },
    { id: imgNextIdx++, url: "../../img/12.jpg", keywords: ['men','funny'] },
    { id: imgNextIdx++, url: "../../img/13.jpg", keywords: ['funny', 'men'] },
    { id: imgNextIdx++, url: "../../img/14.jpg", keywords: ['men', 'funny'] },
    { id: imgNextIdx++, url: "../../img/15.jpg", keywords: ['men', 'funny'] },
    { id: imgNextIdx++, url: "../../img/16.jpg", keywords: ['funny', 'men'] },
    { id: imgNextIdx++, url: "../../img/17.jpg", keywords: ['putin', 'men'] },
    { id: imgNextIdx++, url: "../../img/18.jpg", keywords: ['buzz','comic'] },
    
]

function renderGallery() {
    const elGrid = document.querySelector('.main-gallery')
    var strHtml = ''
    gImgs.forEach(img =>
        strHtml += `<img onclick="onImgSelect(${img.id})" class="img" src=${img.url} alt="">`
    )
    elGrid.innerHTML = strHtml
}



function renderMemesByFilter() {
    const elGrid = document.querySelector('.main-gallery')
    var strHtml = ''
    gFilteredImgs.forEach(img =>
        strHtml += `<img onclick="onImgSelect(${img.id})" class="img img${img.id}" src=${img.url} alt="">`
    )
    elGrid.innerHTML = strHtml
}

function getGImgs() {
    return gImgs
}
