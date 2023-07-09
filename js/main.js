// Sticky navigation
const headerEl = document.querySelector(".section-hero");
const imgEl = document.querySelector(".header-img");

const observer = new IntersectionObserver(
    function (entries) {
        const entry = entries[0];
        console.log(entry);
        if (!entry.isIntersecting) {
            document.body.classList.add("sticky");
            imgEl.setAttribute("src", "./img/logo.webp");
        }
        if (entry.isIntersecting) {
            document.body.classList.remove("sticky");
            imgEl.setAttribute("src", "./img/logo-white.webp");
        }
    },
    {
        root: null,
        threshold: 0,
        // rootMargin: "-96px",
    }
);
observer.observe(headerEl);

// Smooth scrolling
// const allLinks = document.querySelectorAll("a:link");

// allLinks.forEach((link) => {
//     link.addEventListener("click", function (e) {
//         e.preventDefault();
//         const href = link.setAttribute("href");
//     });

//     // Scroll to top
//     if (href === "#") {
//         window.scrollTo({
//             top: 0,
//             behavior: "smooth",
//         });
//     }

//     // Scroll to other links
//     if (href !== "#" && href.startsWith("#")) {
//         const sectionEl = document.querySelector(href);
//         sectionEl.scrollIntoView({ behavior: "smooth" });
//     }
// });
