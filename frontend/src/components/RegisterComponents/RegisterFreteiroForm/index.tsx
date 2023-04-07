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
import ClosedEye from '../../../assets/Svg/ClosedEye';
import Eye from '../../../assets/Svg/Eye';
import { SpanYellow } from '../../../styles';
import { useEffect, useState } from 'react';
import { type IFreteiroFormData } from '../../../interfaces';
import { Link, useNavigate } from 'react-router-dom';
import { schemaFreteiro } from '../../../pages/ResgisterUser/schemas';
import { useToggle } from '../../../hooks/useToggle';
import { useFreteiroForm } from '../../../hooks/useFreteiroForm';
import { useAddress } from '../../../hooks/useAddress';
import { toast } from 'react-toastify';

const RegisterFreteiroForm = (): JSX.Element => {
  const [imagePreview, setImagePreview] = useState<string>();
  const { value: password, toggle: togglePassword } = useToggle();
  const { value: confirmPassword, toggle: toggleConfirmPassword } = useToggle();

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

  const handlePassword = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    togglePassword();
  };

  const handleConfirmPassword = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    toggleConfirmPassword();
  };

  useEffect(() => {
    setFocus('email');
  }, [setFocus]);

  const onChange = (e: any): void => {
    const file = e.target.files[0];
    setValue('url_foto', file);
    setImagePreview(URL.createObjectURL(file));
  };

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
                {/* errors.url_foto && <p className="error">{errors.url_foto?.message}</p> */}
              </label>
            </PerfilImg>
            <label>
              <Email />
              <input
                {...register('email')}
                type="email"
                autoComplete="on"
                placeholder="Seu E-mail"
              />
            </label>
            {errors.email != null && (
              <p className="error">{errors.email?.message}</p>
            )}
            <label>
              <User />
              <input
                {...register('full_name')}
                type="text"
                placeholder="Seu nome completo"
              />
            </label>
            {errors.full_name != null && (
              <p className="error">{errors.full_name?.message}</p>
            )}
            <label>
              <User />
              <InputMask
                mask="999.999.999-99"
                {...register('cpf')}
                placeholder="Seu cpf"
              ></InputMask>
            </label>
            {errors.cpf != null && (
              <p className="error">{errors.cpf?.message}</p>
            )}
            <label>
              <Password />
              <input
                {...register('password')}
                type={password ? 'text' : 'password'}
                placeholder="Sua senha"
              />
              <button type="button" onClick={handlePassword}>
                {password ? <ClosedEye /> : <Eye />}
              </button>
            </label>
            {errors.password != null && (
              <p className="error">{errors.password?.message}</p>
            )}
            <label>
              <Password />
              <input
                {...register('confirmPassword')}
                type={confirmPassword ? 'text' : 'password'}
                placeholder="Confirme sua senha"
              />
              <button type="button" onClick={handleConfirmPassword}>
                {confirmPassword ? <ClosedEye /> : <Eye />}
              </button>
            </label>
            {errors.confirmPassword != null && (
              <p className="error">{errors.confirmPassword?.message}</p>
            )}
          </RegisterPerson>
          <RegisterAddress>
            <h1 className="title">Seu Endereço</h1>
            <label>
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
            )}
            {error && <p className="error">{error}</p>}
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
