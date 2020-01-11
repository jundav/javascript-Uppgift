$(function(){
   
    function validateField(input) {
        let value = $(input).val(); 
        let newinput = $(input).attr('data-fieldName')  
         
        
        if(value === '') {
            $(`${input}_Error`).text('Du måste ange ett' + " " + newinput)
        }
        else if(value.length < 2) {
            $(`${input}_Error`).text('Du måste ange minst 2 tecken' + " " + newinput)
        }
        else{
            $(`${input}_Error`).text('');
        }
        
    }

    $('#oneForm').on('submit',function(e) {
        //förhindra att den skickat data 
        e.preventDefault();
        

        validateField('#firstName')
        validateField('#lastName')
        





    })


})