import {
  ContainerForm,
  ContainerPrincipal,
  PersonalInfoContainer,
} from './styles';
import perfil from '../../../../assets/images/imgperfil.svg';
import { useEffect, useState } from 'react';
import { type IfreteiroRegData } from '../../../../interfaces';
import { schemaFreteiro } from '../../schemas';
import { Button, Input, Preview } from '../../../../components';
import { inputs } from './inputs';
import { RiUserAddLine } from 'react-icons/ri';
import { useSelector, useDispatch } from 'react-redux';
import {
  setFreteiroStep,
  setFreteiro,
} from '../../../../store/slicers/RegisterStepSlicer';
import { RootState } from '../../../../store';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FreteiroContent } from '../SelectRole/contents';

export default function PersonalInfo() {
  const [error, setError] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [imagePreview, setImagePreview] = useState<string>();
  const email = useSelector((state: RootState) => state.registerStep.email);
  const freteiro = useSelector(
    (state: RootState) => state.registerStep.freteiro,
  );
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setFocus,
  } = useForm<IfreteiroRegData>({
    resolver: yupResolver(schemaFreteiro),
  });

  const onSubmit: SubmitHandler<IfreteiroRegData> = (e) => {
    if (e.url_foto.length === 0) {
      setError('Imagem obrigatória!');
      setIsLoading(false);
      return;
    }
    setError('');
    setIsLoading(true);
    dispatch(setFreteiro(e));
    dispatch(setFreteiroStep(2));
  };

  useEffect(() => {
    setFocus('full_name');
    setValue('email', email || '');
    if (freteiro != null) {
      setValue('full_name', freteiro.full_name || '');
      setValue('password', freteiro.password || '');
      setValue('cpf', freteiro.cpf || '');
      setValue('url_foto', freteiro.url_foto || '');
    }
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
          <PersonalInfoContainer>
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
            <div>
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
            </div>
          </PersonalInfoContainer>
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
