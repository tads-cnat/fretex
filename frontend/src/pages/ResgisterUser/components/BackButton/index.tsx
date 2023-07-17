import { Button } from '../../../../components/utils/Button';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { backStep, backFreteiroStep } from '../../../../store/slicers/RegisterStepSlicer';
import { WrapperButton } from './styles';
import { RootState } from '../../../../store';

export const BackButton  = () => {

    const freteiroStep = useSelector((state: RootState) => state.registerStep.freteiroStep);


    const dispatch = useDispatch()

    return (
        <WrapperButton>
            <Button
                type='button'
                fontSize='medium'
                isButton={true}
                Icon={RiArrowLeftSLine}
                onClick={() => dispatch(freteiroStep == 2 ? backFreteiroStep() : backStep())}
                >
                Voltar
            </Button>
        </WrapperButton>
    );

}