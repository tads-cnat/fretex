function initNav() {
    const item = document.querySelector("#menu-1");
    const item2 = document.querySelector("#mobile-menu-2");

    if(item){
        function activeNav() {
            item2.classList.toggle('hidden');
        }
        item.addEventListener("click", activeNav);
    }
}

function initPerfil() {
    const item = document.querySelector("#user-menu-button");
    const item2 = document.querySelector("#dropdown");

    if(item){
        function activePerfil() {
            item2.classList.toggle('hidden');
        }
        item.addEventListener("click", activePerfil);
    }
}

initNav();
initPerfil();
