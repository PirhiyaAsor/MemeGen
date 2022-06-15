'use strict'

// var gCanvas
// var gCtx
// var gStartPos
// var gIsDrag = false
// const gTouchEvs = ['touchstart', 'touchmove', 'touchend']


// function drawText(text, x, y) {
//     gCtx.lineWidth = 2
//     gCtx.strokeStyle = gCurrStrokeColor
//     // gCtx.fillStyle = gCurrFillColor
//     gCtx.font = '40px Arial'
//     // gCtx.fillText(text, x, y)//Draws (fills) a given text at the given (x, y) position.
//     gCtx.strokeText(text, x, y)//Draws (strokes) a given text at the given (x, y) position.
// }

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [{
        txt: 'Enter text here',
        size: 40,
        font: 'Impact',
        align: 'left',
        color: 'white',
        strokeColor: 'black'
    }, {
        txt: 'Enter text here',
        size: 40,
        font: 'Impact',
        align: 'left',
        color: 'white',
        strokeColor: 'black'
    }]
}

function setImg(id) {
    gMeme.selectedImgId = id
}
function resetMeme() {
    gMeme = {
        selectedImgId: 1,
        selectedLineIdx: 0,
        lines: [{
            txt: 'Enter text here',
            size: 40,
            font: 'Impact',
            align: 'left',
            color: 'white',
            strokeColor: 'black'
        }, {
            txt: 'Enter text here',
            size: 40,
            font: 'Impact',
            align: 'left',
            color: 'white',
            strokeColor: 'black'
        }
        ]
    }
}

function getMeme() {
    return gMeme
}

function setLineText(txt) {
    var meme = getMeme()
    meme.lines[meme.selectedLineIdx].txt = txt

}

function setTextColor(color) {
    var meme = getMeme()
    meme.lines[meme.selectedLineIdx].color = color
}

function increaseFontSize() {
    var meme = getMeme()
    meme.lines[meme.selectedLineIdx].size++

}
function decreaseFontSize() {
    var meme = getMeme()
    meme.lines[meme.selectedLineIdx].size--
}

function switchLines() {
    var meme = getMeme()
    meme.selectedLineIdx++
    if (meme.selectedLineIdx > meme.lines.length - 1) meme.selectedLineIdx = 0
}
function setStrokeColor(strokeColor) {
    var meme = getMeme()
    meme.lines[meme.selectedLineIdx].strokeColor = strokeColor
}
