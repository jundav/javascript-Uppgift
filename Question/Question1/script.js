$(function(){
   
    function validateField(input) {
        let value = $(input).val();
        
        if(value.length < 1) {
            console.log('error')
        }
        else
            console.log(value);
    }

    $('#oneForm').on('submit',function(e) {
        //förhindra att den skickat data 
        e.preventDefault();
        console.log(e)

        validateField('#firstName')
        validateField('#lastName')
    })
})

//when writing name with letter more than one
//it p.out error among others. why?