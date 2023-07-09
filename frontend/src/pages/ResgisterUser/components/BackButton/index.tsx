import { Button } from '../../../../components/utils/Button';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { backStep } from '../../../../store/slicers/RegisterStepSlicer';
import { WrapperButton } from './styles';

export const BackButton  = () => {

    const dispatch = useDispatch()

    return (
        <WrapperButton>
            <Button
                type='button'
                fontSize='medium'
                isButton={true}
                Icon={RiArrowLeftSLine}
                onClick={() => dispatch(backStep())}
                >
                Voltar
            </Button>
        </WrapperButton>
    );

}