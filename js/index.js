var acord = document.getElementsByClassName("service__acord-btn");
var i;

for (i = 0; i < acord.length; i++) {
    acord[i].addEventListener("click", function() {
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}