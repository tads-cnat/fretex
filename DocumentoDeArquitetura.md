
# FRETEX
### Documento de Arquitetura do Sistema

|  Data  | Versão | Descrição | Autores |
|:-------|:-------|:----------|:------|
| 20/01/2023 |  **`1.00`** | Versão Inicial  | Italo Gabriel, Lucas Oliveira, Mathews Dantas, Arthur Medeiros e Sávio Araujo. |

## 1. Introdução

Fretex é a nova plataforma de fretes que se propõe a servir de facilitador para os **_clientes_**, que desejam encontrar um **_freteiro_** para suas situações diárias, e também para os **_freteiros_** que buscam aumentar e ter mais controle sobre a sua renda. Fornecendo uma negociação breve e rápida entre as duas partes.

## 2. Termos e Abreviações

**Pedido de Frete:** É a ordem gerada quando o cliente cadastra sua necessidade de transportar uma mercadoria no sistema.

**Situações de fretes:**

- **Em negociação**: O Pedido de Frete já foi realizado pelo usuário do tipo Cliente, porém está na espera de propostas dos freteiros.
- **Aguardando coleta**: A negociação do Pedido de Frete foi finalizada e o pedido está pronto para ser coletado na data prevista.
- **Em trânsito**: O Pedido de Frete se encontra em transporte sob os cuidados do freteiro.
- **Concluído**: O Pedido de Frete foi entregue.
- **Cancelado**: O Pedido de Frete foi cancelado.

**Tipos de usuário:**

- **Freteiro**: Transportadores autônomos que possuem veiculo particular com capacidade para transporte de mercadorias.
- **Cliente**: Pessoas que desejam transportar alguma mercadoria.

**Tipos de propostas:**

- **Proposta**: Primeira tentativa de negociação que parte do Freteiro ao tentar precificar um pedido de frete.
- **Contraproposta**: É uma modalidade de proposta que se vincula à uma proposta anterior na tentiva de alterar o valor do Pedido de Frete, e pode ser feita por ambos usuários.

## 3. Descrição de Requisitos
### 3.1.Requisitos Funcionais
| Cod. | Nome | Descrição |
| :---: | :---: | :--- |
| RF001 | Autenticação | Fazer login na plataforma para acessar o conteúdo. |
| RF002 | Gerenciar pedidos de frete | Gerenciar os dados relacionadas a um pedido de frete |
| RF003 | Gerenciar clientes | Gerenciar os dados da conta de um cliente. |
| RF004 | Gerenciar fretistas | Gerenciar os dados da conta dos fretistas. |
| RF005 | Gerenciar veículos | Gerenciar os dados referentes aos veículos de um freteiro. |

### 3.2.Atributos de Qualidade
| ID | Atributo de qualidade | Motivação |
| :--- | :--- | :--- |
| 1 | Cliente só pode listar os seus próprios fretes | Segurança |
| 2 | Cliente só pode cancelar pedidos nos status "em negociação" e "aguardando coleta" | Segurança |
| 3 | O navbar da aplicação deve virar um dropdown menu quando mobile | Usabilidade |
| 4 | Autenticação dos usuarios para login no sistema | Segurança e Desempenho |


### 3.3.Stakeholders
| Papel | Interesse |
| :--- | :--- |
| Cliente | Tem interesse em uma plataforma em que ele possa registrar suas demandas de transporte por um preço acessivel e com fácil negociação |
| Freteiro | Tem interesse em uma plataforma onde ele possa ter um fluxo alternativo de trabalho, pelo qual ele será remunerado de acordo com sua disponibilidade |
| Desenvolvedor | Tem interesse em desenvolver uma plataforma coesa e que siga os padrões e boas práticas do desenvolvimento de software |

## 4. Restrições Arquiteturais
### 4.1.Restrições técnicas
|  | Restrição | Contexto e/ou Motivação |
| :--- | :--- | :--- |
| Restrição de software e programação |
| RT1 | Acessibilidade | Não foi implementada na interface nenhum conjunto de ferramentes para o auxilio de pessoas com deficiência |
| Restrição de sistema operacional |
| RT3 | SO que possibibilitem criação e hospedagem de servidores HTTP |  |
| Restrições de Hardware |
| RT5 | Que atenda os resquisitos minimos para rodar o Django | Framework utilizado no projeto |

## 5.	Escopo do Sistema e Contexto
### 5.1.	Diagrama de Casos de Uso
| CDU | Objetivo | Ator Primário | Implementado |
| :--- | :--- | :--- | :--- |
| CDU01 | O cliente pode listar um ou mais pedidos de frete. | Cliente | Sim |
| CDU02 | O cliente pode cadastrar um pedido de frete. | Cliente | Sim |
| CDU03 | O cliente pode aceitar a proposta feita pelo freteiro. | Cliente | Sim |
| CDU04 | Caso o cliente não concorde com a proposta recente do frete, ele poderá realizar uma nova proposta ao freteiro. | Cliente | Sim |
| CDU05 | O freteiro pode aceitar a proposta feita pelo cliente. | Freteiro | Sim |
| CDU06 | Permite que o freteiro submeta uma proposta para um pedido de frete. | Freteiro | Sim |
| CDU07 | Permite listar todos os fretes disponíveis para o freteiro realizar propostas | Freteiro | Sim |

## 6.	Diagramas Conceituais
### 6.1.	Visão Lógica

#### Modelos de domínio

| Conceito | Descrição |
| :--- | :--- |
| Cliente | Mantem as informações do cliente |
| Freteiro | Mantem as informações do freteiro |
| Proposta | Mantem as informações de propostas realizadas pelo cliente ou freteiro acerca de um determinado pedido |
| Pedido | Mantem as informações do pedido cadastrado por um cliente |
| Endereço | Mantem as informações acerca dos endereços vinculados a um pedido (coleta e entrega) |
| Status | Reflete o status de um pedido de entrega |
| Produto | Mantem as informações acerca da mercadoria que será transportada em um pedido de frete |
| TipoVeiculo | Reflete a modalidade do veiculo vinculado a um freteiro |
| Veiculo | Mantem as informações acerca dos veiculos vinculados a um cadastro de freteiro |

#### Modelo comportamental

Diagrama de sequencia: Cadastro de pedido de frete
![Diagrama de sequencia: Cadastro de pedido de frete](https://github.com/tads-cnat/fretex/blob/main/docs/diagramas/DiagramasDeSequencia/CadastroPedido.png?raw=true "Diagrama de sequencia: Cadastro de pedido de frete")

Diagrama de sequencia: Realizar Proposta
![Diagrama de sequencia: Realizar Proposta](https://github.com/tads-cnat/fretex/blob/main/docs/diagramas/DiagramasDeSequencia/RealizarProposta(cliente).jpg?raw=true "Diagrama de sequencia: Realizar Proposta")

## 7. Detalhamento da Implementação e Ambiente Físico

### 7.1.	Visão de Implementação
| Componente | Responsabilidades |
| :--- | :--- |
|  |  |

### 7.2.	Visão de Distribuição
| Nó | Descrição |
| :--- | :--- |
| SGBD - Sqlite | Sistema de banco de dados da aplicação |
| Servidor da aplicação - Frontend | Conjunto de interfaces e páginas da aplicação |
| Servidor da aplicação - Backend | Conjunto de classes, regras de negocio e endpoints |
| Computador do usuario | Maquina que o usuario utilizará para fazer acesso a aplicação |

### 7.3. Persistência
| Classe | Tabela | Significado |
| :--- | :--- | :--- |
Status|status|Status possíveis de pedido
Produto|produtos|Produto que é transportado em um pedido
Endereco|enderecos|Endereço de um freteiro, ou de entrega ou de coleta
Pedido|pedidos|Pedido de frete feito por um cliente
TipoVeiculo|tipos_veiculo|Tipo de veículo o qual um veículo pertence ou tipo de veículo que pode ser usado em uma entrega
Veiculo|veiculos|Veiculo de um freteiro
Freteiro|freteiros|Usuario que pode relizar fretes
Usuario|usuarios|Usuario base do sistema
Proposta|propostas|Proposta feita a um pedido de frete por um usuário
Cliente|clientes|Usuario que pode criar pedidos de frete

### 7.4. Interface de Usuário

A interface de usuario foi prototipada utilizando a ferramenta Figma e implementada utilizando as tecnologias React-JS e Styled Componentes-CSS. As tecnologias foram escolhidas por questão de afinidade com o grupo.

## 8. Anexos

### 8.1. API do Projeto

https://fretex-documentation.netlify.app/

### 8.2. API Externa
| URL | Descrição | Método HTTP | Tipo Retorno |
| :--- | :--- | :--- | :--- |
| viacep.com.br/ws/01001000/json/ | Requisição que recebe um CEP e retorna o Endereço completo | GET | Objeto | 

Exemplo de retorno

    {
      "cep": "01001-000",
      "logradouro": "Praça da Sé",
      "complemento": "lado ímpar",
      "bairro": "Sé",
      "localidade": "São Paulo",
      "uf": "SP",
      "ibge": "3550308",
      "gia": "1004",
      "ddd": "11",
      "siafi": "7107"
    }

