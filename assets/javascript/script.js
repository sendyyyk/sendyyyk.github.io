document.addEventListener("DOMContentLoaded", function () {
    const headerMenu = document.querySelector(".header-menu");
    const divElements = [
        document.createElement("div"), // hamburger-menu
        document.createElement("div"), // garis hamburger 1
        document.createElement("div"), // garis hamburger 2
        document.createElement("div"), // garis hamburger 3
    ];
    const createButton = document.createElement("button");


    function mobileView() {
        //navbar-Mobile
        divElements[0].classList.add("navbar-MP");
        //humberger-menu
        createButton.classList.add("hamburger-menu");
        createButton.type = "button";
        //humberger-line
            divElements[1].classList.add("line");
        
        
        if (window.innerWidth <= 1100) {
            if (!headerMenu.contains(divElements[0]) || !divElements[0].contains(createButton) ||  !createButton.contains(divElements[1])) {
                headerMenu.appendChild(divElements[0]);
                divElements[0].appendChild(createButton);
                createButton.appendChild(divElements[1]);
            }
        } else {
            if (headerMenu.contains(divElements[0])) {
                divElements[0].remove();
            }
        }
}
    window.addEventListener("load", mobileView);
    window.addEventListener("resize", mobileView);
});