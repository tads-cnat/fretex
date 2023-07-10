import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { ContainerPrincipal, ContainerForm, OptionCard } from './styles';
import { Button } from '../../../../components';
import { RiUserAddLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { setStep } from '../../../../store/slicers/RegisterStepSlicer';
import { toast } from 'react-toastify';

export const SelectRole = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [role, setRole] = useState<number>(0);
    const dispatch = useDispatch();

    const handleSelectRole = (role: number) => {
        setRole(role);
    }

    const handleSubmit = () => {
        console.log("apertou")
        if(role == 0) return toast.error("Selecione um tipo de conta");
        setIsLoading(true);
        dispatch(setStep(role == 1 ? 3 : 4));
    }

    return (
        <ContainerPrincipal>
            <ContainerForm>
                <h1>Selecione o tipo de conta</h1>
                <section>
                    <OptionCard $selected={role == 1} onClick={()=>{handleSelectRole(1)}}>
                        <FaUserCircle color={'var(--text-light)'} fontSize={'4rem'} />
                        <h1>Cliente</h1>
                    </OptionCard>
                    <OptionCard $selected={role == 2} onClick={()=>{handleSelectRole(2)}}>
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
        </ContainerPrincipal>
    )

}