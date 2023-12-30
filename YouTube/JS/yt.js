//window.alert("hii");
var menuIcon=document.querySelector(".menu_icon");
var sidebar=document.querySelector(".sidebar");
var container=document.querySelector(".container");

menuIcon.onclick=function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("largecontainer")
}
