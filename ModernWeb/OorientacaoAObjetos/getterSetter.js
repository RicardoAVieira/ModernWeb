const sequencia ={
    _valor:1, //Conveção que essa variavel deve ser acessada apenas internamente.
    get valor(){return this._valor++},
    set valor(valor){
        if(valor> this._valor){
            this._valor = valor
        }
    } //pode ser feito assim para adicionar algum tip de validação ao metodo
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 100
console.log(sequencia.valor, sequencia.valor)