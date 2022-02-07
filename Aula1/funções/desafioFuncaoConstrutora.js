/* 
Minha tentativa

function Pessoa(nome = 'fulano', falar='Meu nom né: '){
    return falar+nome
}

const Ricardo = new Pessoa

console.log(Ricardo.falar) */

// Exemplo professor

function Pessoa(nome){
    
        this.nome = nome
    

    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()