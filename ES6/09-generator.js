function* myList(list){
    for(let i=0;i<list.length;i++){
        yield list[i];
    }
}

const newList=myList(["Daniel","Muricio","Laura","Daniela","Juan","Felipe"]);

for(let x=0;x<10;x++){
    console.log(newList.next().value);
}
