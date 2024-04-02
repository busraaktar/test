const navUl=document.querySelector(".nav-ul");
const navTarget=document.querySelector(".nav-target");

navTarget.addEventListener("click",()=>{
    if(navUl.classList.contains("show-ul")){
        navUl.classList.remove("show-ul");
    }else{
        navUl.classList.add("show-ul");
    }
});