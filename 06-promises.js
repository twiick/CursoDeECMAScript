const anotherFunction=()=>{
    return new Promise((resolve,reject)=>{
        if(false){
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