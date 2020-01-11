
function validateEmail(){ 

    let emailadd =document.getElementById('exampleInputEmail1').value;
    const emailcheck= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(emailadd === "")
    {
        document.getElementById('error_email').innerHTML= "ENter emial";
        return false;
    } 
       
    
    if (!emailcheck.test(emailadd))
    {
        document.getElementById('error_email').innerHTML= "YOu invalid em";
       return false;
      
    }

   
 
    else{
        document.getElementById('error_email').innerHTML= "";
        return true;
    }

}

let form = document.getElementById("loginpage");
form.addEventListener("submit",function(e){
  
    e.preventDefault();
    console.log(e);
    // console.log($(exampleInputEmail1).val())
    validateEmail();

    
    





})