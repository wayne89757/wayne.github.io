let myHeading = document.querySelector('h1');

let myImg = document.querySelector('img');

let arr = ['images/mozilla.png', 'images/mozilla2.png'];
let cnt = 0;

myImg.onclick = function() {
    myImg.setAttribute('src', arr[cnt%2]);
    cnt ++;
}

let myButton = document.querySelector('button');

function setUserName() {
    let myName= prompt('请输入你的名字');
    //if(!myName || myName === null)
    //    setUserName();
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storeName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storeName;
}

myButton.onclick = function(){
    setUserName();
}