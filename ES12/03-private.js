class user{
    constructor(username, age, country){
        this.username=username
        this.age=age
        this.country=country
    }
    // Métodos
    #speak(){
        return "Hello";
    }
    #greeting(){
        return `${this.speak} ${this.name}`
    }
    get #uAge(){
        return this.age;
    }
    set #uAge(n){
        return this.age=n;
    }
}
//Instancia de clase
const twiick=new user("Twiick",21);
console.log(twiick.age);
console.log(twiick.age=33);