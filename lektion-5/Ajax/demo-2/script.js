$(function() {
   
        
    function loadLanguage(lang){

        const http = new XMLHttpRequest();

        http.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200){
                
                let obj = JSON.parse(this.responseText);

                console.log(obj)
                
                
                document.getElementById('headline').innerHTML = obj.welcome;
                document.getElementById("registerButton").innerHTML = obj.register;
            }
        }

        http.open("GET", `${lang}.json`, true);
        http.send();

    }

    document.querySelector('#swedish').addEventListener('click',function() {
        loadLanguage('sv-SE')
    })
    document.getElementById('english').addEventListener('click',function() {
        loadLanguage('en-Us')
    })
      
    

});