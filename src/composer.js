
var Jimp = require('jimp');

//Mescla duas imagens
function composerImg(confJson){
    console.log("Informaçoes")
    console.log(confJson)
    imgs = {}
    Jimp.read(confJson["pathFileFront"])
    .then((front)=>{
        imgs.front=front
        return Jimp.read(confJson["pathFileBack"])
    }).then((back)=>{
        // Sobrepoe a iamgem
        imgs.back = back
        resize = confJson["resize"]
        imgs.front.resize(resize["width"],resize["height"])
        position = confJson["positionFront"]
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
}

// Seleciona o local onde o texto vai ficar
function xTextCenter(font,text,img){
    midCanvas = img.bitmap.width/2
    sizeText = Jimp.measureText(font, text)
    positionX = midCanvas - sizeText/2
    return positionX
}

module.exports = {
    composerImg: composerImg
}