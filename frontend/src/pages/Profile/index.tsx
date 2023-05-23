import { useContext, useState } from 'react';
import { Outlet, useOutletContext, useParams } from 'react-router-dom';
import Layout from '../../components/Layout';
import Banner from '../../components/Profile/Banner';
import ProfileMenu from '../../components/Profile/Menu';
import UserInfo from '../../components/Profile/UserInfo';
import { AuthContext } from '../../context/Auth/AuthContext';
import {
  type ICliente,
  type IFreteiro,
  type ITypeUser,
} from '../../interfaces';
import { Wrapper } from '../../styles/globalStyles';
import { BoxWithShadow, Container, Content } from './styles';
import { isFreteiro } from '../../utils/isFreteiro';
import useApi from '../../hooks/useApi';
import ClienteService from '../../services/ClienteService';
import FreteiroService from '../../services/FreteiroService';
import AuthService from '../../services/AuthService';
import LoadingPage from '../../components/Global/LoadingPage';
import { useQuery } from 'react-query';
import Head from '../../components/Head';

interface IProfileContext {
  user: ICliente | IFreteiro;
  setUser: (user: ICliente | IFreteiro) => void;
  handleSelectTab: (tab: number) => void;
}

const Profile = (): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState(0);
  const { id } = useParams();
  const { user: actualUser } = useContext(AuthContext);
  const [userToRender, setUserToRender] = useState<
    ICliente | IFreteiro | undefined
  >();

  const { data: actualTypeUser } = useQuery<ITypeUser>(
    ['actualUser', Number(id)],
    async () => await AuthService.getTypeUser(Number(id)),
    {
      enabled: id !== undefined,
      refetchOnMount: 'always',
    },
  );

  const isFreteiroType =
    actualTypeUser != null && !!actualTypeUser.data.extra_data.freteiro;

  useQuery(
    'userProfileFreteiro',
    async () => {
      await FreteiroService.get(Number(id)).then((res) => {
        setUserToRender(res.data);
      });
    },
    {
      enabled: !(actualTypeUser == null) && !!isFreteiroType,
      refetchOnMount: 'always',
    },
  );

  useQuery(
    'userProfileCliente',
    async () => {
      await ClienteService.get(Number(id)).then((res) => {
        setUserToRender(res.data);
      });
    },
    {
      enabled: !(actualTypeUser == null) && !isFreteiroType,
    },
  );

  const handleSelectTab = (tab: number): void => {
    setSelectedTab(tab);
  };

  if (actualUser == null || userToRender == null) return <LoadingPage />;
  else
    return (
      <>
        <Head title="Perfil" />
        <Layout>
          {userToRender !== undefined && actualUser !== null ? (
            <>
              <Banner
                user={userToRender}
                ownerPage={userToRender.id === actualUser.id}
              />
              <BoxWithShadow style={{ background: '#fafafa' }}>
                <Wrapper>
                  <UserInfo user={userToRender} />
                  <ProfileMenu
                    userId={userToRender.id}
                    ownerPage={userToRender.id === actualUser.id}
                    isFreteiro={isFreteiro(userToRender)}
                    selectedTab={selectedTab}
                    handleClick={handleSelectTab}
                  />
                </Wrapper>
              </BoxWithShadow>
              <Container style={{ background: '#f1f1f1' }}>
                <Wrapper>
                  <Content>
                    <Outlet
                      context={{
                        user: userToRender,
                        setUser: setUserToRender,
                        handleSelectTab,
                      }}
                    />
                  </Content>
                </Wrapper>
              </Container>
            </>
          ) : (
            <LoadingPage />
          )}
        </Layout>{' '}
      </>
    );
};
// type of the return of useOutletContext is not working

export const useContextProfile = (): IProfileContext => {
  return useOutletContext<IProfileContext>();
};

export default Profile;
