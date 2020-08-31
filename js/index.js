console.log("index loaded");

var userDetails;

function getUser(username) {
    return fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(response => {
      console.log(response);

        document.getElementById("profile-pic").src=response.avatar_url;
      document.getElementById("NameOfUser").innerHTML=response.name;
      document.getElementById("Bio").innerHTML=response.bio;
      document.getElementById("following").innerHTML=response.following;
      document.getElementById("followers").innerHTML=response.followers;
        document.getElementById("id").innerHTML=response.id;

      })

}



var submitButton=document.getElementById("Submit");

submitButton.addEventListener("click",getUserDetails);

function getUserDetails(){

  var username=document.getElementById("username").value;

getUser(username);

}






var typeLine="Search, Visualize, Analyze Git Users.";

var i=0;
var speed=50;

function typeNow(){
if(i<typeLine.length){
  document.getElementById("Typing").innerHTML+=typeLine.charAt(i);
  i++;
  setTimeout(typeNow,120);
}
}

typeNow();
