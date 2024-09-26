var sidenavbar=document.querySelector(".side-navbar")
function showsidenav(){
    sidenavbar.style.left="0"
}
function hidesidenav(){
    sidenavbar.style.left="-60%"
}


//search function

var search=document.getElementById("search")
var productcontainer=document.querySelector(".products")
var products=productcontainer.querySelectorAll("div")
search.addEventListener("keyup",function(event){
    var enteredvalue=event.target.value.toUpperCase()
    
    for(var count=0;count<products.length;count++)
        {
            var productName=products[count].querySelector("p").textContent.toUpperCase()

            if(productName.indexOf(enteredvalue)<0)
            {
                products[count].style.display="none"
            }
            else{
                products[count].style.display="block"
            }
        }
})