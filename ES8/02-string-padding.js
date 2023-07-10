const string="Hello";
let padding=5;
console.log(string.padStart(padding+string.length,"-").padEnd((padding*2)+string.length,"-"));