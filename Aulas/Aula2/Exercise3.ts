class ListHandler<T> {
  numbers: T[] = [];
  
  constructor() { }
  
  add(adicionar: T) {
      this.numbers.push(adicionar);
  }
  
  remove(remover: T) {
    const index = this.numbers.indexOf(remover)
    if (index !== -1) {
      this.numbers.splice(index, 1);
      console.log(`The item ${remover} was deleted successfully!`)
    } else {
      console.log(`The item ${remover} does not exist.`)
    }
  }
  
  getAll() {
    return this.numbers;
  }
}

const myHandler = new ListHandler<number>();

myHandler.add(1);
myHandler.add(2);
myHandler.add(3);
myHandler.add(6);

myHandler.remove(2)
myHandler.remove(8)

console.log(myHandler.getAll())
