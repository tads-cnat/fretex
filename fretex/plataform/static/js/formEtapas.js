function formEtapas(){
    const passos = document.querySelectorAll(".step");
    const proximo = document.querySelectorAll("#next");
    const anterior = document.querySelectorAll("#prev");

    if(passos.length && proximo.length && anterior.length){
        passos[0].classList.add("ativo");

        function proximoForm(index){
            passos[index].classList.remove("ativo");
            passos[index + 1].classList.add("ativo");
        }

        function formAnterior(index){
            passos[index+1].classList.remove("ativo");
            passos[index].classList.add("ativo");
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