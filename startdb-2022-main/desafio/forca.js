class Forca{
  constructor(word){
    this.word = word.toLowerCase()
  }

  objeto = {
    letrasChutadas: [],
    vidas: 6,
    palavra: []
  }


  chutar(letra) {
    let PalavraCorreta = this.word
    let resposta = []
    letra = letra.toLowerCase()
    if ((letra.length === 1) && letra.match(/[a-z]/i)) {
      if (!this.objeto.letrasChutadas.includes(letra)) {
        if (this.objeto.palavra.length === 0) {
          for (var i = 0; i < PalavraCorreta.length; i++) {
            this.objeto.palavra[i] = "_"
          }
        }
        for (var i = 0; i < PalavraCorreta.length; i++) {
          if (PalavraCorreta[i] === letra) {
            this.objeto.palavra[i] = letra
          }
        }
        if (!PalavraCorreta.includes(letra)) {
          this.objeto.vidas--
        }
        this.objeto.letrasChutadas.push(letra)
      }
    }
  }

  buscarEstado() {
    let PalavraCorreta = this.word
    let resultado
    if (this.objeto.vidas === 0) {
      resultado = "perdeu"
    }
    else if (this.objeto.vidas > 0 && this.objeto.palavra.length === PalavraCorreta.length) {
      if (this.objeto.palavra.join("") === PalavraCorreta) {
        resultado = "ganhou"
      }
    }
    else {
      resultado = "aguardando chute"
    }
    return resultado;
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    return this.objeto
    }
  }

module.exports = Forca;

