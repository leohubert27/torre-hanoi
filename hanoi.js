
class Pilha {
    constructor() {
        this.itens = [];
    }

    // Adiciona um disco na pilha (push)
    empilhar(disco) {
        this.itens.push(disco);
    }

    // Remove o disco da pilha (pop)
    desempilhar() {
        return this.itens.pop();
    }

    // Verifica o topo da pilha
    topo() {
        return this.itens[this.itens.length - 1];
    }

    // Verifica se a pilha está vazia
    estaVazia() {
        return this.itens.length === 0;
    }
}


let P1 = new Pilha();
let P2 = new Pilha();
let P3 = new Pilha();


P1.empilhar(3);  // Disco maior
P1.empilhar(2);  // Disco médio
P1.empilhar(1);  // Disco menor


function exibirEstado() {
    console.log("Pilha P1:", P1.itens);
    console.log("Pilha P2:", P2.itens);
    console.log("Pilha P3:", P3.itens);
    console.log('---');
}


exibirEstado();



P3.empilhar(P1.desempilhar());
exibirEstado();

P2.empilhar(P1.desempilhar());
exibirEstado();

P2.empilhar(P3.desempilhar());
exibirEstado();

P3.empilhar(P1.desempilhar());
exibirEstado();

P1.empilhar(P2.desempilhar());
exibirEstado();

P3.empilhar(P2.desempilhar());
exibirEstado();

P3.empilhar(P1.desempilhar());
exibirEstado();
