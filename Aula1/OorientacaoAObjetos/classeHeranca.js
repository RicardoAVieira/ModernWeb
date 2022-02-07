class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

//Forma de declarar que uma classe herda outra em JavaScript
class Pai extends Avo{
    constructor(sobrenome,profissao  = 'Professor'){
        //Forma comun de chamar o construtor da classe pai
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai{
    constructor(){
        super('Silva')
    }
}

//Instanciando classe filho
const filho =  new Filho
console.log(filho)