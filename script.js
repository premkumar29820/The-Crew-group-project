
    /* =====================================================
        STARTUP LOADER
     ===================================================== */

    window.addEventListener("load", () => {

      setTimeout(() => {

        document
          .getElementById("startupLoader")
          .classList.add("hide");

      }, 2000);

    });


    const sections = document.querySelectorAll("  header, section");
    const dotItems = document.querySelectorAll(".dot-item");

    const observer = new IntersectionObserver((entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          dotItems.forEach(item => item.classList.remove("active"));

          const id = entry.target.id;

          document
            .querySelector(`.dot-item[href="#${id}"]`)
            .classList.add("active");
        }

      });

    }, {
      threshold: 0.5
    });

    sections.forEach(section => observer.observe(section));

    // selecting Side Navbar, Menuicon

    var sidenav = document.getElementById("sidenav")
    var menuicon = document.getElementById("menuicon")
    var closenav = document.getElementById("closenav")

    menuicon.addEventListener("click", function () {
      sidenav.style.right = "0%"
    }

    )

    closenav.addEventListener("click", function () {
      sidenav.style.right = "-70%"
    })
