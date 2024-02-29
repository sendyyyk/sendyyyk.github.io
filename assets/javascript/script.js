document.addEventListener("DOMContentLoaded", function () {
    const headerMenu = document.querySelector(".header-menu");
    const headerNavbar = document.querySelector(".header-navbar");
    const divElements = [
        document.createElement("div"), // hamburger-menu
        document.createElement("div"), // garis hamburger 1
        document.createElement("div"), // garis hamburger 2
        document.createElement("div"), // garis hamburger 3
        document.createElement("div"), // menu navbar Mobile
        document.createElement("span"), // span pengaturan di menu Mobile

    ];
    const createButton = document.createElement("button");

    function mobileView() {
        //navbar-Mobile
        divElements[0].classList.add("hamburger-menu");
        //humberger-menu
        createButton.classList.add("hamburger-btn");
        createButton.type = "button";
        //humberger-line
        divElements[1].classList.add("line");
        divElements[2].classList.add("line");
        divElements[3].classList.add("line");
        if (window.innerWidth <= 1100) {
            if (!headerMenu.contains(divElements[0]) || !divElements[0].contains(createButton)) {
                headerMenu.appendChild(divElements[0]);
                divElements[0].appendChild(createButton);
                createButton.appendChild(divElements[1]);
                createButton.appendChild(divElements[2]);
                createButton.appendChild(divElements[3]);
            }
        } else if (window.innerWidth >= 1100) {
            if (headerMenu.contains(divElements[0])) {
                divElements[0].remove();
            } else if (divElements[4]) {
                divElements[4].style.transform = "translateX(100vw)";
                divElements[4].style.display = "none";
                document.body.style.overflow = "visible";
            }
        }
    }

    window.addEventListener("load", mobileView);
    window.addEventListener("resize", mobileView);
    
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            async function delayMenu() {
                return new Promise(resolve => setTimeout(resolve, 100));
            }
            async function delayBody() {
                return new Promise(resolve => setTimeout(resolve, 101));
            }

            async function delayRemoveMenu() {
                return new Promise(resolve => setTimeout(resolve, 1000));
            }
            if (mutation.previousSibling === null && mutation.target.classList.contains("navbarMP")) {
                document.querySelector(".hamburger-menu-close").addEventListener('click', async function() {
                    await delayMenu();
                    divElements[4].style.transform = "translateX(100vw)";
                    document.body.style.overflow = "visible";
                    await delayRemoveMenu();
                    divElements[4].style.transform = "translateX(100vw)";
                    divElements[4].style.display = "none";
                    document.body.style.overflow = "visible";
                });
            } else if (mutation.type === "childList" && mutation.target.classList.contains("hamburger-menu")) {
                let clickCount = 0;
                let clickTimeout;
                document.querySelector(".hamburger-menu").addEventListener('click', async function() {
                    clickCount++;
                    clearTimeout(clickTimeout);
                    clickTimeout = setTimeout( async() => {
                        if (clickCount === 1) {
                            // Aksi yang ingin Anda lakukan saat elemen diklik sekali
                            if (!headerNavbar.querySelector(".navbarMP")){
                                divElements[4].classList.add("navbarMP");
                                document.querySelector(".header-navbar").appendChild(divElements[4]);
                                divElements[4].appendChild(headerMenu.querySelector(".logo-wrap").cloneNode(true));
                                divElements[4].appendChild(headerMenu.querySelector(".navbar").cloneNode(true));
                                divElements[4].querySelector(".logo-wrap").appendChild(headerMenu.querySelector(".hamburger-menu").cloneNode(true));
                                divElements[4].querySelector(".hamburger-menu").classList.add("hamburger-menu-close");
                                divElements[4].querySelector(".hamburger-menu").classList.remove("hamburger-menu");

                                divElements[4].querySelector(".navbar .menu-bar ul ").appendChild(headerMenu.querySelector("nav.navbar .dark-mode .dark-mode-wrap .btn-mode").cloneNode(true));
                                divElements[4].querySelectorAll(".navbar .btn-mode")[0].classList.add("menu-settings");
                                divElements[4].querySelectorAll(".navbar .btn-mode")[0].classList.remove("btn-mode");
                                divElements[4].querySelectorAll(".menu-settings button")[0].appendChild(divElements[5]);
                                divElements[4].querySelectorAll(".menu-settings button")[0].id = "menuSetting";
                                divElements[4].querySelectorAll(".menu-settings button span")[0].textContent = "Pengaturan";
                                divElements[4].querySelectorAll(".menu-settings button i")[0].textContent = "settings";

                                divElements[4].style.position = "fixed";
                                divElements[4].style.top = "0";
                                divElements[4].style.right = "0";
                                divElements[4].style.bottom = "0";
                                divElements[4].style.left = "0";
                                divElements[4].style.zIndex = "999";
                            } else {
                                divElements[4].style.display = "block";
                            }
                            await delayMenu();
                            divElements[4].style.transform = "translateX(0vw)";
                            await delayBody();
                            document.body.style.overflow = "hidden";
                            
                        }
                        clickCount = 0;
                    }, 300);
                    
                });
                document.querySelector(".hamburger-menu").addEventListener('dblclick', function(event) {
                    event.preventDefault();
                    clearTimeout(clickTimeout);
                    clickCount = 0;
                });
            } 
            else if (mutation.type === "childList" && mutation.target.id === "menuSetting") {
                document.getElementById("menuSetting").addEventListener('click', function() {
                    if (divElements[4].querySelector(".navbar .dark-mode").style.transform === "translateX(-33vw)") {
                        divElements[4].querySelector(".navbar .dark-mode").style.transform = "translateX(100vw)";
                    } else {
                        divElements[4].querySelector(".navbar .dark-mode").style.transform = "translateX(-33vw)";
                    }
                });
            }
        });
    });

    observer.observe(headerNavbar, { childList: true, subtree: true });
    
    window.onload = function() {
        var bodyHeight = document.body.clientHeight;
        var header = document.querySelector('.header-navbar');
        header.style.height = bodyHeight + 'px';
        window.addEventListener('resize', function() {
            var bodyHeight = document.body.clientHeight;
            header.style.height = bodyHeight + 'px';
        });
    }

});
