function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
}
window.onload = setInterval(clock,1000);
    function clock()
    {
        var d = new Date();
        var date = d.getDate();
        var year = d.getFullYear();
        var month = d.getMonth();
        var monthArr = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
        month = monthArr[month];
        document.getElementById("date").innerHTML=date+" "+month+", "+year;
    }
function changeImage1(){
    document.getElementById("image").src = "Images/foto 1.jpg";
}
function changeImage2(){
    document.getElementById("image").src = "Images/foto 2.jpg";
}
function changeImage3(){
    document.getElementById("image").src = "Images/foto 3.jpg";
}
function changeImage4(){
    document.getElementById("image").src = "Images/foto 4.jpg";
}