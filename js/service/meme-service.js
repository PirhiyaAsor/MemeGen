'use strict'

var gCanvas
var gCtx
var gIsDrag
var gGallery
var gFilteredImgs = []




var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [{
        txt: 'Write something here',
        size: 40,
        font: 'Impact',
        align: 'left',
        color: 'white',
        strokeColor: 'black',
        pos: { x: 280, y: 50 },
        isDrag: false,
    }, {
        txt: 'Write something here',
        size: 40,
        font: 'Impact',
        align: 'left',
        color: 'white',
        strokeColor: 'black',
        pos: { x: 280, y: 400 },
        isDrag: false,
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
            txt: 'Write something here',
            size: 40,
            font: 'Impact',
            align: 'left',
            color: 'white',
            strokeColor: 'black',
            pos: { x: 280, y: 50 },
            isDrag: false,
        }, {
            txt: 'Write something here',
            size: 40,
            font: 'Impact',
            align: 'left',
            color: 'white',
            strokeColor: 'black',
            pos: { x: 280, y: 500 },
            isDrag: false,
        }
        ]
    }
}

function getMeme() {
    return gMeme
}

function setGMemes(val) {
    gMeme = val
}

function setLineText(txt) {
    var meme = getMeme()
    meme.lines[meme.selectedLineIdx].txt = txt

}

function setTextColor(color) {
    var meme = getMeme()
    meme.lines[meme.selectedLineIdx].color = color
}

function setStrokeColor(strokeColor) {
    var meme = getMeme()
    meme.lines[meme.selectedLineIdx].strokeColor = strokeColor
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

function addLine() {
    var meme = getMeme()
    var newLine = {
        txt: 'Write something here',
        size: 40,
        font: 'Impact',
        align: 'left',
        color: 'white',
        strokeColor: 'black',
        pos: { x: 400, y: 400 },
        isDrag: false,
    }
    meme.lines.push(newLine)
}

function removeLine(){
    var meme = getMeme()
    var lineIdx = meme.selectedLineIdx
    meme.lines.splice(lineIdx,1)
}

function setAlign(align) {
    var meme = getMeme()
    meme.lines[meme.selectedLineIdx].align = align
}
function setFilterBy(value) {
    gFilteredImgs = []
    var imgs = getGImgs()
    imgs.forEach((img) => {
        img.keywords.forEach((word) => {
            if (word.includes(value)) {
                if (gFilteredImgs.includes(img)) gFilteredImgs.pop(img)
                gFilteredImgs.push(img)
            }
        })
    })
    renderMemesByFilter()
}


function isLineClicked(pos) {
    const elInput = document.querySelector('.line-txt')
    var meme = getMeme()
    var count = 0
    for (var i = 0; i < meme.lines.length; i++) {
var currLine = meme.lines[i]
        var linePos = { x: currLine.pos.x - 100, y: currLine.pos.y - 40 }
        if (pos.x < linePos.x + 290 &&
            pos.y < linePos.y + 55 &&
            pos.x > linePos.x &&
            pos.y > linePos.y) {
            meme.selectedLineIdx = count
            if(currLine.txt === 'Write something here') elInput.value = ''
            else elInput.value = currLine.txt
            return true
        }
        count++
    }
    return false
}

function setLineDrag(isDrag) {
    var meme = getMeme()
    meme.lines[meme.selectedLineIdx].isDrag = isDrag
}

function moveLine(x, y) {
    var meme = getMeme()
    meme.lines[meme.selectedLineIdx].pos.x += x
    meme.lines[meme.selectedLineIdx].pos.y += y
}



function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'Your Canvas'
}

function uploadImg(elLink) {
    if (elLink.innerText === '') { }
    console.log(elLink.svg);

    const imgDataUrl = gCanvas.toDataURL("image/jpeg")

    function onSuccess(uploadedImgUrl) {
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        elLink.href = `https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}`
    }
    doUploadImg(imgDataUrl, onSuccess)
}

function doUploadImg(imgDataUrl, onSuccess) {
    const formData = new FormData()
    formData.append('img', imgDataUrl)

    fetch('//ca-upload.com/here/upload.php', {
        method: 'POST',
        body: formData
    })
        .then(res => res.text())
        .then((url) => {
            onSuccess(url)
        })
        .catch((err) => {
            console.error(err)
        })
}


