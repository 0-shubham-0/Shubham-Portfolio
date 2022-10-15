window.addEventListener("hashchange", () => window.history.pushState({}, "", '/'), {});

var theme = document.getElementById("theme");
theme.onclick = function(){
    document.body.classList.toggle("white-theme");
    if(document.body.classList.contains("white-theme")){
        theme.src="assets/moon.png";
        profile.src="assets/profile2.svg"
    }else{
        theme.src="assets/sun.png";
        profile.src="assets/profile.svg"
    }
}