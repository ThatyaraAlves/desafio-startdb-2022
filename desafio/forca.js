class Forca {

  constructor(palavra) {
    this.palavra = palavra
    this.dados = {
      letrasChutadas: [], // Deve conter todas as letras chutadas
      vidas: 6, // Quantidade de vidas restantes
      palavras: new Array(this.palavra.length) // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    }
    this.dados.palavras.fill('_')

  }
  find(elemento, array) {
    let resultados = []
    let idx = array.indexOf(elemento)
    while (idx != -1) {
      resultados.push(idx)
      idx = array.indexOf(elemento, idx + 1)
    }
    return resultados

  }
  chutar(letra) {

    if (isNaN(Number(letra))) {
      if (this.dados.letrasChutadas.includes(letra)) {
        console.log("Letra já foi chutada")

      }
      else if (letra.length == 1 && letra !== '') {
        this.dados.letrasChutadas.push(letra)
        if (this.palavra.includes(letra)) {
          const index = this.find(letra, this.palavra)


          let cont = 0;
          while (cont < index.length) {
            this.dados.palavras.splice(index[cont], 1, letra)
            cont++
          }

        }
        else {
          this.dados.vidas = this.dados.vidas - 1
        }

        return letra
      }

    }

  }

  buscarEstado() {
    let estado = 'aguardando chute'
    if (this.dados.vidas > 0 && !this.dados.palavras.includes('_')) {
      estado = 'ganhou'
    }
    else if (this.dados.vidas == 0 && this.dados.palavras.includes('_')) {
      estado = 'perdeu'
    }
    return estado;

  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {


    return this.dados


  }
}

module.exports = Forca;
