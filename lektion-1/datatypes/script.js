// variabel = nått som kan innehålla information

/*
        Javascript
        -----------------------------------------------
        String      =   Text
        Number      =   Tal, decimaltal
        Boolean     =   Sant/falskt true/false
        null        =   null dvs tomt inget alls
        undefined   =   ej specificerat varjen string null bool eller nått
        Object      =   ett object/klass som innehåller ett eller flera värden
        Symbol      =   symboler kommer vi inte att använda
       
*/

/*
        Deklarera variabler
        -----------------------------------------------
        name = 'Hans'
        var name = 'Hans'
        let name = 'Hans'
        const name = 'Hans'
        var = global variabel - accessbar överallt i koden
        let = lokal variabel - accessbar bara inom det angivna området
        const = konstant kan inte skrivas över (undantag finns)
        C# exempel.
            string name = "Hans";
            int age = 35;
        JS exempel
            let name = 'Hans';
            let age = 35;
*/

/*            
    Strings:
        let name = "Hans"   - Använd INTE!
        let name = 'Hans'   - Denna ska du använda
        let name = `Hans`   - Använd denna när du kör placeholders ( shift + ´ , tryck mellanslag)
        avsluta varje rad med ett ; (det behövs inte men det är bra att göra)
*/

let doNotUseThis = "Hans";
let doUseThisOne = 'Hans';
let age = 35;

let withoutPlaceholders = 'Hej mitt namn är ' + doUseThisOne + ' och jag är ' + age + ' år gammal.';
let withPlaceholders = `Hej mitt namn 'är' ${doUseThisOne} och jag "är" ${age} år gammal.`;
//console.log(withoutPlaceholders);
//console.log(withPlaceholders);


var varName = 'var Hans';
let letName = 'let Hans';
const constName = 'const Hans';

// console.log(varName);
// console.log(letName);
// console.log(constName);

varName = 'Hans';
letName = 'Hans';
// constName = 'Hans'; kan inte skrivas över. Ger felmeddelande

// console.log(varName);
// console.log(letName);
// console.log(constName);


let nullValue = null;
let undefinedValue = undefined;
let Value1, Value2;

let numberValue = 12; 
let numberValue1 = 12.1; 
let bignumberValue = 8787878759686759867598765967859;

// console.log(nullValue);
// console.log(undefinedValue);
// console.log(Value1);
// console.log(typeof nullValue);
// console.log(typeof numberValue);
// console.log(typeof numberValue1);
// console.log(bignumberValue);


/*
Javascript:     camelCase       firstName
C#              Pascal          FirstName
*/

let myName = 'Hans Mattin-Lassei';

// hitta antal tecken i en text:
console.log(myName.length);

// konvertera till versaler
console.log(myName.toUpperCase());

// konvertera till gemener
console.log(myName.toLowerCase());

// dela upp texten i olika delar
console.log(myName.split(' '));
let names = myName.split(' ');
let firstName = names[0];
let lastName = names[1];
console.log(`Mitt förnamn är ${firstName} och efternamnet är ${lastName}`);


let isActive = true;
console.log(isActive);


/*
Object = Klasser
Object = Json (JavaScript Object Notation)
*/

let user = {
    firstName: 'Hans',
    lastName: 'Mattin-Lassei',
    age: 35,
    address: {
        street: 'Havsörnsgränd',
        nr: 2,
        zipCode: '123 49',
        city: 'Farsta'
    },
    phoneNumbers: [
        '073-7884713'
    ],
    isActive: true
};

console.log(`Användaren heter ${user.firstName} och bor i ${user.address.city}.`)





   

