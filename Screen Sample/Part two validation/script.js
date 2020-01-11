$(function(){
   
    function validateField(finput,linput) {
        let fvalue = $(finput).val(); 
        let lvalue = $(linput).val();          
        
        if(fvalue === '' || lvalue === '') {
            $('#error_message').html('Du måste ange ett förnamn och efternamn')
        }
        else if(fvalue.length < 2 || lvalue.length < 2) {
            $('#error_message').html('Du måste ange minst 2 tecken')
        }
        else{
            $('#error_message').html('');
        }
        
    }

    $('#oneForm').on('submit',function(e) {
        //förhindra att den skickat data 
        e.preventDefault();
    
        validateField('#firstName','#lastName')
    })


})