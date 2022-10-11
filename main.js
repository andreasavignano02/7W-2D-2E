let p1 = new Person("Mattia", 25);

let p2 = new Person("Federico", 38);

let p3 = new Person("Gianluca", 48);

class Person{
    constructor(name,age){
    this.name = name;
    this.age = age;
    }
    agecomparison(person) {
    if(this.age > person.age) {
    console.log(`${this.name} è più grande di ${person.name}`);
    } else {
        console.log(`${person.name} è più grande di ${this.name}`);
    }
    }
}
