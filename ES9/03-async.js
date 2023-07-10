async function* anotherGenerator(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2)
    yield await Promise.resolve(3)
}

const other=anotherGenerator()

other.next().then(Response=>console.log(Response.value))
other.next().then(Response=>console.log(Response.value))
other.next().then(Response=>console.log(Response.value))
console.log("Hello");


async function arrayOfNames(array){
    for await(let values of array){
        console.log(values);
    }
}

const names= arrayOfNames(["Juana","Martina","Leonel","Arian"]);
console.log("After");