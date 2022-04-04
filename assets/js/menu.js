export function menu () {
    const btn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-btn");
    const menu = document.getElementById("mobile-menu");
    btn.addEventListener("click", function(){
        menu.classList.toggle("hidden");
    });
    closeBtn.addEventListener("click", function(){
        menu.classList.toggle("hidden");
    });
}