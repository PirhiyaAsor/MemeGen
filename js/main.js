'use strict'

var gCanvas
var gCtx
var gGallery
var gStartPos
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']


function init() {
    gCanvas = document.querySelector('canvas');
    gCtx = gCanvas.getContext('2d');
    gGallery = document.querySelector('.main-gallery')
    renderGallery()
    addListeners()
    getMeme()
}

function setView(pageName) {
    const elBody = document.querySelector('.body')
    const elAbout = document.querySelector('.about')
    const elSearch = document.querySelector('.content-filtering')

    resetMeme()

    switch (pageName) {
        case 'Gallery':
            renderGallery()
            gMemeCanvas.style.display = 'none'
            gGallery.style.display = 'grid'
            elSearch.style.display = 'flex'
            elBody.classList.remove('canvas-open')
            elAbout.style.display = 'flex'
            break;
    }
}

function onDown(ev) {
    const pos = getEvPos(ev)
    var meme = getMeme()
    if (!isLineClicked(pos)) {
        return
    }
    setLineDrag(true)
    gStartPos = pos
    document.body.style.cursor = 'grabbing'
}
function onMove(ev) {
    const meme = getMeme()
    if (meme.lines[meme.selectedLineIdx].isDrag) {
        const pos = getEvPos(ev)
        const dx = pos.x - gStartPos.x
        const dy = pos.y - gStartPos.y
        moveLine(dx, dy)
        gStartPos = pos
        renderMeme()
    }

}
function onUp() {
    setLineDrag(false)
    document.body.style.cursor = 'grab'
}

function getEvPos(ev) {
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    if (gTouchEvs.includes(ev.type)) {
        ev.preventDefault()
        ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
        }
    }
    return pos
}