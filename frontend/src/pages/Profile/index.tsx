import React, { useContext, useEffect, useState } from "react";
import BoxFretes from "../../components/FretesAvailable/BoxFretes";
import Layout from "../../components/Layout";
import Banner from "../../components/Profile/Banner";
import ProfileMenu from "../../components/Profile/Menu";
import UserInfo from "../../components/Profile/UserInfo";
import { AuthContext } from "../../context/Auth/AuthContext";
import useApi from "../../hooks/useApi";
import { IPedido } from "../../interfaces";
import { Wrapper } from "../../styles";
import { BoxWithShadow, Container, Content } from "./styles";
import { menuChoices } from "./utils/menuChoices";

const Profile = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [fretes, setFretes] = useState<IPedido[]>([]);
  const [loading, setLoading] = useState(false);
  const { user, typeUser } = useContext(AuthContext);
  const { getPedidos } = useApi();

  const handleSelectTab = (tab: number) => {
    setSelectedTab(tab);
    changeTabContent(tab);
  };

  const changeTabContent = (tab: number) => {
    setLoading(true);
    if (tab === 0) {
      getPedidos().then((res) => {
        console.log(
          res.data.filter((pedido: IPedido) => pedido.cliente === user?.id),
        );
        setFretes(
          res.data.filter((pedido: IPedido) => pedido.cliente === user?.id),
        );
      });
    } else if (tab === 3) {
      return <p>ola</p>;
    }
  };

  useEffect(() => {
    getPedidos().then((res) => {
      console.log(
        res.data.filter((pedido: IPedido) => pedido.cliente === user?.id),
      );
      setFretes(
        res.data.filter((pedido: IPedido) => pedido.cliente === user?.id),
      );
    });
  }, []);

  if (!user) return <p>Carregando...</p>;
  else
    return (
      <Layout>
        <Banner />
        <BoxWithShadow style={{ background: "#fafafa" }}>
          <Wrapper>
            <UserInfo user={user} />
            <ProfileMenu
              choices={menuChoices}
              selectedTab={selectedTab}
              handleClick={handleSelectTab}
            />
          </Wrapper>
        </BoxWithShadow>
        <Container style={{ background: "#f1f1f1" }}>
          <Wrapper>
            <Content>
              {fretes.map((frete) => (
                <BoxFretes key={frete.id} pedido={frete} />
              ))}
            </Content>
          </Wrapper>
        </Container>
      </Layout>
    );
};

export default Profile;
