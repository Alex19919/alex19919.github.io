// TASK 1
const person = {
    name: 'Oleksandr',
    age: 33,
  };
  
  console.log(Object.values(person));
  
  // TASK 2
  person.name = {
    firstName: 'Johnny',
    lastName: 'Brasco',
  };
  
  console.log(Object.values(person.name));
  
 // TASK 3 - 4
  
  const person3 = {
    name: {
        firstName: "John",
        lastName: "Black",
    },
    age: 44,
    bio: function(){
        return console.log(
            "Name:",
            this.name.firstName,
            this.name.lastName,
            ",",
            "Age:",
            this.age
          );
        },
            introduceSelf: function () {
                return console.log("Hi! I'm", this.name.firstName);
              },
    };
    
person3.bio();
person3.introduceSelf();

 
  
  // TASK 5
  
  function createPerson (name){
    return {
        name: name,
        introduceSelf: function () {
            return console.log("Hi, I'm", this.name);
        }, 
    };
}

let person1 = createPerson("Stepan");
let person2 = createPerson("Marta");

person1.introduceSelf();
person2.introduceSelf();
  
 // TASK 6
 function Person(name) {
    this.name = name;
    this.introduceSelf =
       function introduceSelf() {
          return `Hi I'm ${this.name}`
        }
      }
    const mary = new Person("Mary");
    const tom = new Person("Tom");

    console.log(mary.introduceSelf());
    console.log(tom.introduceSelf());
   
    console.log(Object(mary, "prop"));
// mary does not have prop "prop";

// TASK 7
const DirtyMartini = {
  english_please() {
    console.log(`
        ingredients:\n
        \t6 fluid ounces gin\n
        \t1 dash dry vermouth (0.0351951ml)\n
        \t1 fluid ounce brine from olive jar\n
        \t4 stuffed green olives
        `);
  },

  excuse_my_french() {
    console.log(`
        ingrédients:\n  
        \t170.4786 ml de gin\n
        \t1 trait de vermouth sec (0.0351951ml)\n 
        \t28.4131 ml de saumure du pot d'olive\n
        \t4 olives vertes farcies\n
    `);
  },
};

DirtyMartini.english_please();
DirtyMartini.excuse_my_french();