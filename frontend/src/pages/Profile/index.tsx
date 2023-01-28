import React, { useContext, useEffect, useState } from "react";
import { Outlet, useOutletContext, useParams } from "react-router-dom";
import Loading from "../../components/Global/Loading";
import Layout from "../../components/Layout";
import Banner from "../../components/Profile/Banner";
import ProfileMenu from "../../components/Profile/Menu";
import UserInfo from "../../components/Profile/UserInfo";
import { AuthContext } from "../../context/Auth/AuthContext";
import { ICliente, IFreteiro, ITypeUser } from "../../interfaces";
import { Wrapper } from "../../styles";
import { BoxWithShadow, Container, Content } from "./styles";
import { isFreteiro } from "../../utils/isFreteiro";
import useApi from "../../hooks/useApi";
import LoadingPage from "../../components/Global/LoadingPage";
import { useQuery } from "react-query";

interface IProfileContext {
  user: ICliente | IFreteiro;
  setUser: (user: ICliente | IFreteiro) => void;
  handleSelectTab: (tab: number) => void;
}

const Profile = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const { id } = useParams();
  const { user: actualUser } = useContext(AuthContext);
  const [userToRender, setUserToRender] = useState<
    ICliente | IFreteiro | undefined
  >();
  const { getCliente, getFreteiro, getTypeUser } = useApi();

  const { data: actualTypeUser } = useQuery<ITypeUser>(
    ["actualUser", Number(id)],
    () => getTypeUser(Number(id)),
    {
      enabled: !!id,
      refetchOnMount: "always",
    },
  );

  const isFreteiroType =
    actualTypeUser && !!actualTypeUser.data.extra_data.freteiro;

  useQuery(
    "userProfileFreteiro",
    () => getFreteiro(Number(id)).then((res) => setUserToRender(res.data)),
    {
      enabled: !!actualTypeUser && !!isFreteiroType,
      refetchOnMount: "always",
    },
  );

  useQuery(
    "userProfileCliente",
    () => getCliente(Number(id)).then((res) => setUserToRender(res.data)),
    {
      enabled: !!actualTypeUser && !isFreteiroType,
    },
  );

  const handleSelectTab = (tab: number) => {
    setSelectedTab(tab);
  };

  if (!actualUser || !userToRender) return <LoadingPage />;
  else
    return (
      <Layout>
        {userToRender && actualUser ? (
          <>
            <Banner
              user={userToRender}
              ownerPage={userToRender.id === actualUser.id}
            />
            <BoxWithShadow style={{ background: "#fafafa" }}>
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
            <Container style={{ background: "#f1f1f1" }}>
              <Wrapper>
                <Content>
                  <Outlet
                    context={{
                      user: userToRender,
                      setUser: setUserToRender,
                      handleSelectTab: handleSelectTab,
                    }}
                  />
                </Content>
              </Wrapper>
            </Container>
          </>
        ) : (
          <LoadingPage />
        )}
      </Layout>
    );
};

export const useContextProfile = () => {
  return useOutletContext<IProfileContext>();
};

export default Profile;
