var twitter = document.getElementById("twitter");
var fb = document.getElementById("fb");
var insta = document.getElementById("insta");
var linkedin = document.getElementById("in");
var wa = document.getElementById("WA");
var Snap = document.getElementById("Snap");
var discord = document.getElementById("discord");

var state = false;

var arr = [twitter, fb, insta, git, linkedin, wa, Snap, discord]

function changeState() {
    state = !state;

    if (state === false) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].style.opacity = 0;
            arr[i].style.transform = "translate(0px , 0px)";
        }
    } else {
        twitter.style.opacity = 1;
        twitter.style.transform = "translateY(-115px)"

        fb.style.opacity = 1;
        fb.style.transform = "translate(81px, -81px)"

        insta.style.opacity = 1;
        insta.style.transform = "translateX(115px)"

        Snap.style.opacity = 1;
        Snap.style.transform = "translate(81px, 81px)"

        linkedin.style.opacity = 1;
        linkedin.style.transform = "translateY(115px)"

        wa.style.opacity = 1;
        wa.style.transform = "translate(-81px, 81px)"

        discord.style.opacity = 1;
        discord.style.transform = "translateX(-115px)"

        git.style.opacity = 1;
        git.style.transform = "translate(-81px, -81px)"
    }
}