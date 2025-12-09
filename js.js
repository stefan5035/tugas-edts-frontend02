        document.addEventListener("DOMContentLoaded", () => {
            const burger = document.getElementById("burger-btn");
            const menu = document.getElementById("menu");
            const links = document.querySelectorAll(".nav-link");

            // Toggle menu
            burger.addEventListener("click", () => {
                menu.classList.toggle("active");
            });

            // Close menu when clicking a link
            links.forEach(link => {
                link.addEventListener("click", () => {
                    menu.classList.remove("active");
                });
            });

            // Highlight active link
            const currentPage = window.location.pathname.split("/").pop();
            links.forEach(link => {
                if (link.getAttribute("href") === currentPage) {
                    link.classList.add("active");
                }
            });
        });
