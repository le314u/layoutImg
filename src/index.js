#! /usr/bin/env node
const {qtdArgsValid, args} = require('./cli')
const {openConf} = require('./conf')
const {composerImg} = require('./composer')

argv = args()
if(! qtdArgsValid(argv)){
    console.log("Quantidade de parametros inconsistentes")
    process.exit(1)
}
arqConf = argv[0]
pathFileFront = argv[1]

openConf(arqConf)
    .then((data)=>{
        jsonConf = JSON.parse(data)
        jsonConf.pathFileFront = pathFileFront
        return jsonConf
    }).then((jsonConf)=>{
        composerImg(jsonConf)
    })