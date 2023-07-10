const fnAsync=()=>{
    return new Promise((resolve, reject)=>{
        true
        ?setTimeout(resolve("Async!!"),5500)
        :reject(new console.error("Error!!"))
    })
}

const anotherFunction=async()=>{
    const something=await fnAsync();
    console.log(something)
    console.log("Hello");
}

console.log("Before");
anotherFunction();
console.log("After")