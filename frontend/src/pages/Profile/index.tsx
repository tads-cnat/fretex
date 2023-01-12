import React, { useContext, useEffect, useState } from "react";
import { Outlet, useOutletContext, useParams } from "react-router-dom";
import Loading from "../../components/Global/Loading";
import Layout from "../../components/Layout";
import Banner from "../../components/Profile/Banner";
import ProfileMenu from "../../components/Profile/Menu";
import UserInfo from "../../components/Profile/UserInfo";
import { AuthContext } from "../../context/Auth/AuthContext";
import { ICliente, IFreteiro } from "../../interfaces";
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
  const { user } = useContext(AuthContext);
  const { id } = useParams();
//  const { getCliente, getFreteiro } = useApi();
/*
  const {
    data: actualUser,
    isLoading,
    isError,
  } = useQuery("userProfile", () => getFreteiro(Number(id)));
*/
//  console.log(actualUser);
  const handleSelectTab = (tab: number) => {
    setSelectedTab(tab);
  };
  if (!user) return <Loading />;
  else
    return (
      <Layout>
        {user ? (
          <>
            <Banner user={user} />
            <BoxWithShadow style={{ background: "#fafafa" }}>
              <Wrapper>
                <UserInfo user={user} />
                <ProfileMenu
                  userId={user.id}
                  choices={menuChoices}
                  ownerPage={Number(id) === user.id}
                  isFreteiro={isFreteiro(user)}
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
