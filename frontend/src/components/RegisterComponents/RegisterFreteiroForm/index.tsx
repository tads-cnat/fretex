import {
  ContainerMain,
  ContainerForm2,
  RegisterPerson,
  PerfilImg,
  RegisterAddress,
  Login,
  ContainerInfos,
  BtnYellow,
} from './styles';
import InputMask from 'react-input-mask';
import perfil from '../../../assets/images/imgperfil.svg';
import Email from '../../../assets/Svg/Email';
import Loc from '../../../assets/Svg/Loc';
import User from '../../../assets/Svg/User';
import Password from '../../../assets/Svg/Password';
import { SpanYellow } from '../../../styles/globalStyles';
import { useEffect, useState } from 'react';
import { type IFreteiroFormData } from '../../../interfaces';
import { Link, useNavigate } from 'react-router-dom';
import { schemaFreteiro } from '../../../pages/ResgisterUser/schemas';
import { useFreteiroForm } from '../../../hooks/useFreteiroForm';
import { useAddress } from '../../../hooks/useAddress';
import { toast } from 'react-toastify';
import { Input } from '../../Input';

const RegisterFreteiroForm = (): JSX.Element => {
  const [imagePreview, setImagePreview] = useState<string>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setFocus,
    completeAddress,
  } = useAddress<IFreteiroFormData>(schemaFreteiro);

  const navigate = useNavigate();

  const { onSubmit, error } = useFreteiroForm({
    onSuccess: () => {
      toast.success('Freteiro cadastrado com sucesso!');
      navigate('/login');
    },
  });

  useEffect(() => {
    setFocus('email');
  }, [setFocus]);

  const onChange = (e: any): void => {
    const file = e.target.files[0];
    setValue('url_foto', file);
    setImagePreview(URL.createObjectURL(file));
  };

  const inputsPerson = [
    {
      type: 'email',
      name: 'email',
      label: 'Email',
      placeholder: 'Seu email',
      required: true,
      svg: <Email />,
    },
    {
      type: 'text',
      name: 'full_name',
      label: 'Nome completo',
      placeholder: 'Seu nome completo',
      required: true,
      svg: <User />,
    },
    {
      type: 'text',
      name: 'cpf',
      label: 'CPF',
      placeholder: 'Seu CPF',
      required: true,
      svg: <User />,
    },

    {
      type: 'password',
      name: 'password',
      label: 'Senha',
      placeholder: 'Sua senha',
      required: true,
      svg: <Password />,
    },

    {
      type: 'password',
      name: 'confirmPassword',
      label: 'Confirmação da senha',
      placeholder: 'Confirme sua senha',
      required: true,
      svg: <Password />,
    },
  ];

  const inputsAdress = [
    {
      type: 'text',
      name: 'endereco.CEP',
      label: 'CEP',
      placeholder: 'Seu CEP',
      required: true,
      svg: <Loc />,
    },
    {
      type: 'text',
      name: 'endereco.rua',
      label: 'Rua',
      placeholder: 'Sua rua',
      required: true,
      svg: <Loc />,
    },
    {
      type: 'text',
      name: 'endereco.numero',
      label: 'Número',
      placeholder: 'Número da sua casa',
      required: true,
      svg: <Loc />,
    },

    {
      type: 'text',
      name: 'endereco.bairro',
      label: 'Bairro',
      placeholder: 'Seu bairro',
      required: true,
      svg: <Loc />,
    },

    {
      type: 'text',
      name: 'endereco.cidade',
      label: 'Cidade',
      placeholder: 'Sua cidade',
      required: true,
      svg: <Loc />,
    },

    {
      type: 'text',
      name: 'endereco.estado',
      label: 'Estado',
      placeholder: 'Seu estado',
      required: true,
      svg: <Loc />,
    },

    {
      type: 'text',
      name: 'endereco.complemento',
      label: 'Complemento',
      placeholder: 'Complemento...',
      required: true,
      svg: <Loc />,
    },
  ];

  return (
    <ContainerMain>
      <ContainerForm2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <RegisterPerson>
            <h1>Crie sua conta</h1>
            <PerfilImg>
              <label>
                <img src={imagePreview || perfil} alt="perfil" />
                <input
                  type="file"
                  {...register('url_foto')}
                  accept="image/jpeg,image/png,image/gif"
                  onChange={onChange}
                />
                <p>Clique para inserir uma imagem</p>
                {/* {errors.url_foto != null && (
                  <p className="error">{errors.url_foto?.message}</p>
                )} */}
              </label>
            </PerfilImg>
            {inputsPerson.map((input, index) => (
              <Input
                key={index}
                {...register(`${input.name}`)}
                type={input.type}
                label={input.label}
                placeholder={input.placeholder}
                svg={input.svg}
                error={errors[input.name]}
                required={input.required}
              />
            ))}
          </RegisterPerson>
          <RegisterAddress>
            <h1 className="title">Seu Endereço</h1>
            {inputsAdress.map((input, index) => (
              <Input
                key={index}
                {...register(`${input.name}`)}
                type={input.type}
                label={input.label}
                placeholder={input.placeholder}
                svg={input.svg}
                error={errors[input.name]}
                required={input.required}
              />
            ))}
            {/* <label>
              <Loc />
              <InputMask
                mask="99999-999"
                {...register('endereco.CEP')}
                placeholder="Seu CEP"
                onBlur={completeAddress}
              ></InputMask>
            </label>
            {errors.endereco?.CEP != null && (
              <p className="error">{errors.endereco.CEP?.message}</p>
            )}
            <label>
              <Loc />
              <input
                {...register('endereco.rua')}
                type="text"
                placeholder="Sua rua"
              />
            </label>
            {errors.endereco?.rua != null && (
              <p className="error">{errors.endereco.rua?.message}</p>
            )}
            <label>
              <Loc />
              <input
                {...register('endereco.numero')}
                type="text"
                placeholder="Número da sua casa"
              />
            </label>
            {errors.endereco?.numero != null && (
              <p className="error">{errors.endereco.numero?.message}</p>
            )}
            <label>
              <Loc />
              <input
                {...register('endereco.bairro')}
                type="text"
                placeholder="Seu bairro"
              />
            </label>
            {errors.endereco?.bairro != null && (
              <p className="error">{errors.endereco.bairro?.message}</p>
            )}
            <label>
              <Loc />
              <input
                {...register('endereco.cidade')}
                type="text"
                placeholder="Sua cidade"
              />
            </label>
            {errors.endereco?.cidade != null && (
              <p className="error">{errors?.endereco.cidade.message}</p>
            )}
            <label>
              <Loc />
              <input
                {...register('endereco.estado')}
                type="text"
                placeholder="Seu estado"
              />
            </label>
            {errors.endereco?.estado != null && (
              <p className="error">{errors.endereco.estado?.message}</p>
            )}
            <label>
              <Loc />
              <input
                {...register('endereco.complemento')}
                type="text"
                placeholder="Complemento"
              />
            </label>
            {errors.endereco?.complemento != null && (
              <p className="error">{errors.endereco.complemento?.message}</p>
            )} */}
            {error !== '' && <p className="error">{error}</p>}
            <BtnYellow>Cadastre-se</BtnYellow>
          </RegisterAddress>
        </form>
        <Login>
          <span>
            Já tem uma conta? <Link to="/login">Entrar</Link>
          </span>
        </Login>
      </ContainerForm2>
      <ContainerInfos>
        <div>
          <section>
            <h1>
              <Link to="/">
                Frete<SpanYellow>X</SpanYellow>
              </Link>
            </h1>

            <h2>Conta Freteiro</h2>
            <p>
              Na conta de freteiro você pode realizar propostas para vários
              pedidos de fretes diferentes, e fazer sua grana.
            </p>
          </section>
        </div>
      </ContainerInfos>
    </ContainerMain>
  );
};

export default RegisterFreteiroForm;
