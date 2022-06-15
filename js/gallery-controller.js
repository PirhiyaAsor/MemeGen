'use strict'

var gImgs = [
    [{ id: 1, url: '../img/1.jpg', keywords: ['funny', 'trump'] }],
    [{ id: 2, url: '../img/2.jpg', keywords: ['funny', 'dog'] }],
    [{ id: 3, url: '../img/3.jpg', keywords: ['funny', 'dog'] }],
]

function renderGallery() {
    const elGrid = document.querySelector('.main-gallery')
    var strHtml = ''
    gImgs.forEach(img =>
        strHtml += `<img onclick="onImgSelect(${img.id})" class="img img${img.id}" src=${img.url} alt="">`
    )
    elGrid.innerHTML = strHtml
}

