// Pega os argumentos CLI
function args(){
    return process.argv.splice(2,process.argv.length-1)
}

// Verifica a quantidade de parametros
function qtdArgsValid(args){
    if(args.length < 2){
        console.log('Esta faltando argumentos de entrada')
        return false
    }else if (args.length > 2){
        console.log("Esta passando argumentos a mais")
        return false
    }
    return true
}

module.exports = {
    args:args,
    qtdArgsValid: qtdArgsValid
}