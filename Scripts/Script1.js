function scrollToSection(sectionId) {
    const targetElement = document.getElementById(sectionId);
    window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
    });
}
document.addEventListener("DOMContentLoaded", function() {
    let fadeElements = document.querySelectorAll(".fade-in");
    function checkVisibility() {
        fadeElements.forEach(el => {
            let rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9) {
                el.classList.add("visible");
            }
        });
    }
    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});