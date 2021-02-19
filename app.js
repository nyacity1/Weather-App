function myFunction() {
var zipcode = prompt("enter your zipcode");
var state = '';
var city = '';
var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     console.log(JSON.parse(xhttp.response));
     state = JSON.parse(xhttp.response).places[0]['state abbreviation'];
     city = JSON.parse(xhttp.response).places[0]['place name'];
     document.getElementById("location").innerHTML = city + ', ' + state;
    }
  };
xhttp.open('GET',`http://api.zippopotam.us/us/${zipcode}`, true);
xhttp.send();
//<img src="imgs/zippo.png" width="400"></img>
}
function longititudeAlatitude(){
var Zippopotamus = prompt (`longitude`, `latitude`);
var state = '';
var city = '';
var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     console.log(JSON.parse(xhttp.response));
     state = JSON.parse(xhttp.response).longitude[0]['state abbreviation'];
     city = JSON.parse(xhttp.response).latitude[0]['place name'];
     document.getElementById('location').innerHTML = city + ', ' + state;
    }
  }
};
//<img src="imgs/7timer.png" width="400"></img>
//xhttp.open('GET', 'http://api.zippopotamus/us/90210', true);
//xhttp.send();
