function loginValidation() {
    $(document).ready(function(){
        $("#login").validate({
            rules: {
                email: {
                    required: true,
                    email: true
                },
                senha: {
                    required: true
                }
            },
            messages: {
                email: {
                    required: "Por favor, digite o seu email.",
                    email: "Por favor, digite um email válido."
                },
                senha: {
                    required: "Por favor, digite a sua senha."
                }
            }
        })     
    })
}

loginValidation()