function initAnimacaoScroll(seletor) {
    const sections = document.querySelectorAll(seletor);
    const windowMetade = window.innerHeight * 0.6;

    if (sections.length) {
        sections[0].classList.add("ativo");

        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop =
                    section.getBoundingClientRect().top - windowMetade;
                if (sectionTop < 0) {
                    section.classList.add("ativo");
                } else {
                    section.classList.remove("ativo");
                }
            });
        }

        window.addEventListener("scroll", animaScroll);
    }
}

initAnimacaoScroll("[data-anime=scroll]");
initAnimacaoScroll("[data-anime=scroll2]");
initAnimacaoScroll("[data-anime=scroll3]");
