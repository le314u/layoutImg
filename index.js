dataMod ={
    "pathImg":"imgs/back6.png",
    "resize":{
        "width":1521,
        "height":954
    },
    "positionFront":{
        "x":240,
        "y":70
    }
}


pathFront = 'imgs/front.png'
pathBack = dataMod["pathImg"]

var Jimp = require('jimp');
imgs = {}

Jimp.read(pathFront)
.then((front)=>{
    imgs.front=front
    return Jimp.read(dataMod["pathImg"])
}).then((back)=>{
    // Sobrepoe a iamgem
    imgs.back = back
    resize = dataMod["resize"]
    imgs.front.resize(resize["width"],resize["height"])
    position = dataMod["positionFront"]
    imgs.back.blit(imgs.front, position["x"], position["y"])
    // Escreve o Texto
    Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(font => {
        text = 'le314u'
        xMid = xTextCenter(font,text,imgs.back)
        imgs.back.print(font, xMid, 0, text);
    }).then(()=>{
    // Redimensiona a img
        let width = imgs.back.bitmap.width
        let height = imgs.back.bitmap.height
        imgs.back.resize(width*0.5,height*0.5)
        imgs.back.write('out/saida.jpg')
    })
})

function xTextCenter(font,text,img){
    midCanvas = img.bitmap.width/2
    sizeText = Jimp.measureText(font, text)
    positionX = midCanvas - sizeText/2
    return positionX
}