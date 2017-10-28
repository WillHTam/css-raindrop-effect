// Create 30 span elements inside the 'rain' class element
// Each will have unique vertical / horiz positioning
window.addEventListener("load", function() {
    var count = 50
    for (var i=0; i<count; i++) {
        var drop = document.createElement("span") 
        drop.style.left = Math.floor(Math.random() * 100) + "vw"
        drop.style.top = Math.floor(Math.random() * 100) + "vh"
        document.querySelector(".rain").appendChild(drop)
    }
})