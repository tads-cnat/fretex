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
            <Input
              {...register('endereco.CEP')}
              type="text"
              label="CEP"
              placeholder="Seu CEP"
              svg={<Loc />}
              error={errors.endereco?.CEP}
              required={true}
              onBlur={completeAddress}
            />
            <Input
              {...register('endereco.rua')}
              type="text"
              label="Rua"
              placeholder="Sua rua"
              svg={<Loc />}
              error={errors.endereco?.rua}
              required={true}
            />
            <Input
              {...register('endereco.numero')}
              type="text"
              label="Número"
              placeholder="Número da sua casa"
              svg={<Loc />}
              error={errors.endereco?.numero}
              required={true}
            />

            <Input
              {...register('endereco.bairro')}
              type="text"
              label="Bairro"
              placeholder="Seu bairro"
              svg={<Loc />}
              error={errors.endereco?.bairro}
              required={true}
            />

            <Input
              {...register('endereco.cidade')}
              type="text"
              label="Cidade"
              placeholder="Sua cidade"
              svg={<Loc />}
              error={errors.endereco?.cidade}
              required={true}
            />

            <Input
              {...register('endereco.estado')}
              type="text"
              label="Estado"
              placeholder="Seu estado"
              svg={<Loc />}
              error={errors.endereco?.estado}
              required={true}
            />

            <Input
              {...register('endereco.complemento')}
              type="text"
              label="Complemento"
              placeholder="Complemento..."
              svg={<Loc />}
              error={errors.endereco?.complemento}
            />
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
