
let futurebtn = document.querySelector("#future");
let pastbtn = document.querySelector("#past");
let presentbtn = document.querySelector("#present");

let futureText = document.querySelector("#future-text");
let pastText = document.querySelector("#past-text");
let presentText = document.querySelector("#present-text");

// text appears on hover
futurebtn.onmouseover=function(){
    futureText.style.display="block";
};

pastbtn.onmouseover=function(){
    pastText.style.display="block";
};

presentbtn.onmouseover=function(){
    presentText.style.display="block";
};

// text disappears without hover
futurebtn.onmouseout=function(){
    futureText.style.display="none";
};

pastbtn.onmouseout=function(){
    pastText.style.display="none";
};

presentbtn.onmouseout=function(){
    presentText.style.display="none";
};