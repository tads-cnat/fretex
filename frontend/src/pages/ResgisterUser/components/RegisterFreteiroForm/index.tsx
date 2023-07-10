import {
  ContainerForm,
  ContainerPrincipal,
} from './styles';
import perfil from '../../../../assets/images/imgperfil.svg';
import Loc from '../../../../assets/Svg/Loc';
import { useEffect, useState } from 'react';
import { type IFreteiroFormData } from '../../../../interfaces';
import { useNavigate } from 'react-router-dom';
import { schemaFreteiro } from '../../schemas';
import { useFreteiroForm } from '../../../../hooks/useFreteiroForm';
import { useAddress } from '../../../../hooks/useAddress';
import { toast } from 'react-toastify';
import { Button, Input, Preview } from '../../../../components';
import { inputs } from './inputs';
import { handleChangeInputCEP } from '../../../../utils/handleChangeCEP';
import { RiUserAddLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';

export const RegisterFreteiroForm = (): JSX.Element => {
  const [imagePreview, setImagePreview] = useState<string>();
  const email = useSelector((state: RootState) => state.registerStep.email);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setFocus,
    completeAddress,
  } = useAddress<IFreteiroFormData>(schemaFreteiro);

  const navigate = useNavigate();
  const { onSubmit, error, isLoading } = useFreteiroForm({
    onSuccess: () => {
      toast.success('Freteiro cadastrado com sucesso!');
      navigate('/login');
    },
  });

  useEffect(() => {
    setFocus('full_name');
    setValue('email', email || '');
  }, [setFocus]);

  const onChange = (e: any): void => {
    const file = e.target.files[0];
    setValue('url_foto', file);
    setImagePreview(URL.createObjectURL(file));
  };

  return (
    <ContainerPrincipal>
      <ContainerForm>
        <form onSubmit={handleSubmit(onSubmit)}>
              <h1>Crie sua conta</h1>
                <div className="preview-div">
                  <Preview
                    img={imagePreview}
                    imgDefault={perfil}
                    width={'160px'}
                    tipo={2}
                  >
                    <input
                      type="file"
                      {...register('url_foto')}
                      accept="image/jpeg,image/png,image/gif"
                      onChange={onChange}
                    />
                    <p>Clique para inserir uma imagem</p>
                    {error !== '' && <span className="error-light">{error}</span>}
                  </Preview>
                </div>
              {inputs.map((input, index) => (
                <Input
                  key={index}
                  {...register(`${input.name}`)}
                  onChange={
                    input.onChange !== undefined
                      ? (e: React.ChangeEvent<HTMLInputElement>) => {
                          input.onChange(e, setValue);
                          setValue(`${input.name}`, e.target.value, {
                            shouldValidate: true,
                          });
                        }
                      : (e: React.ChangeEvent<HTMLInputElement>) => {
                          setValue(`${input.name}`, e.target.value, {
                            shouldValidate: true,
                          });
                        }
                  }
                  type={input.type}
                  label={input.label}
                  placeholder={input.placeholder}
                  svg={input.svg}
                  error={errors[input.name]}
                  required={input.required}
                />
              ))}
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
    </ContainerPrincipal>
  );
};
