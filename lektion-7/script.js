/* const form = document.querySelector('#demo-form')
const input = document.querySelector('#demo-input')
const results = document.querySelector('#demo-results')

function validateInput(inputValue){
    if(inputValue === ''){
        return true;
    }

    console.log('NU finns det ett värde')
    return false;
}

function sendRequest(){
    
    console.log(validateInput(input.value))
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    sendRequest();
}) */

$(function(){

       $('#btnGet').click(function(e){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
          document.getElementById('get-result').innerHTML=data 
             
            
                
            
        })
    })
    

})







// Syntax:node.appendChild(node)
// The appendChild() method appends a node as the last child of a node.
// Tip: If you want to create a new paragraph, with text, remember to create 
// the text as a Text node which you append to the paragraph, then append
//  the paragraph to the document.
// Tip: Use the insertBefore() method to insert a new child node before a 
// specified, existing, child node.

// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(res => res.json())
// .then(data => {
  

//     for(let obj of data){
//         var node = document.createElement("Li"); 
//         var textnode = document.createTextNode(obj.title)
//         node.appendChild(textnode);
//         document.getElementById("results").appendChild(node);
        
//     }    
// })