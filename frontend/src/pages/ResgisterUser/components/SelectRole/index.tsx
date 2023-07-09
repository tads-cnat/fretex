import { ContainerPrincipal, ContainerForm, OptionCard } from './styles';





export const SelectRole = () => {

    return (
        <ContainerPrincipal>
            <ContainerForm>
                <h1>Selecione o tipo de conta</h1>
                <section>
                    <OptionCard>
                        <h1>Cliente</h1>
                    </OptionCard>
                    <OptionCard>
                        <h1>Freteiro</h1>
                </OptionCard> 
                </section>  
            </ContainerForm>
        </ContainerPrincipal>
    )

}