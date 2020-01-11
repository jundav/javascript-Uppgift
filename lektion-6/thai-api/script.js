$(function() {

  $('#search').click(function(e){
        
      let value = document.getElementById('fooditem').value
    
      fetch('https://thaikokitallkrogen.azurewebsites.net/api/fooditems')
      .then(res => res.json())
      .then(data => {

        fooditems=data.categories[2].fooditems[parseInt(value)]

        let number = fooditems.number
        let name = fooditems.name
        let desc = fooditems.description

        document.getElementById('result').innerHTML=
        `<p>#${number} - ${name}</p><p>${desc}</p>`
        

          /* for(post of datay) {
            
              document.getElementById('get-result').innerHTML=
              `<p>Id:${post.name}</p>`
          } */
      })

  })

})