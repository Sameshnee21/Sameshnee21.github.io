/*const myBtn = document.querySelector("myBtn");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        myBtn.classList.add("active");
    } else{
        myBtn.classList.remove("active");
    }
})*/

myButton = document.getElementById('myBtn'); 

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
}
else {
    myButton.style.display = "none"; 
}
}

myButton.addEventListener('click', () => {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
})

