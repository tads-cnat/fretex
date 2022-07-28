function registerValidation(element) {
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    $(document).ready(function(){
        $(element).validate({
            rules: {
                nome: {
                    required: true,
                    maxlength: 100
                },
                email: {
                    required: true,
                    email: true,
                    maxlength: 45
                },
                cpf: {
                    required: true,
                    minlength: 14
                },
                cep: {
                    required: true,
                    minlength: 9
                },
                numero: {
                    required: true,
                    number: true
                },
                rua: {
                    required: true,
                    maxlength: 100
                },
                estado: {
                    required: true,
                },
                cidade: {
                    required: true,
                    maxlength: 100
                },
                bairro: {
                    required: true,
                    maxlength: 100
                },
                complemento: {
                    maxlength: 200
                },
                senha: {
                    required: true,
                    minlength: 8,
                    maxlength: 40
                },
                confirmarSenha: {
                    required: true,
                    equalTo: "#senha"
                },
                aceitarTermos: {
                    required: true
                },
                marca: {
                    required: true,
                    maxlength: 30
                },
                modelo: {
                    required: true,
                    maxlength: 30
                },
                ano: {
                    required: true,
                    maxlength: 4,
                    minlength: 4,
                    number: true
                },
                placaVeiculo: {
                    required: true,
                    maxlength: 7,
                    minlength: 7
                },
                corVeiculo: {
                    required: true,
                    maxlength: 20
                },
                tipoVeiculo: {
                    required: true
                }
            },
            messages: {
                nome: {
                    required: "Por favor, digite o seu nome.",
                    maxlength: "Use 100 caracteres ou menos para o seu nome."
                },
                email: {
                    required: "Por favor, digite o seu email.",
                    email: "Por favor, digite um email válido.",
                    maxlength: "Email inválido."
                },
                cpf: {
                    required: "Digite o seu CPF.",
                    minlength: "Digite um CPF válido."
                },
                cep: {
                    required: "Digite o seu CEP.",
                    minlength: "Digite um CEP válido."
                },
                rua: {
                    required: "Por favor, digite a sua rua.",
                },
                numero: {
                    required: "Obrigatório",
                    number: "Inválido"
                },
                estado: {
                    required: "Selecione uma opção."
                },
                cidade: {
                    required: "Digite uma cidade.",
                    maxlength: "Use 100 caracteres ou menos para a sua cidade."
                },
                bairro: {
                    required: "Digite um bairro.",
                    maxlength: "Use 100 caracteres ou menos para o seu bairro."
                },
                complemento: {
                    maxlength: "Use 200 caracteres ou menos para o complemento."
                },
                senha: {
                    required: "Por favor, digite a sua senha.",
                    minlength: "Use 8 caracteres ou mais para sua senha.",
                    maxlength: "Use 40 caracteres ou menos para sua senha."
                },
                confirmarSenha: {
                    required: "Por favor, Confirme a sua senha.",
                    equalTo: "As senhas não são iguais. Tente novamente."
                },
                aceitarTermos: {
                    required: "Por favor, aceite os termos do site"
                },
                marca: {
                    required: "Por favor, digite a marca do veículo.",
                    maxlength: "Use 30 caracteres ou menos para a marca do veículo."
                },
                modelo: {
                    required: "Por favor, digite o modelo do veículo.",
                    maxlength: "Use 30 caracteres ou menos para o modelo do veículo."
                },
                ano: {
                    required: "Por favor, digite o ano do veículo.",
                    number: "Por favor, digite números. Ex: 2022.",
                    maxlength: "Ano inválido.",
                    minlength: "Ano inválido."
                },
                placaVeiculo: {
                    required: "Por favor, digite a placa do veículo.",
                    maxlength: "Placa inválida.",
                    minlength: "Placa inválida."
                },
                corVeiculo: {
                    required: "Por favor, digite a cor do veículo.",
                    maxlength: "Use 20 caracteres ou menos para a cor do veículo."
                },
                tipoVeiculo: {
                    required: "Por favor, selecione uma opção."
                }
            }
        })     
    })
}

registerValidation("#cadastroFreteiro")
registerValidation("#cadastroCliente")
registerValidation("#perfilFreteiro")
registerValidation("#perfilCliente")
registerValidation("#adicionarVeiculo")
registerValidation("cadastroFrete")