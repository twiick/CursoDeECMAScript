// Declaración
class User{
    // Constructor
    constructor(name, age){
        console.log("Nuevo usuario");
        // This
        this.name=name;
        this.age=age;
    }
    // Métodos
    speak(){
        return "Hello";
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
    // Getter and Setter
    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age=n;
    }
};
// Instancia de la clase
const twiick=new User("Twiick",21);
// Llamar Funciones de una clase
console.log(twiick.greeting());
// Llamar y cambiar valores de una clase
console.log(twiick.uAge);
console.log(twiick.uAge=47);
console.log(twiick);