$(function(){
    $('#regForm').submit((e)=> {
        e.preventDefault();
        console.log(e)
        //if(e.currentTarget[4].checked === false){
           //alert('You must accept the terms of condition');
          // return false;
        //}
       // if(e.currentTarget[0])


        // let firstName = $('#firstName').val();
        // let lastName = $('#lastName').val();
        // let address = $('#address').val();

        // console.log(e);
        // console.log(firstName,lastName,address);
 

        //Alternativ 2 using event object "e"
        // let the  = e.currentTarget[2].value;
        // console.log(thefirstName);
 

        //Alternativ 3:
        let user={
            firstName: e.currentTarget[0].value,
            lastName: e.currentTarget[1].value,
            address: e.currentTarget[2].value,
            role: e.currentTarget[3].value,
        }
        console.log(user);
        console.log(user.firstName,user.lastName,user.address,user.role);

     
    })



});