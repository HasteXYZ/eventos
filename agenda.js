function FilaEspera() {
    this.fila = [];
  
    this.adicionar = function (item) {
      this.fila.push(item);
    };
  
    this.remover = function () {
      if (this.fila.length === 0) {
        console.log("A fila está vazia.");
      } else {
        return this.fila.shift();
      }
    };
  
    this.tamanho = function () {
      return this.fila.length;
    };
  
    this.imprimir = function () {
      console.log("Fila de espera:", this.fila);
    };
  }
  
  // Exemplo de uso:
  var fila = new FilaEspera();
  
  fila.adicionar("João");
  fila.adicionar("Maria");
  fila.adicionar("Carlos");
  
  fila.imprimir(); // Output: Fila de espera: [ 'João', 'Maria', 'Carlos' ]
  
  console.log("Tamanho da fila:", fila.tamanho()); // Output: Tamanho da fila: 3
  
  var primeiroItem = fila.remover();
  console.log("Item removido:", primeiroItem); // Output: Item removido: João
  
  fila.imprimir(); // Output: Fila de espera: [ 'Maria', 'Carlos' ]
  