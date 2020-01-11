$(function() {


    function validateInput(id){
        if($(id).val() === ''){
            
            $(id).addClass('is-invalid')
            $(id + '_error').removeClass('d-none')
            $(id).focus();          
        }
        else{
        
        $(id).removeClass('is-invalid')
        $(id).addClass('is-valid')

        }
    }

   $('#firstName').change(function() {
       console.log('triggered')
   });

   $('#regForm').submit((e) => {
     
    e.preventDefault();
    validateInput('#firstName')
    validateInput('#lastName')
})

});