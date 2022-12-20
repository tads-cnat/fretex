import React, { useContext, useEffect, useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import Layout from "../../components/Layout";
import Banner from "../../components/Profile/Banner";
import ProfileMenu from "../../components/Profile/Menu";
import UserInfo from "../../components/Profile/UserInfo";
import { AuthContext } from "../../context/Auth/AuthContext";
import { ICliente, IFreteiro } from "../../interfaces";
import { Wrapper } from "../../styles";
import { BoxWithShadow, Container, Content } from "./styles";
import { menuChoices } from "./utils/menuChoices";

interface IProfileContext {
  user: ICliente | IFreteiro;
  handleSelectTab: (tab: number) => void;
}

const Profile = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const { user } = useContext(AuthContext);

  const handleSelectTab = (tab: number) => {
    setSelectedTab(tab);
  };

  if (!user) return <p>Carregando...</p>;
  else
    return (
      <Layout>
        <Banner />
        <BoxWithShadow style={{ background: "#fafafa" }}>
          <Wrapper>
            <UserInfo user={user} />
            <ProfileMenu
              userId={user.id}
              choices={menuChoices}
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
      </Layout>
    );
};

export const useContextProfile = () => {
  return useOutletContext<IProfileContext>();
};

export default Profile;
