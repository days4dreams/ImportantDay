//concept: using a user input date, fetch data from an external website and present back an interesting stat, fact or information piece

//input data
//send data to site
//fetch information
//present info to user

var h2 = document.getElementsByTagName('h2')[0];

function get_data(){
    $.ajax({
        url: 'http://history.muffinlabs.com/date',
        success: function(data){
            console.log(data.date);
            $('#mydate').html(data.date);
        }
        
    })

}

//function display() {
   // h2.textContent = "On this date... " + (data.date);  }

window.onload = function(){
    var start = document.getElementById('startbutton');
    start.onclick = function(){
        get_data();    
        //display(); 
    }
}

// <button onclick='get_data()'>