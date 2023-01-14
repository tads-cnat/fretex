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
import { menuChoices } from "./utils/menuChoices";
import { isFreteiro } from "../../utils/isFreteiro";
import { useQuery } from "react-query";
import useApi from "../../hooks/useApi";
import LoadingPage from "../../components/Global/LoadingPage";

interface IProfileContext {
  user: ICliente | IFreteiro;
  handleSelectTab: (tab: number) => void;
}

const Profile = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const { getCliente, getFreteiro, getTypeUser } = useApi();

  const { data: actualTypeUser } = useQuery<ITypeUser>(
    "actualUser",
    () => getTypeUser(Number(id)),
    {
      enabled: !!id,
    },
  );

  const isFreteiro1 =
    actualTypeUser && !!actualTypeUser.data.extra_data.freteiro;

  const {
    data: userFreteiro,
    isLoading: isLoadingFreteiro,
    isError: isErrorFreteiro,
  } = useQuery("userProfileFreteiro", () => getFreteiro(Number(id)), {
    enabled: !!actualTypeUser && !!isFreteiro1,
  });

  const {
    data: userCliente,
    isLoading: isLoadingCliente,
    isError: isErrorCliente,
  } = useQuery("userProfileCliente", () => getCliente(Number(id)), {
    enabled: !!actualTypeUser && !isFreteiro1,
  });
  if (userCliente || userFreteiro) {
    console.log(userCliente?.data, 1);
    console.log(userFreteiro?.data, 2);
  }
  //  console.log(actualUser);
  const handleSelectTab = (tab: number) => {
    setSelectedTab(tab);
  };

  if ((!userCliente || !userFreteiro) && !user) return <LoadingPage />;
  else
    return (
      <Layout>
        {(userCliente || userFreteiro) && user ? (
          <>
            <Banner
              user={userFreteiro ? userFreteiro.data : userCliente.data}
              ownerPage={
                (userFreteiro ? userFreteiro.data.id : userCliente.data.id) ===
                user.id
              }
            />
            <BoxWithShadow style={{ background: "#fafafa" }}>
              <Wrapper>
                <UserInfo
                  user={userFreteiro ? userFreteiro.data : userCliente.data}
                />
                <ProfileMenu
                  userId={
                    userFreteiro ? userFreteiro.data.id : userCliente.data.id
                  }
                  choices={menuChoices}
                  ownerPage={
                    (userFreteiro
                      ? userFreteiro.data.id
                      : userCliente.data.id) === user.id
                  }
                  isFreteiro={isFreteiro(
                    userFreteiro ? userFreteiro.data : userCliente.data,
                  )}
                  selectedTab={selectedTab}
                  handleClick={handleSelectTab}
                />
              </Wrapper>
            </BoxWithShadow>
            <Container style={{ background: "#f1f1f1" }}>
              <Wrapper>
                <Content>
                  <Outlet context={{ user, handleSelectTab }} />
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
