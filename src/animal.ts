abstract class Animal {
    public nome: string;
    public som: string;
    public idade: number;
  
    constructor (nome: string, idade: number,som: string) {
      this.nome = nome;
      this.idade = idade;
      this.som = som;
    }
}
  
  export { Animal };