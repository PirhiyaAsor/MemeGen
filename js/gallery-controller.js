'use strict'



function renderGallery() {
    const elGrid = document.querySelector('.main-gallery')
    var strHtml = ''
    gImgs.forEach(img =>
        strHtml += `<img onclick="onImgSelect(${img.id})" class="img img${img.id}" src=${img.url} alt="">`
    )
    elGrid.innerHTML = strHtml
}

