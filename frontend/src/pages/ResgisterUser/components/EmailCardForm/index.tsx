import React, { useState, useEffect } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaUser } from '../../schemas';
import { type IUserFormData } from '../../../../interfaces';
import { ContainerPrincipal, ContainerForm, DivIcon } from './styles';
import { Link } from 'react-router-dom';
import { inputs } from './inputs';
import { Button, Input } from '../../../../components';
import { RiUserAddLine } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setStep, setEmail } from '../../../../store/slicers/RegisterStepSlicer';
import { RootState } from '../../../../store';


export const EmailCardForm = () => {
    const [error, setError] = useState<any>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const email = useSelector((state: RootState) => state.registerStep.email)
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
        setFocus,
    } = useForm<IUserFormData>({
        resolver: yupResolver(schemaUser),
    });
    const dispatch = useDispatch()


    useEffect(() => {
        setFocus('email');
        setValue('email', email || '')
    }, [setFocus]);

    const onSubmit: SubmitHandler<IUserFormData> = (e) => {
        setError('');
        setIsLoading(true);
        dispatch(setEmail(e.email))
        dispatch(setStep(2))
    };
            

    return (
        <ContainerPrincipal>
            <ContainerForm>
                <DivIcon>
                  <FaUserCircle color={'var(--bg-ligth)'} fontSize={'4rem'} />
                </DivIcon>
                <form onSubmit={handleSubmit(onSubmit)}>
                
                    <h1>Crie sua conta</h1>
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
                                name={input.name}
                                label={input.label}
                                placeholder={input.placeholder}
                                required={input.required}
                                register={register}
                                error={errors[input.name]}
                                svg={input.svg}
                            />
                        ))}
                    </div>
                    {error !== '' && <p className="error-light">{error}</p>}
                    <section>
                        <Button
                        isButton
                        Icon={RiUserAddLine}
                        type="submit"
                        isDisabled={isLoading}
                        >
                        Cadastre-se
                        </Button>
                        <p className='ajudaCadastro'>
                        Já tem uma conta?<Link to="/login"> Entrar</Link>
                        </p>
                    </section>
                </form>
            </ContainerForm>
        </ContainerPrincipal>

    );

}