const nameArray = ['Hans','Isabelle','Gustav','Amanda','Ali','Sasha','Fredrik','Mali'];
const userArray = [
    { name: 'Hans', email: 'hans@hans.com', age: 35, status: true },
    { name: 'Isabelle', email: 'isabelle@domain.com', age: 28, status: true },
    { name: 'Gustav', email: 'gustav@domain.com', age: 31, status: false },
    { name: 'Amanda', email: 'amanda@domain.com', age: 42, status: true },
    { name: 'Ali', email: 'ali@domain.com', age: 23, status: true },
    { name: 'Sasha', email: 'sasha@domain.com', age: 44, status: true },
    { name: 'Fredrik', email: 'fredrik@domain.com', age: 53, status: true },
    { name: 'Mali', email: 'mali@domain.com', age: 42, status: false }
];

// lägg till i början

 // nameArray.unshift('Hejhej');
  //console.log(nameArray);

//lägg till i slutet
 // nameArray.push('dådå');
 // console.log(nameArray);

//ta bort i början
//  nameArray.shift();

//ta bort i slutet
// nameArray.pop();

//LOOPAR (for,foreach, while)
//for

//for(let i=0; i <nameArray.length; i++){
//    console.log(`Index #${i} : $(nameArray[i])`);
//}

//Loopar

for (let name of nameArray){
    console.log(name);
}

for (let user of userArray){
    console.log(user.name + ','+ user.age)
}

userArray.forEach(function(list){
    console.log(list);
});