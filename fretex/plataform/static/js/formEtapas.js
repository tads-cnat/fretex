function formEtapas(){
    const passos = document.querySelectorAll(".step");
    const proximo = document.querySelectorAll("#next");
    const anterior = document.querySelectorAll("#prev");
    const marginBottomForm = document.querySelector("#marginBottomForm");
    if(passos.length && proximo.length && anterior.length){
        passos[0].classList.add("ativo");

        function proximoForm(index){
            passos[index].classList.remove("ativo");
            passos[index + 1].classList.add("ativo");
            if(index + 1 == passos.length - 1){
                marginBottomForm.classList.remove("md:mb-5");
                marginBottomForm.classList.add("md:mb-64");
            } else{
                marginBottomForm.classList.remove("md:mb-64");
                marginBottomForm.classList.add("md:mb-5");
            }
        }

        function formAnterior(index){
            passos[index+1].classList.remove("ativo");
            passos[index].classList.add("ativo");
            if(index + 1 == passos.length - 1){
                marginBottomForm.classList.remove("md:mb-5");
                marginBottomForm.classList.add("md:mb-64");
            } else{
                marginBottomForm.classList.remove("md:mb-64");
                marginBottomForm.classList.add("md:mb-5");
            }
        }

        passos.forEach((passo, index) => {
            if(proximo[index]){
                proximo[index].addEventListener('click', () => {
                    proximoForm(index);
                });
            }

            if(anterior[index]){
                anterior[index].addEventListener('click', () => {
                    formAnterior(index);
                });
            }
        });
    }
}

formEtapas();