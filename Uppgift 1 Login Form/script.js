
function validateEmail(emailinfo){
    if($(emailinfo).val() === "")
    {   
        $('#error_email').html('Enter Your Email Address')
        return false
    }

    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($(emailinfo).val())))
    {
      $('#error_email').html('You have entered an invalid email address!')
      return false
    }
   
    else{
        $('#error_email').html('')
        return true
    }

}

function validatePassword(inputPassword){
    let password= $(inputPassword).val();

    

    if ( password.length === 0 ){
       $('#error_password').html('Please enter your password')   
       return false
    }

    if (password.length < 8 && password.length > 0){    
       $('#error_password').html('Your password must: contain atleast 8 character')
       return false
   }
   if (password.length >= 8 ){
       $('#error_password').html('')
       return true
       
    }  
   
}

// validatecheck('#checkbox'){

// }


$('#loginpage').on('submit',function(e){
  
    e.preventDefault();
    console.log(e);
    console.log($(exampleInputPassword1).val())
    console.log($(exampleCheckbox1).val())
    validateEmail('#exampleInputEmail1')
    validatePassword('#exampleInputPassword1')
    validatecheck('#checkbox')

    





})