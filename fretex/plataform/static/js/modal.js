const propostaInput = document.querySelector("#proposta_id");
const modal = document.getElementById("myModal");
const modalF = document.getElementById("myModalF");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];
const span2 = document.getElementsByClassName("fechar")[0];


function onContrapropostaButtonClick(id) {
    propostaInput.value = id; 
    console.log(propostaInput)
    modal.style.display = "block";
}

function onContrapropostaButtonClickF(id) {
    propostaInput.value = id; 
    console.log(propostaInput)
    modalF.style.display = "block";
}


function modall(){
    if (btn) {
        btn.onclick = function() {
            modal.style.display = "block";
        }
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function modallF(){
    if (btn) {
        btn.onclick = function() {
            modal.style.display = "block";
        }
    }

    span2.onclick = function() {
        modalF.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modalF) {
            modalF.style.display = "none";
        }
    }
}

modall();
modallF();

