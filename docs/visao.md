# Documento de visão

## Rede Social (Trails)

### Histórico da Revisão 

|  Data  | Versão | Descrição | Autor |
|:-------|:-------|:----------|:------|
| 05/06/2021 |  **`1.00`** | Versão Inicial  | Alessandro Souza|


### 1. Objetivo do Projeto 

### 2. Descrição do problema 
| __ | __ |
|:------------------|:-----|
| **_O problema_** | está relacionado a dificuldade para contratar um frete para curta distância |
| **_afetando_** | pessoas que necessitam do serviço de frete dentro da mesma cidade ou estado |
| **_cujo impacto é_**| a contratação de grandes empresas com custos elevados |
| **_Uma boa solução seria_** | uma plataforma que conectasse pessoas que necessitam enviar produtos com freteiros.|

### 3. Descrição dos usuários
Nome:

Freteiro: Transportadores autônomos.
Cliente: Pessoas que desejam transportar alguma mercadoria.

Ambiente de trabalho

Freteiro: Ele poderá acessar de qualquer lugar, desde que esteja conctado com a internet, como nos veículos, em casa, nos postos de gasolina, entre outros.
Cliente: Ele também poderá acessar de qualquer lugar quando possuir internet, como em casa, no escritório, entre outros.

Responsabilidade

Freteiro: Terá que filtrar as ordens de transporte, também devem precificar as ordens que possui interesse e criar uma oferta, além de atualizar corretamente o sistema com relação a ordens em andamento.
Cliente: Terá que preencher corretamente os dados ao criar um pedido de frete, também deve analisar ofertas de transportadores, negociar e acompanhar seu pedido até ela ser concluída. 

### 4. Descrição do ambiente dos usuários
Por se tratar de uma **_plataforma web_** em que o usuário (**_cliente_**) tem uma necessidade e o usuário (**_freteiro_**) tem um serviço a oferecer, então as tarefas executadas no sistema são feitas pelos próprios utilizadores da aplicação. Por consequência disso, as postagens devem ser realizáveis em qualquer horário e o envio das propostas também, logo **_o sistema deve possuir a capacidade de receber requisições 24 horas por dia, durante todos os dias da semana, inclusive ao longo dos feriados._**

**_A interação com o sistema pode ter diversas variações devido a localidade e sinal de internet do usuário, fato que pode restringir a navegação e o acesso ao sistema._**

### 5. Principais necessidades dos usuários
As pessoas que necessitam contratar algum serviço de frete na grande maioria das vezes não sabem quem chamar ou então tentam falar com o máximo de pessoas até encontrar alguém que saiba o número ou conheça um freteiro. No momento há alguns aplicativos que tentam sanar essa falta de praticidade como a kangu, central do frete, entre outros. Como esses sistemas são de nichos mais especificas, para empresas, acabam não abrangendo todos os usuários necessitados dos serviços de frete. Devido a isso, acaba prejudicando uma parte de possíveis clientes de pequeno e médio porte.

Nesse contexto, os clientes gostariam que fosse construído um sistema que envolvesse todas as camadas de usuários, como empresas e pessoas físicas. Para que nele sejam feitas os registros e divulgação dos serviços de fretes pendentes.

Para isso, o sistema deve permitir a realização de postagens dos pedidos de serviço com: **_preço (opcional), descrição e trajeto._** O sistema também deve permitir a realização de **_propostas e contrapropostas_** por parte dos freteiros sobre determinada postagem.

### 6.	Alternativas concorrentes
Atualmente, não existem alternativas, que realizem a ligação entre pessoas físicas para negociação de fretes, porém, existem plataformas que indicam e listam transportadoras apenas para fretes com pequenas cargas, são elas: Kangu e Central do Frete.
### 7.	Visão geral do produto
**_Fretex_**, nova plataforma de fretes, deve ser desenvolvida para navegadores já existentes. Sua interface com o usuário deve ter uma boa usabilidade e ser clara para reduzir o tempo gasto de seus usuários.

O sistema se propõe a servir de facilitador para os **_clientes_**, que desejam encontrar um freteiro para suas situações diárias, e também para os **_freteiros_** que buscam aumentar e controlar sua renda. Fornecendo uma negociação breve e rápida entre as duas partes.

### 8. Requisitos Funcionais
| Cod. | Nome | Descrição |
| :---: | :---: | :--- |
| RF001 | Fazer Login | Deve ser possível fazer login no sistema. Todos os tipos de usuários devem fazer login no sistema para ter acesso às informações particulares de cada um. Para realizar o login o usuário deve passar o nome de um usuário e senha. |
| RF002 | Cadastrar pedido de frete | Deve ser possível criar um pedido de frete. |
| RF003 | Listar pedidos de fretes | Deve ser possível listar os pedidos de fretes. Essa opção deverá permitir filtros pois será utilizada em vários casos de uso da aplicação. |
| RF004 | Atualizar pedido de frete | Deve ser possível atualizar um pedido de frete que ainda não tenha sido finalizado. |
| RF005 | Deletar frete concluído | Deve ser possível deletar pedidos de fretes que já foram concluídos. |
| RF006 | Cadastrar cliente | Deve ser possível fazer o cadastro de clientes. Clientes são o tipo de usuário responsável por fazer os pedidos de frete. |
| RF007 | Listar clientes | Deve ser possível listar os clientes cadastrados. |
| RF008 | Atualizar cliente | Deve ser possível atualizar os dados da conta de um cliente. |
| RF009 | Deletar cliente | Deve ser possível deletar a conta de um cliente. |
| RF010 | Cadastrar fretista | Deve ser possível fazer um cadastro de fretista. |
| RF011 | Listar fretistas | Deve ser possível listar os fretistas que estejam cadastrados. |
| RF012 | Atualizar fretista | Deve ser possível atualizar os dados da conta de um fretista. |
| RF013 | Deletar fretista | Deve ser possível deletar a conta de um fretista. |
| RF014 | Cadastrar veículo | Deve ser possível cadastrar o veículo de um fretista. |
| RF015 | Listar veículos | Deve ser possível listar o veículo de um fretista. |
| RF016 | Atualizar veículo | Deve ser possível atualizar os dados do veículo de um fretista. |
| RF017 | Deletar veículo | Deve ser possível deletar os dados do veículo de um fretista. |

### 9. Requisitos não-funcionais
| Cod. | Nome | Descrição | Categoria | Classificação |
| :---: | :---: | :--- | :---: | :---: |
| RNF01 | Autorizações | Somente usuários logados poderão acessar os recursos da plataforma. | Segurança | Obrigatório |
| RNF02 | Ferramentas | O sistema deve ser desenvolvido utilizando o banco de dados SQLite e a linguagem python por meio do framework django. | Implementação | Preferível |
| RNF03 | Tempo de resposta | O tempo de resposta do sistema não deve ultrapassar 5 segundos. | Performance | Obrigatório |
| RNF04 | Ambiente de execução | O sistema deve ser executado na web através de um navegador. | Interoperabilidade | Obrigatório |


