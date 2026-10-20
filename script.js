const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    const targetPage = this.innerHTML.trim(); 
    const targetKey = this.getAttribute("data-nav-link");

    pages.forEach((page) => {
      if (page.getAttribute("data-page") === targetKey) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }
    });
    navLinks.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");
  });
});


window.addEventListener('load', function() {
    tsParticles.load("background-part", {
        fpsLimit: 60,
        particles: {
            number: {
                value: 60, 
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#00f2ff" 
            },
            shape: {
                type: "circle" 
            },
            opacity: {
                value: 0.5, 
                random: false
            },
            size: {
                value: 2, 
                random: true
            },
            
            links: {
                enable: true,
                distance: 150, 
                color: "#00f2ff", 
                opacity: 0.2, 
                width: 1
            },
    
            move: {
                enable: true,
                speed: 1, 
                direction: "none",
                random: false,
                straight: false,
                outMode: "out",
                bounce: false
            }
        },
        retina_detect: true
    });
});