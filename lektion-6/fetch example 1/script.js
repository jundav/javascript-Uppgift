$(function() {

    $('#viewData').click(function() {  
       fetch('https://jsonplaceholder.typicode.com/todos')
         .then(res => res.json())
         .then(data => {             
             blast=data[0].title
             transfer(data)
             return data             
          })  
         
         .then( data => {
             replace(data)
         })
           
    })
    
        
    function transfer(sub){
             //console.log(sub)
             document.getElementById('result1').innerHTML = sub[0].title
             document.getElementById('result2').innerHTML = sub[0].id            
       }  

       function replace(past){
        document.getElementById('result1').innerHTML = past[1].title
        document.getElementById('result2').innerHTML = past[1].id  
        //document.getElementById('result').innerHTML = sub
  } 
         
             

    
})