import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { ContainerPrincipal, ContainerForm, OptionCard } from './styles';
import { Button } from '../../../../components';
import { RiUserAddLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { setStep, setRole } from '../../../../store/slicers/RegisterStepSlicer';
import { toast } from 'react-toastify';
import { ClienteContent, FreteiroContent } from './contents';

export const SelectRole = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const role = useSelector((state: any) => state.registerStep.role);
    const dispatch = useDispatch();

    const handleSelectRole = (role: "cliente" | "freteiro") => {
        dispatch(setRole(role));
    }

    const handleSubmit = () => {
        if(role == 0) return toast.error("Selecione um tipo de conta");
        setIsLoading(true);
        dispatch(setStep(3));
    }

    return (
        <ContainerPrincipal>
            <ContainerForm>
                <h1>Selecione o tipo de conta</h1>
                <section>
                    <OptionCard $selected={role == "cliente"} onClick={()=>{handleSelectRole("cliente")}}>
                        <FaUserCircle color={'var(--text-light)'} fontSize={'4rem'} />
                        <h1>Cliente</h1>
                    </OptionCard>
                    <OptionCard $selected={role == "freteiro"} onClick={()=>{handleSelectRole("freteiro")}}>
                        <FaUserCircle color={'var(--text-light)'} fontSize={'4rem'} />
                        <h1>Freteiro</h1>
                </OptionCard> 
                </section>  
                <Button
                    isButton
                    Icon={RiUserAddLine}
                    type="submit"
                    isDisabled={isLoading}
                    onClick={() => { handleSubmit() }}
                    >
                    Cadastre-se
                </Button>
            </ContainerForm>
            { role == 1 ? <ClienteContent /> : <FreteiroContent />}

        </ContainerPrincipal>
    )

}