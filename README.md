# layoutImg

O executavel é encontrado em:
`./src/index.js`

Para o funcionamento correto é necessário passar dois argumentos via CLI
1. localização do arquivo de configuração(modelo de layout) `./config/<Algum dos arquivos ja prontos>` 
2. localização da imagem que será inclusa(front) `<endereço absoluto ou relativo da imagem>`

---

Para criação de um arquivo de configuração como os presentes em `./conf/<files.json>`
o json tem a seguinte estrutura:
```
{
    "pathFileBack":"<Endereço da Imagem que ficará no fundo>",
    "resize":{
        "width":<Largura da imagem inserida>,
        "height":<Altura da imagem inserida>
    },
    "positionFront":{
        "x":<Localização X dentro da imagem $pathFileBack onde será inserida a imagem> ,
        "y":<Localização Y dentro da imagem $pathFileBack onde será inserida a imagem>
    }
}
```
