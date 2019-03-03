var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/1.jpg.jpg') {
      myImage.setAttribute ('src','images/2.jpg.jpg');
    } 
    else if(mySrc === 'images/2.jpg.jpg'){
      myImage.setAttribute ('src','images/3.jpg.jpg');
    }
    else if(mySrc === 'images/3.jpg.jpg'){
        myImage.setAttribute ('src','images/4.jpg.jpg');
      }
      else{
        myImage.setAttribute ('src','images/1.jpg.jpg');
      }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('header');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Welcome My Profile, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Welcome My Profile, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}