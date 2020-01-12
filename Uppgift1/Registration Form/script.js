$(function(){
   
    function validateField(finput,linput) {
        let fvalue = $(finput).val(); 
        let lvalue = $(linput).val();          
        
        if(fvalue === '') {
            $('#error_fname').html('You need to provide firstname')
            return false
        }
        
        if(fvalue.length < 2)  {
            $('#error_fname').html('You need to provide atleast 2 letters')
            return false
        }
        if(lvalue === ''){
            $('#error_fname').html('')
            $('#error_lname').html('You need to provide lastname')
            return false
        }
        if(lvalue.length < 2) {
            $('#error_fname').html('')
            $('#error_lname').html('You need to provide atleast 2 letters')
            return false
        }
        else{
            $('#error_fname').html('');
            $('#error_lname').html('');
            return true
        }
        
    }

    function validateRadio(){
        let genders = document.getElementsByName("gender")
        
        if(genders[0].checked == true || genders[1].checked == true || genders[2].checked == true){
            $('#error_radio').html('')
            return true
        }
        else{
            $('#error_radio').html('You must choose gender')
            return false
        }
    }

   /*  function validateRadio(){
        let checked=$('input[type=radio]:checked').val()
        if(checked=="Man" || checked == "Woman" || checked == "Other"){
            $('#error_radio').html('')
      }
      else{
        $('#error_radio').html('Choose one')
      } 
    }*/

    function validatePassword(inputPassword4,confirm_password){
             let password=$('#inputPassword4').val()
             let cpassword=$('#confirm_password').val()

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
                
             }

             if ( cpassword.length === 0){
                $('#error_cpassword').html('Please enter your password')
                return false
             }
             
             
             if (cpassword.length < 8 && cpassword.length > 0){
                $('#error_cpassword').html('Your password must: contain atleast 8 character')
                return false
             }
            
             if (cpassword.length >= 8 ){
                $('#error_cpassword').html('')
            
             }
            
            // if(password.length > cpassword.length){
            //     $('#error_password').html('Your password must match!')
            //     return false
            // }
            // if(password.length < cpassword.length){
            //     $('#error_cpassword').html('Your password must match!')
            //     return false
            // }
            if (password !== cpassword && cpassword !== password){
                // $('#error_password').html('Your password must match!')
                $('#error_cpassword').html('Your password must match!')                
                return false
                    
            }
            
            else {
                $('#error_password').html('')
                $('#error_cpassword').html('')
                return true
            }             

                
                
               
    }
    
    function validateCheckout(gridCheck){
        value = $(gridCheck).is(':checked')
        
        if ( value === false){
            $('#error_checkOut').html('*You must accept the terms & conditions')
            return false
        }
        else {
            $('#error_checkOut').html('')
            return true
        }             
    }

    function validateState(locG,locS,locM,locUM,locUP,locV){
             if ($(locG).prop('selected') === true){
                $('#error_location').html('')
                return true
             }
             else if ($(locS).prop('selected') === true){
                $('#error_location').html('')
                return true
             }
             else if ($(locM).prop('selected') === true){
                $('#error_location').html('')
                return true
             }
             else if ($(locUM).prop('selected') === true){
                $('#error_location').html('')
                return true
             }
             else if ($(locUP).prop('selected') === true){
                $('#error_location').html('')
                return true
             }
             else if ($(locV).prop('selected') === true){
                $('#error_location').html('')
                return true
             }
             else{
                $('#error_location').html('Select your location') 
                return false
             }
    }

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
    function textAreaValidation() {

        let textArea = $('#textAreaField').val();
      
        if (textArea == '') {
          $('#errTextarea').html('Please make sure you filled out your description field')
          return false;
        } else {
            $('#errTextarea').html('')
            return true;
        }
      }




    //     // if( $(locG).prop('selected') || $(locS).prop('selected') ||  $(locUM).prop('selected') || $(locUP).prop('selected') || $(locV).prop('selected') === true){
    //     //     $('#error_location').html('')          
                       
    //     // }
    //     // else{
    //     //     $('#error_location').html('Select your location') 
    //     // }

    // }

    $('#oneForm').on('submit',function(e) {
        //förhindra att den skickat data 
        e.preventDefault();
        console.log(e) 
        // console.log(e.currentTarget[10].checked)         
        // console.log($('#gridCheck').is(':checked')) =>prop('checked) are samething except z :
        //console.log($('.location').is(':selected'))
        // $("#loc-G, #loc-S, #loc-M, #loc-UM, #loc-UP, #loc-V").each(function() {
        //     console.log($(this).prop('selected'))
        // })
    
        validateField('#firstName','#lastName')
        validateRadio()
        validatePassword('#inputPassword4','#confirm_password')       
        validateCheckout('#gridCheck')
        validateState('#loc-G','#loc-S','#loc-M','#loc-UM','#loc-UP','#loc-V')
        validateEmail('#inputEmail4')
        textAreaValidation()

        if (validateField('#firstName','#lastName') && 
        validateRadio() && 
        validatePassword('#inputPassword4','#confirm_password') && 
        validateCheckout('#gridCheck') && 
        validateState('#loc-G','#loc-S','#loc-M','#loc-UM','#loc-UP','#loc-V') && 
        validateEmail('#inputEmail4')&&
        textAreaValidation()){
        window.location.replace('login.html')
     }
    })

    $('#firstName,#lastName').keyup(function(e){
        validateField('#firstName','#lastName')
    })
    $('#inputPassword4,#confirm_password').keyup(function(e){
        validatePassword('#inputPassword4','#confirm_password') 
    })
    $('#inputEmail4').keyup(function(e){
        validateEmail('#inputEmail4')

    })
    $('#textAreaField').keyup(function(e){
        textAreaValidation()
    })
    $('#gridCheck').click(function(e){
    validateCheckout('#gridCheck')
    })
    
    $('#radio').click(function(e){
        validateRadio() 
    })
    $('#inputState').click(function(e){
        validateState('#loc-G','#loc-S','#loc-M','#loc-UM','#loc-UP','#loc-V')
    })

    


    
})