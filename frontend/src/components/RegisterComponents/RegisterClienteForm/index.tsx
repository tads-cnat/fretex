import { SpanYellow } from '../../../styles'
import { ContainerForm, BtnYellow, ContainerPrincipal, ContainerContent } from './styles'

const index = () => {
    return (
        <ContainerPrincipal>
            <ContainerForm>
                <form method="POST">
                    <h1>Crie sua conta</h1>
                    <label>
                        <input
                            type='email'
                            name='email'
                            required
                            placeholder='Seu E-mail' />
                    </label>
                    <label>
                        <input
                            type='text'
                            name='nome'
                            required
                            placeholder='Seu nome completo' />
                    </label>
                    <label>
                        <input
                            type='password'
                            name='password'
                            required
                            placeholder='Sua senha' />
                    </label>
                    <label>
                        <input
                            type='password'
                            name='confirm-password'
                            required
                            placeholder='Confirme sua senha' />
                    </label>
                    <BtnYellow>
                        Cadastre-se
                    </BtnYellow>
                </form>
                <div>
                    <p>Já tem uma conta?</p><a href='/login'>Entrar</a>
                </div>
            </ContainerForm>
            <ContainerContent>
                <div>
                    <h1>Frete<SpanYellow>X</SpanYellow></h1>

                    <h2>Conta Cliente</h2>
                    <p> Como cliente você pode cadastrar
                        seus pedidos de frete e negociar
                        diretamente com os nossos freteiros parceiros</p>
                </div>
            </ContainerContent>
        </ContainerPrincipal>
    )
}

export default index