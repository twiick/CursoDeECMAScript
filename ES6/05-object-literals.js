// Template literals
function newUser(user,age,country,uId){
    return {
        user,
        age,
        country,
        id:uId
    };
}

console.log(newUser("twiick",21,"Colombia",1));