$(function() {

    $('#viewData').click(function() {  
       fetch('https://jsonplaceholder.typicode.com/todos')
         .then(res => res.json())
         .then(data => {             
             blast=data[0].title
             transfer(blast)             
          })          
           
    })        
         function transfer(sub){
             console.log(sub)
             document.getElementById('result').innerHTML = sub
       }      
})