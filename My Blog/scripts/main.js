let image = document.querySelector('img');

image.onclick = function(){
    let imgSrc = image.getAttribute('src');
    if(imgSrc == 'images/uchicago logo.png'){
        image.setAttribute('src', 'images/uchicago logo 2.png');
    }
    else{
        image.setAttribute('src', 'images/uchicago logo.png');
    }
}


let button = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name');
    localStorage.setItem('name', myName);
    myHeading.textContent = myName + ', Hello!';
}

if(!localStorage.getItem('name')){
    setUserName();
}
else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + ', Hello!';
   //setUserName();
}

button.onclick = function(){
    setUserName();
}