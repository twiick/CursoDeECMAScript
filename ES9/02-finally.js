const anotherFunction=()=>{
    return new Promise((resolve,reject)=>{
        if(true){
            resolve("Lo logramos");
        }
        else{
            reject("No funciono");
        }
    })
}

anotherFunction()
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
    .finally(()=>{
        console.log("Este es el comentario final");
    })