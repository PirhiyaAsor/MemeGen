'use strict'

console.log('sprint 2 ');

var gMemeCanvas = document.querySelector('.meme-canvas')



function renderMeme() {
    var meme = getMeme()
    var memeImg = gImgs.find(img => img.id === meme.selectedImgId)
    var img = new Image()
    img.src = memeImg.url
    img.onload = function () {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        for (var i = 0; i < meme.lines.length; i++) {
            var line = meme.lines[i]
            gCtx.textAlign = line.align
            gCtx.font = `${line.size}px ${line.font}`
            gCtx.fillStyle = line.color
            gCtx.strokeStyle = line.strokeColor
            gCtx.fillText(line.txt, 40, 60 * (i + 1))
            gCtx.strokeText(line.txt, 40, 60 * (i + 1))
            gCtx.beginPath()
            if (i === meme.selectedLineIdx) gCtx.strokeStyle = 'yellow'
            else gCtx.strokeStyle = 'transparent'
            gCtx.rect(line.pos.x, line.pos.y - 40, line.txt.length * 20, line.size + 15)
            gCtx.stroke()
        }
    }
}

function onImgSelect(id) {
    setImg(id)
    const elSearch = document.querySelector('.content-filtering')
    const elBody = document.querySelector('.body')
    const elAbout = document.querySelector('.about')
    document.querySelector('.line-txt').value = ''
    gMemeCanvas.style.display = 'flex'
    gGallery.style.display = 'none'
    elAbout.style.display = 'none'
    elSearch.style.display = 'none'
    elBody.classList.add('canvas-open')
    renderMeme()
}

function resizeCanvas(id) {
    var img = getGImgs()
}

function onIncreaseFontSize() {
    increaseFontSize()
    renderMeme()
}
function onDecreaseFontSize() {
    decreaseFontSize()
    renderMeme()
}
function onSetLineText(txt) {
    setLineText(txt)
    renderMeme()
}
function onSetTextColor(color) {
    setTextColor(color)
    renderMeme()
}

function onSwitchLines() {
    var inputTxt = document.querySelector('.line-txt')
    switchLines()
    if (gMeme.lines[gMeme.selectedLineIdx].txt === 'Write something here') inputTxt.value = ''
    else inputTxt.value = gMeme.lines[gMeme.selectedLineIdx].txt
    renderMeme()
}

function onSetStrokeColor(strokeColor) {
    setStrokeColor(strokeColor)
    renderMeme()
}

function onSetFilterBy(el) {
    var value = ''
    setFilterBy(value)
}

function onAddLine() {
    addLine()
    renderMeme()
}

function onSetAlign(align) {
    setAlign(align)
    renderMeme()
}

function onRemoveLine() {
    removeLine()
    renderMeme()
}
