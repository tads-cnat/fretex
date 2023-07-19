import { ContainerForm, ContainerPrincipal } from './styles';
import { useEffect } from 'react';
import { IFreteiroFormData } from '../../../../interfaces';
import { schemaFreteiroAdress } from '../../schemas';
import { Button, Input } from '../../../../components';
import { RiUserAddLine } from 'react-icons/ri';
import { useSelector, useDispatch } from 'react-redux';
import { clearRedux } from '../../../../store/slicers/RegisterStepSlicer';
import { RootState } from '../../../../store';
import Loc from '../../../../assets/Svg/Loc';
import { handleChangeInputCEP } from '../../../../utils/handleChangeCEP';
import { useAddress } from '../../../../hooks/useAddress';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useFreteiroForm } from '../../../../hooks/useFreteiroForm';
import { FreteiroContent } from '../SelectRole/contents';

export default function EnderecoInfo() {
  const freteiro = useSelector(
    (state: RootState) => state.registerStep.freteiro,
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setFocus,
    completeAddress,
  } = useAddress<IFreteiroFormData>(schemaFreteiroAdress);

  const { onSubmit, isLoading } = useFreteiroForm({
    onSuccess: () => {
      toast.success('Freteiro cadastrado com sucesso!');
      dispatch(clearRedux());
      navigate('/login');
    },
  });

  useEffect(() => {
    setFocus('endereco.CEP');
    //adicionar todos os campos de freteiro no setValue
    if (freteiro != null) {
      setValue('email', freteiro.email, { shouldValidate: true });
      setValue('full_name', freteiro.full_name, { shouldValidate: true });
      setValue('password', freteiro.password, { shouldValidate: true });
      setValue('confirmPassword', freteiro.confirmPassword, {
        shouldValidate: true,
      });
      setValue('cpf', freteiro.cpf, { shouldValidate: true });
      setValue('url_foto', freteiro.url_foto, { shouldValidate: true });
    }
  }, [setFocus]);

  return (
    <ContainerPrincipal>
      <ContainerForm>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Endereço</h1>
          <Input
            {...register('endereco.CEP')}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleChangeInputCEP(e, setValue, 'endereco.CEP');
            }}
            type="text"
            label="CEP"
            placeholder="00000-000"
            svg={<Loc />}
            error={errors.endereco?.CEP}
            required={true}
            onBlur={completeAddress}
          />
          <Input
            {...register('endereco.rua')}
            type="text"
            label="Rua"
            placeholder="Ex: Travessa,Rua,Avenida..."
            svg={<Loc />}
            error={errors.endereco?.rua}
            required={true}
          />
          <Input
            {...register('endereco.numero')}
            type="text"
            label="Número"
            placeholder="Ex: 176"
            svg={<Loc />}
            error={errors.endereco?.numero}
            required={true}
          />

          <Input
            {...register('endereco.bairro')}
            type="text"
            label="Bairro"
            placeholder="Ex: Tirol"
            svg={<Loc />}
            error={errors.endereco?.bairro}
            required={true}
          />

          <Input
            {...register('endereco.cidade')}
            type="text"
            label="Cidade"
            placeholder="Ex: Natal"
            svg={<Loc />}
            error={errors.endereco?.cidade}
            required={true}
          />

          <Input
            {...register('endereco.estado')}
            type="text"
            label="Estado"
            placeholder="Ex: RN"
            svg={<Loc />}
            error={errors.endereco?.estado}
            required={true}
          />

          <Input
            {...register('endereco.complemento')}
            type="text"
            label="Complemento"
            placeholder="Ex: Casa, apartamento..."
            svg={<Loc />}
            error={errors.endereco?.complemento}
          />
          <section>
            <Button
              isButton
              Icon={RiUserAddLine}
              type="submit"
              isDisabled={isLoading}
            >
              Cadastre-se
            </Button>
          </section>
        </form>
      </ContainerForm>
      <FreteiroContent />
    </ContainerPrincipal>
  );
}
