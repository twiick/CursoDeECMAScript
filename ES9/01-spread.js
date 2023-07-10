const user={
    username:"twiick",
    age:21,
    country:"Colombia"
};

const{username, ...values}=user;
console.log(username);
console.log(values);