document.getElementById('menu-overlay').addEventListener('click',function(){
    document.getElementById("nav-links").style.left = "-400px";
    document.getElementById("menu-overlay").style.display = "none"
})

function menu(){
    document.getElementById("nav-links").style.left = "0";
    document.getElementById("menu-overlay").style.display = "block"
}