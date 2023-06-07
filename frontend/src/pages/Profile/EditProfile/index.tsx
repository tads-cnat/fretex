import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContextProfile } from '..';
import { useAddress } from '../../../hooks/useAddress';
import { useToggle } from '../../../hooks/useToggle';
import { type IUserUpdateFormData } from '../../../interfaces';
import { schemaCliente, schemaFreteiro } from '../../ResgisterUser/schemas';
import perfil from '../../../assets/images/imgperfil.svg';
import User from '../../../assets/Svg/User';
import Password from '../../../assets/Svg/Password';
import ClosedEye from '../../../assets/Svg/ClosedEye';
import Eye from '../../../assets/Svg/Eye';
import Loc from '../../../assets/Svg/Loc';
import {
  Container,
  GridContent,
  GridEndereco,
  InputsContainerGrid,
} from './styles';
import LabelInput from '../../../components/Profile/LabelInput';
import { isFreteiro } from '../../../utils/isFreteiro';
import { type SubmitHandler } from 'react-hook-form/dist/types';
import FreteiroService from '../../../services/FreteiroService';
import ClienteService from '../../../services/ClienteService';
import { AuthContext } from '../../../context/Auth/AuthContext';
import { toast } from 'react-toastify';
import Button from '../../../components/Global/Button';
import { handleChangeInputCEP } from '../../../utils/handleChangeCEP';
import Preview from '../../../components/Preview';

const EditProfile = (): JSX.Element => {
  const navigate = useNavigate();
  const { user, setUser, handleSelectTab } = useContextProfile();
  const { user: actualUser, setUser: setActualUser } = useContext(AuthContext);
  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState<string | undefined>();
  const { value: password, toggle: togglePassword } = useToggle();
  const { value: confirmPassword, toggle: toggleConfirmPassword } = useToggle();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setFocus,
    watch,
    completeAddress,
  } = useAddress<IUserUpdateFormData>(
    isFreteiro(user) ? schemaFreteiro : schemaCliente,
  );

  const onSubmit: SubmitHandler<IUserUpdateFormData> = (data) => {
    const formData = new FormData();
    const userUpdate = {
      url_foto: image,
      first_name: data.full_name?.split(' ')[0],
      last_name: data.full_name?.split(' ').slice(1).join(' '),
    };

    Object.entries(userUpdate).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });

    if (!isFreteiro(user)) {
      ClienteService.patch(user.id, formData)
        .then((res) => {
          toast.info('Perfil atualizado com sucesso!');
          setUser(res.data);
          setActualUser(res.data);
        })
        .catch((res) => {
          console.log(res.response.data);
        });
      return;
    }

    const { endereco } = data;
    Object.entries(endereco).forEach(([key, value]) => {
      if (value) formData.append(`endereco.${key}`, String(value));
    });
    FreteiroService.patch(user.id, formData)
      .then((res) => {
        toast.info('Perfil atualizado com sucesso!');
        setUser(res.data);
        setActualUser(res.data);
      })
      .catch((res) => {
        toast.error('Erro ao atualizar perfil!');
      });
  };

  useEffect(() => {
    handleSelectTab(3);
  }, [handleSelectTab]);

  useEffect(() => {
    if (user) {
      setFocus('full_name');
      setImagePreview(user.url_foto);
      setValue('url_foto', user.url_foto);
      setValue('email', user.email);
      setValue('capa_foto', user.url_foto);
      setValue('full_name', `${user.first_name} ${user.last_name}`);
      setValue('cpf', user.cpf);

      if (isFreteiro(user)) {
        setValue('endereco.CEP', user.endereco.CEP);
        setValue('endereco.bairro', user.endereco.bairro);
        setValue('endereco.rua', user.endereco.rua);
        setValue('endereco.cidade', user.endereco.cidade);
        setValue('endereco.numero', user.endereco.numero);
        setValue('endereco.estado', user.endereco.estado);
        setValue('endereco.complemento', user.endereco.complemento);
      }
    }
  }, [user, setFocus, setValue]);

  const onChange = (e: any): void => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handlePassword = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    togglePassword();
  };

  const handleConfirmPassword = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    toggleConfirmPassword();
  };

  if (!user || actualUser == null) return <p>Carregando...</p>;
  if (user && actualUser && user.id !== actualUser.id) navigate('/login');
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="title">Edite seu perfil</h1>
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
          <p>Insira uma imagem</p>
        </Preview>

        <div className='dados'>
          <h2>
            {watch('full_name')}
            {isFreteiro(user) &&
              `- ${watch('endereco.cidade')}/${watch('endereco.estado')}`}
          </h2>
          <p>{watch('email')}</p>
        </div>

        <InputsContainerGrid active={isFreteiro(user)}>
          <GridContent active={isFreteiro(user)}>
            <h2>Seus Dados</h2>
            <LabelInput
              Icon={User}
              isError={errors.full_name}
              errorMessage={errors.full_name?.message}
            >
              <input
                {...register('full_name')}
                type="text"
                placeholder="Seu nome completo"
              />
            </LabelInput>
            <LabelInput
              Icon={User}
              isError={errors.cpf}
              errorMessage={errors.cpf?.message}
            >
              <input
                {...register('cpf')}
                type="text"
                placeholder="Seu cpf"
                disabled
              />
            </LabelInput>
            <LabelInput
              Icon={Password}
              isError={errors.password}
              errorMessage={errors.password?.message}
            >
              <input
                type={password ? 'text' : 'password'}
                {...register('password')}
                placeholder="Digite sua senha para atualização"
              />
              <button type="button" onClick={handlePassword}>
                {password ? <ClosedEye /> : <Eye />}
              </button>
            </LabelInput>
            <LabelInput
              Icon={Password}
              isError={errors.confirmPassword}
              errorMessage={errors.confirmPassword?.message}
            >
              <input
                type={confirmPassword ? 'text' : 'password'}
                {...register('confirmPassword')}
                placeholder="Confirme sua senha para atualização"
              />
              <button type="button" onClick={handleConfirmPassword}>
                {confirmPassword ? <ClosedEye /> : <Eye />}
              </button>
            </LabelInput>
          </GridContent>
          {isFreteiro(user) && (
            <GridEndereco>
              <h2>Seu Endereço</h2>
              <div>
                <LabelInput
                  Icon={Loc}
                  isError={errors.endereco?.CEP}
                  errorMessage={errors.endereco?.CEP?.message}
                >
                  <input
                    {...register('endereco.CEP')}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      handleChangeInputCEP(e, setValue, 'endereco.CEP');
                    }}
                    placeholder="Seu CEP"
                    onBlur={completeAddress}
                  />
                </LabelInput>
                <LabelInput
                  Icon={Loc}
                  isError={errors.endereco?.rua}
                  errorMessage={errors.endereco?.rua?.message}
                >
                  <input
                    {...register('endereco.rua')}
                    type="text"
                    placeholder="Sua rua"
                  />
                </LabelInput>
                <LabelInput
                  Icon={Loc}
                  isError={errors.endereco?.numero}
                  errorMessage={errors.endereco?.numero?.message}
                >
                  <input
                    {...register('endereco.numero')}
                    type="text"
                    placeholder="Número da sua casa"
                  />
                </LabelInput>
              </div>
              <div>
                <LabelInput
                  Icon={Loc}
                  isError={errors.endereco?.bairro}
                  errorMessage={errors.endereco?.bairro?.message}
                >
                  <input
                    {...register('endereco.bairro')}
                    type="text"
                    placeholder="Seu bairro"
                  />
                </LabelInput>
                <LabelInput
                  Icon={Loc}
                  isError={errors.endereco?.cidade}
                  errorMessage={errors.endereco?.cidade?.message}
                >
                  <input
                    {...register('endereco.cidade')}
                    type="text"
                    placeholder="Sua cidade"
                  />
                </LabelInput>

                <LabelInput
                  Icon={Loc}
                  isError={errors.endereco?.estado}
                  errorMessage={errors.endereco?.estado?.message}
                >
                  <input
                    {...register('endereco.estado')}
                    type="text"
                    placeholder="Seu estado"
                  />
                </LabelInput>
              </div>
              <LabelInput
                Icon={Loc}
                isError={errors.endereco?.complemento}
                errorMessage={errors.endereco?.complemento?.message}
                style={{ gridColumn: '1/-1' }}
              >
                <input
                  {...register('endereco.complemento')}
                  type="text"
                  placeholder="Complemento"
                />
              </LabelInput>
            </GridEndereco>
          )}
        </InputsContainerGrid>
        <div className="containerButton">
          <Button isButton>Atualizar Perfil</Button>
        </div>
      </form>
    </Container>
  );
};

export default EditProfile;
