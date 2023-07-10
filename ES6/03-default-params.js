// Default params
function newUser(name, age, country){
    var name=name||"Oscar";
    var age=age||18;
    var country=country||"Mexico";
    console.log(name, age, country);
}
newUser();
newUser("Daniel",15,"Colombia");

// New default params
function  newAdmin(name="Julian", age=17, country="Chile"){
    console.log(name, age, country);
}
newAdmin();
newAdmin("Ana",28,"Perú");