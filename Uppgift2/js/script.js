function getFullName(){
    fetch('https://inlupp-fa.azurewebsites.net/api/users?firstname=Dawit&lastname=Kidane')
    .then(res => res.text())
    .then(data => {
        document.getElementById('fullName').innerHTML= "Hi," + data + " Welcomeback"

    })
}

 function getTotalSales(){
    fetch('https://inlupp-fa.azurewebsites.net/api/total-sales')
    .then(res => res.json())    
    .then(data => {          
          document.getElementById('saleCurrency').innerHTML=data.currency + data.amount          
    })
}
function getTotalPurchase(){
         fetch('https://inlupp-fa.azurewebsites.net/api/total-purchases')
         .then(res => res.json())
         .then(data => {
            document.getElementById('totalPurchase').innerHTML=data.currency + data.amount 
         })
}

function getTotalOrder(){
         fetch('https://inlupp-fa.azurewebsites.net/api/total-orders')
         .then(res => res.json())
         .then(data => {
             document.getElementById('totalOrder').innerHTML=data.currency + data.amount
         })
}
function getTotalGrowth(){
    fetch('https://inlupp-fa.azurewebsites.net/api/total-growth')
    .then(res => res.json())
    .then(data => {
        document.getElementById('totalGrowth').innerHTML=data.currency + data.amount
    })
}

function messagePart(){
    fetch('https://inlupp-fa.azurewebsites.net/api/messages')
    .then(res => res.json())
    .then(data => {
   
        for(message of data) {
        
            document.getElementById('messages').insertAdjacentHTML('beforeend', `
            
                  
            <a class="dropdown-item preview-item">
            <div class="preview-thumbnail">
                <img src="https://via.placeholder.com/36x36" alt="image" class="profile-pic">
            </div>
            <div class="preview-item-content flex-grow">
              <h6 class="preview-subject ellipsis font-weight-normal"> ${message.from}  
              </h6>
              <p class="font-weight-light small-text text-muted mb-0">
              ${message.title}
              </p>
            </div>
          </a>


            `)
        }
    })
}

function getNotification(){
    fetch("https://inlupp-fa.azurewebsites.net/api/notifications")
    .then(res => res.json())
    .then(data => {
        document.getElementById('Application').innerHTML= data[0].title
        document.getElementById('appValue').innerHTML= data[0].subtitle
        document.getElementById('Setting').innerHTML= data[1].title
        document.getElementById('setValue').innerHTML= data[1].subtitle
        document.getElementById('Registration').innerHTML= data[2].title
        document.getElementById('registrationValue').innerHTML= data[2].subtitle
    })
}

function downloads(){
    fetch("https://inlupp-fa.azurewebsites.net/api/downloads")
    .then(res => res.json())
    .then(data => {       
        document.getElementById('offline').innerHTML=data[0].offlineAmount
        document.getElementById('online').innerHTML=data[1].onlineAmount

    })
}

function onlinepro(){
if ($('#onlineProgress').length) {
    var bar = new ProgressBar.Circle(onlineProgress, {
      color: '#000',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 6,
      trailWidth: 6,
      easing: 'easeInOut',
      duration: 1400,
      text: {
        autoStyleContainer: true,
        style : {
          color : "#fff",
          position: 'absolute',
          left: '40%',
          top: '50%'
        }
      },
      svgStyle: {
        width: '90%'
      },
      from: {
        color: '#fda006',
        width: 6
      },
      to: {
        color: '#fda006',
        width: 6
      },
      // Set default step function for all animate calls
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        } else {
          circle.setText(value);
        }

      }
    });
    fetch('https://inlupp-fa.azurewebsites.net/api/downloads')
    .then(res => res.json())
    .then(data => {  
    bar.text.style.fontSize = '1rem';
    bar.animate(data[1].circleValue); // Number from 0.0 to 1.0
    })
  }
}

function offlinepro(){
if ($('#offlineProgress').length) {
    var bar = new ProgressBar.Circle(offlineProgress, {
      color: '#000',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 6,
      trailWidth: 6,
      easing: 'easeInOut',
      duration: 1400,
      text: {
        autoStyleContainer: true,
        style : {
          color : "#fff",
          position: 'absolute',
          left: '40%',
          top: '50%'
        }
      },
      svgStyle: {
        width: '90%'
      },
      from: {
        color: '#f1536e',
        width: 6
      },
      to: {
        color: '#f1536e',
        width: 6
      },
      // Set default step function for all animate calls
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        } else {
          circle.setText(value);
        }

      }
    });
    fetch('https://inlupp-fa.azurewebsites.net/api/downloads')
    .then(res => res.json())
    .then(data => {     
    bar.text.style.fontSize = '1rem';     
    bar.animate(data[0].circleValue); // Number from 0.0 to 1.0
    })
  }
}
         /*  function ticket(){
               fetch('https://inlupp-fa.azurewebsites.net/api/tickets')
               .then(res => res.json())
               .then(data => {

                          <tr>
                              <td class="pl-0">
                            <div class="icon-rounded-primary icon-rounded-md">
                              <h4 class="font-weight-medium">AL</h4>
                            </div>
                          </td>
                          <td>
                            <p class="mb-0">Alta Lucas</p>
                            <p class="text-muted mb-0">Connecticut</p>
                          </td>
                          <td>
                            <p class="mb-0">31 Aug 2018</p>
                            <p class="text-muted mb-0">9:30 am</p>
                          </td>
                          <td>
                            <p class="mb-0">6770 Verner Burgs</p>
                            <p class="text-muted mb-0">View on map</p>
                          </td>
                          <td class="pr-0">
                            <i class="mdi mdi-dots-horizontal icon-sm cursor-pointer"></i>
                          </td>
                        </tr>
                })
           } */



getFullName()
downloads()
getTotalSales()
getTotalPurchase()
getTotalOrder()
getTotalGrowth()
messagePart()
getNotification()
onlinepro()
offlinepro() 
