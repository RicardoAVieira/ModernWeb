const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const pessoaQFala = pessoa.falar

pessoaQFala() //conflito entre paradigmas: funcionar e Orientacao a Objetos.

const PessoaQueFala = pessoa.falar.bind(pessoa)

PessoaQueFala()

//This e Bind em uma constante

function Pessoa2(){
    this.idade = 0

    const self = this
    setInterval(function( ){
        self.idade++
        console.log(self.idade)
    }/* .bind(this) */, 1000)
}

new Pessoa2