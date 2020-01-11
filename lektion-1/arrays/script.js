/*
    C#
        Array:      public string[] names = new string[10];
        List:       public List<string> names = new List();
    JS
        Array:      let names = [];
                    const name = []; (kan lägga till och ta bort i arrayen trots att det är const)
*/

// DETTA ÄR FEL SÄTT!
const multiArray = ['23',23,true,{firstName: 23}];

// DETTA ÄR RÄTT SÄTT!
const users = [
    { firstName: 'Hans', lastName: 'Mattin-Lassei'},
    { firstName: 'Tommy', lastName: 'Mattin-Lassei'},
    { firstName: 'Anki', lastName: 'Mattin-Lassei'},
];

const names = ['Hans','Tommy','Anki'];


// Hämta information från en array
console.log(names);
console.log(names[0]);
console.log(names[2]);

// Lägg till information i början av en array
names.unshift('Anna');
console.log('Med unshift: ' + names)

// Ta bort information i början av en array
names.shift();
console.log('Med shift: ' + names);

//Lägg till information i slutet av en array
names.push('Anna');
console.log('Med push: ' + names)

//Ta bort information i slutet av en array
names.pop();   //eller names.pop('anna')
console.log('Med pop: ' + names)

//från python
list=names.pop()
console.log('The last person entered in our group is ' + list)

//från python you can actually use pop() to remove an item in a list at any position
//by including the index of the item u want to remove.But this doesn't work in 
//javascript. Here we use shift
//first_member=names.pop(0)
//console.log('The first member of our group is ' + first_member)

// Ändra ett specifikt värde i en array
names[1] = 'Ändrat';
console.log('Ändrat ' + names)
names[2]='dawit'
console.log('Adding new memeber to z list ' + names)

//To print out specific member e.g memeber who is in z 
//middle
console.log(names[2])

x=names.length
console.log(x)

names.reverse()
console.log(names)  

names.sort()  
console.log(names)





//possible in python not javascript
    //In pyhon u can pop to remove item from any position but in java its only from the last position
          //names.pop(0)
    //Printing out the last item     
          //console.log(names[-1])
          //p.out the last item in the list
    //Removing an item by Value, sometimes you don't z position
          //names.remove('ducatii')
    //Removing item position you might knw
          //del names[1] 










//You might want to remove a user from a list of active members
//and then add that user to list of inactive memebers.
