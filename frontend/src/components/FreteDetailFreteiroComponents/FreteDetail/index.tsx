import {
    Container, Content, Negotiation,
    Content1, Content2, HeaderContainer,
    PropostaContainer2, BtnGreen, Content2Info,
    BtnYellow
} from "./styles"

import { BtnPattern } from "../../../styles"
import caixas from "../../../assets/images/caixas.png"
import user from "../../../assets/images/user-circle.svg"
import arrowleft from "../../../assets/images/arrow-left-circle.svg"
import geoalt from "../../../assets/images/geo-alt.svg"
import info from "../../../assets/images/info-circle.svg"



const index = () => {
    return (
        <Container>
            <h1>Detalhes de frete</h1>
            <p><img src={arrowleft} alt="voltar" /> Voltar</p>
            <Content>
                <Content1>
                    <img src={caixas} alt="caixas" />
                    <div>
                        <p>Nome freteiro</p>
                        <h3>Nome do produto</h3>
                        <p>Pedido realizado em: dd/mm/yyyy</p>
                    </div>
                </Content1>
                <Content2>
                    <Content2Info>
                        <img src={geoalt} alt="localização" />
                        <div>
                            <h4>Dados de coleta </h4>
                            <p><span>Cidade:</span> Natal</p>
                            <p><span>Bairro:</span> Tirol</p>
                            <p><span>Rua:</span> aaaaaaaa</p>
                            <p><span>Número:</span> 13002</p>
                            <p><span>Turno:</span> Manhã</p>
                        </div>
                    </Content2Info>
                    <Content2Info>
                        <img src={geoalt} alt="localização" />
                        <div>
                            <h4>Dados de Entrega </h4>
                            <p><span>Cidade:</span> Natal</p>
                            <p><span>Bairro:</span> Tirol</p>
                            <p><span>Rua:</span> aaaaaaaa</p>
                            <p><span>Número:</span> 13002</p>
                            <p><span>Turno:</span> Manhã</p>
                        </div>
                    </Content2Info>
                    <Content2Info>
                        <img src={info} alt="info" />
                        <div>
                            <h4>Informações adicionais </h4>
                            <p><span>Data máxima de entrega:</span> dd/mm/yyyy</p>
                            <p><span>Data de coleta:</span> dd/mm/yyyy</p>
                            <p><span>Nome do recebedor:</span> LADEIRA</p>
                            <p><span>Observações:</span> aaaaaaaa</p>
                        </div>
                    </Content2Info>
                </Content2>
            </Content>
            
            <Negotiation>
                <HeaderContainer>
                    <div>
                        <h2>Negociação</h2>
                        <p>Aguardando freteiro</p>
                    </div>
                    <BtnYellow to="/realizar-proposta-freteiro">
                        Realizar Proposta
                    </BtnYellow>
                </HeaderContainer>
                <PropostaContainer2>
                    <img src={user} alt="avatar-user" />
                    <div>
                        <h3>R$ 270,00</h3>
                        <p>feita em: dd/mm/yyyy</p>
                    </div>
                    <BtnGreen to="/aceitar-proposta-freteiro">Aceitar</BtnGreen>
                    <h4>Contraproposta</h4>
                </PropostaContainer2>
            </Negotiation>
        </Container>
    )
}

export default index