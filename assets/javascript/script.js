document.addEventListener("DOMContentLoaded", function () {
    const headerMenu = document.querySelector(".header-menu");
    const headerNavbar = document.querySelector(".header-navbar");
    const divElements = [
        document.createElement("div"), // hamburger-menu
        document.createElement("div"), // garis hamburger 1
        document.createElement("div"), // garis hamburger 2
        document.createElement("div"), // garis hamburger 3
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
            } else if (document.querySelector(".navbarMP")) {
                document.querySelector(".navbarMP").remove();
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
                    document.querySelector(".navbarMP").style.transform = "translateX(100vw)";
                    document.body.style.overflow = "visible";
                    await delayRemoveMenu();
                    document.querySelector(".navbarMP").style.transform = "translateX(100vw)";
                    document.querySelector(".navbarMP").style.display = "none";
                    document.body.style.overflow = "visible";
                });
                document.querySelector(".navbarMP button.theme-mode").addEventListener('click', function () {
                    if (document.querySelector(".theme-mode .material-icons").innerText.trim() === "dark_mode" || document.querySelector(".navbarMP button.theme-mode .material-icons").innerText.trim() === "dark_mode") {
                        document.querySelector(".theme-mode .material-icons").textContent = "light_mode";
                        document.querySelector(".navbarMP button.theme-mode .material-icons").textContent = "light_mode";
                        document.querySelector("main.main-content").style.backgroundColor = "#232323";
                        document.querySelector("main.main-content").style.boxShadow = "0 -10px 30px 20px #232323";
                        document.querySelector(".pop-up-theme").style.display = "flex";
                        document.querySelector(".pop-up-theme .caption-pop-up .text-caption span").textContent = "Tema Website Sukses Dirubah Menjadi Dark.";
                        document.querySelector('.line-checklist').classList.remove('wide');
                        document.querySelector('.line-checklist').classList.remove('hige');
                        setTimeout(function() {
                            document.querySelector(".line-checklist").classList.add('wide');
                            document.querySelector(".line-checklist").classList.add("hige");
                        }, 100);
                        document.querySelector(".navbarMP").style.display = "none";
                        document.querySelector(".navbarMP").style.transform = "translateX(100vw)";
                        document.querySelector(".navbarMP").querySelector(".navbar .dark-mode").style.transform = "translateX(100vw)";
                        document.body.style.overflow = "hidden";
                    } else {
                        document.querySelector(".theme-mode .material-icons").textContent = "dark_mode";
                        document.querySelector(".navbarMP button.theme-mode .material-icons").textContent = "dark_mode";
                        document.querySelector("main.main-content").style.backgroundColor = "#ececec";
                        document.querySelector("main.main-content").style.boxShadow = "0 -10px 30px 20px #ececec";
                        document.querySelector(".pop-up-theme").style.display = "flex";
                        document.querySelector(".pop-up-theme .caption-pop-up .text-caption span").textContent = "Tema Website Sukses Dirubah Menjadi Light.";
                        document.querySelector('.line-checklist').classList.remove('wide');
                        document.querySelector('.line-checklist').classList.remove('hige');
                        setTimeout(function() {
                            document.querySelector(".line-checklist").classList.add('wide');
                            document.querySelector(".line-checklist").classList.add("hige");
                        }, 100);
                        document.querySelector(".navbarMP").style.display = "none";
                        document.querySelector(".navbarMP").style.transform = "translateX(100vw)";
                        document.querySelector(".navbarMP").querySelector(".navbar .dark-mode").style.transform = "translateX(100vw)";
                        document.body.style.overflow = "hidden";
                    }
                })
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
                                const navbarMP = document.createElement("div"); // menu navbar Mobile
                                navbarMP.classList.add("navbarMP")
                                document.querySelector(".header-navbar").appendChild(navbarMP);
                                navbarMP.appendChild(headerMenu.querySelector(".logo-wrap").cloneNode(true));
                                navbarMP.appendChild(headerMenu.querySelector(".navbar").cloneNode(true));
                                navbarMP.querySelector(".logo-wrap").appendChild(headerMenu.querySelector(".hamburger-menu").cloneNode(true));
                                navbarMP.querySelector(".hamburger-menu").classList.add("hamburger-menu-close");
                                navbarMP.querySelector(".hamburger-menu").classList.remove("hamburger-menu");

                                navbarMP.querySelector(".navbar .menu-bar ul ").appendChild(headerMenu.querySelector("nav.navbar .dark-mode .dark-mode-wrap .btn-mode").cloneNode(true));
                                navbarMP.querySelectorAll(".navbar .btn-mode")[0].classList.add("menu-settings");
                                navbarMP.querySelectorAll(".navbar .btn-mode")[0].classList.remove("btn-mode");
                                navbarMP.querySelectorAll(".navbar .menu-settings .theme-mode")[0].classList.remove("theme-mode");
                                navbarMP.querySelectorAll(".menu-settings button")[0].appendChild(divElements[4]);
                                navbarMP.querySelectorAll(".menu-settings button")[0].id = "menuSetting";
                                navbarMP.querySelectorAll(".menu-settings button span")[0].textContent = "Pengaturan";
                                navbarMP.querySelectorAll(".menu-settings button i")[0].textContent = "settings";

                                navbarMP.style.position = "fixed";
                                navbarMP.style.top = "0";
                                navbarMP.style.right = "0";
                                navbarMP.style.bottom = "0";
                                navbarMP.style.left = "0";
                                navbarMP.style.zIndex = "999";
                            } else if (headerNavbar.querySelector(".navbarMP")) {
                                document.querySelector(".navbarMP").style.display = "block";
                            }
                            await delayMenu();
                            document.querySelector(".navbarMP").style.transform = "translateX(0vw)";
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
            } else if (mutation.type === "childList" && mutation.target.id === "menuSetting") {
                document.getElementById("menuSetting").addEventListener('click', function() {
                    if (document.querySelector(".navbarMP").querySelector(".navbar .dark-mode").style.transform === "translateX(-33vw)") {
                        document.querySelector(".navbarMP").querySelector(".navbar .dark-mode").style.transform = "translateX(100vw)";
                    } else {
                        document.querySelector(".navbarMP").querySelector(".navbar .dark-mode").style.transform = "translateX(-33vw)";
                    }
                });
            }

        });
    });

    observer.observe(headerNavbar, { childList: true, subtree: true });
    
    window.onload = function() {
        let bodyHeight = document.body.clientHeight;
        let header = document.querySelector('.header-navbar');
        header.style.height = bodyHeight + 'px';
        window.addEventListener('resize', function() {
            let bodyHeight = document.body.clientHeight;
            header.style.height = bodyHeight + 'px';
        });
    }

    //Dark Mode 
    document.querySelector(".theme-mode").addEventListener("click", function () {
        if (document.querySelector(".theme-mode .material-icons").innerText.trim() === "dark_mode") {
            document.querySelector(".theme-mode .material-icons").textContent = "light_mode";
            document.querySelector(".theme-mode").style.boxShadow = "0 0 20px #ececec";
            document.querySelector("main.main-content").style.backgroundColor = "#232323";
            document.querySelector("main.main-content").style.boxShadow = "0 -10px 30px 20px #232323";
            document.querySelector(".pop-up-theme").style.display = "flex";
            document.querySelector(".pop-up-theme .caption-pop-up .text-caption span").textContent = "Tema Website Sukses Dirubah Menjadi Dark.";
            document.querySelector('.line-checklist').classList.remove('wide');
            document.querySelector('.line-checklist').classList.remove('hige');
            setTimeout(function() {
                document.querySelector(".line-checklist").classList.add('wide');
                document.querySelector(".line-checklist").classList.add("hige");
            }, 100);
            document.body.style.overflow = "hidden";
        } else {
            document.querySelector(".theme-mode .material-icons").textContent = "dark_mode";
            document.querySelector(".theme-mode").style.boxShadow = "0 0 10px #232323";
            document.querySelector("main.main-content").style.backgroundColor = "#ececec";
            document.querySelector("main.main-content").style.boxShadow = "0 -10px 30px 20px #ececec";
            document.querySelector(".pop-up-theme").style.display = "flex";
            document.querySelector(".pop-up-theme .caption-pop-up .text-caption span").textContent = "Tema Website Sukses Dirubah Menjadi Light.";
            document.querySelector('.line-checklist').classList.remove('wide');
            document.querySelector('.line-checklist').classList.remove('hige');
            setTimeout(function() {
                document.querySelector(".line-checklist").classList.add('wide');
                document.querySelector(".line-checklist").classList.add("hige");
            }, 100);
            document.body.style.overflow = "hidden";
        }
    });
    document.querySelector(".pop-up-ok").addEventListener("click", function () {
        console.log("halo");
        document.querySelector(".pop-up-theme").style.display = "none";
        document.body.style.overflow = "visible";
    });
    // MAIN SCRIPT
    // =================== // SCROLL TEXT SCRIPT // =================== //
    let displayText = document.getElementById('display-text');
    let textLength = displayText.innerText.length;
    let transformValue = -1 * textLength + 'ch';
    displayText.style.transform = `translateX(${transformValue})`;
    
    // =================== // TIME DIGITAL SCRIPT // =================== //
    
    function updateTime() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        
        hours = hours % 12;
        hours = hours ? hours : 12;
        
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        
        document.getElementById('display-time').innerHTML = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
        
        setTimeout(updateTime, 1000);
    }
    
    updateTime();
    
    // =================== // DATE DIGITAL SCRIPT // =================== //

    var currentDate = new Date();

        var tanggal = currentDate.getDate();
        var bulan = currentDate.getMonth() + 1;
        var tahun = currentDate.getFullYear();

        document.getElementById('display-date').textContent = tanggal + '-' + bulan + '-' + tahun;
});
