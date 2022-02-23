//Cadeida de protótipos(prototype chain)

//Brincadeira de criar um prototipo para Objeto prototipo
Object.prototype.attr0 = 'Z' //Não Faazer isto pois pode impactar a estrutura toda do software

const avo = {attr1 :'A',attr2:'AB'}
const pai = {__proto__:avo, attr2:'B'}
const filho ={__proto__:pai, attr3:'C'}

//Ele busca sempre no primeiro da linhagem, ou seja se oa tributo existir acima na cadeia ele pega o do parente mais proximo.

console.log(filho.attr0,filho.attr1,filho.attr2,filho.attr3)


const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //Shadowing(Sombreamento) Carro-velMax
}
const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo,carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())