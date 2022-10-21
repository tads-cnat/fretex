# Documento de visão

### Histórico da Revisão 

|  Data  | Versão | Descrição | Autores |
|:-------|:-------|:----------|:------|
| 30/05/2022 |  **`1.00`** | Versão Inicial  | Alessandro Souza, Arthur Medeiros, Italo Gabriel, Lucas Oliveira, Marcos Alexandre, Mathews Dantas, Sávio Araújo.|
| 21/10/2022 |  **`2.00`** | Versão Inicial  | Alessandro Souza, Arthur Medeiros, Italo Gabriel, Lucas Oliveira, Mathews Dantas, Sávio Araújo.|


### 1. Projeto: **`Fretex`**

### 2. Descrição do problema 
| __ | __ |
|:------------------|:-----|
| **_O problema_** | está relacionado a dificuldade para contratar um frete para curta distância |
| **_afetando_** | pessoas que necessitam do serviço de frete dentro da mesma cidade ou estado |
| **_cujo impacto é_**| a contratação de grandes empresas com custos elevados |
| **_Uma boa solução seria_** | uma plataforma que conectasse pessoas que necessitam enviar produtos com freteiros.|

### 3. Descrição dos usuários
| __ | __ |
|:------------------|:-----|
| **_Freteiro:_** | Transportadores autônomos que possuem veiculo particular com capacidade para transporte de mercadorias. |
| **_Cliente:_** | Pessoas que desejam transportar alguma mercadoria. |

**Ambiente de trabalho**
| __ | __ |
|:------------------|:-----|
| **_Freteiro:_** | Ele poderá acessar de qualquer lugar, desde que esteja conctado com a internet, como nos veículos, em casa, nos postos de gasolina, entre outros. |
| **_Cliente:_** | Ele também poderá acessar de qualquer lugar quando possuir internet, como em casa, no escritório, entre outros. |

**Responsabilidade**
| __ | __ |
|:------------------|:-----|
| **_Freteiro:_** | Terá que filtrar as ordens de transporte, também devem precificar as ordens que possui interesse e criar uma oferta, além de atualizar corretamente o sistema com relação a pedidos de frete em andamento. |
| **_Cliente:_** | Terá que preencher corretamente os dados ao criar um pedido de frete, também deve analisar ofertas de transportadores, negociar e acompanhar seu pedido de frete até ele ser concluído.  |

### 4. Descrição do ambiente dos usuários
Por se tratar de uma **_plataforma web_** em que o usuário (**_cliente_**) tem uma necessidade e o usuário (**_freteiro_**) tem um serviço a oferecer, então as tarefas executadas no sistema são feitas pelos próprios utilizadores da aplicação. Por consequência disso, as postagens devem ser realizáveis em qualquer horário e o envio das propostas também, logo **_o sistema deve possuir a capacidade de receber requisições 24 horas por dia, durante todos os dias da semana, inclusive ao longo dos feriados._**

**_A interação com o sistema pode ter diversas variações devido a localidade e sinal de internet do usuário, fato que pode restringir a navegação e o acesso ao sistema._**

### 5. Principais necessidades dos usuários
As pessoas que necessitam contratar algum serviço de frete na grande maioria das vezes não sabem quem chamar ou então tentam falar com o máximo de pessoas até encontrar alguém que saiba o número ou conheça um (**_freteiro_**). No momento há alguns aplicativos que tentam sanar essa falta de praticidade como a Kangu, Central do Frete, entre outros. Como esses sistemas são de nichos mais especificas, para empresas, acabam não abrangendo todos os usuários necessitados dos serviços de frete. Devido a isso, acaba prejudicando uma parte de possíveis (**_clientes_**) de pequeno e médio porte.

Nesse contexto, os (**_clientes_**) gostariam que fosse construído um sistema que envolvesse todas as camadas de usuários, como empresas e pessoas físicas. Para que nele sejam feitas os registros e divulgação dos serviços de fretes pendentes.

Para isso, o sistema deve permitir a realização de postagens dos pedidos de serviço com: **_preço (opcional), descrição e trajeto._** O sistema também deve permitir a realização de **_propostas e contrapropostas_** por parte dos (**_freteiros_**) e **_contrapropostas_** por parte dos (**_clientes_**) sobre determinada postagem.

### 6.	Alternativas concorrentes
Atualmente, existem 2 alternativas. Uma delas é a Kangu, uma plataforma tecnológica que conecta lojas virtuais, transportadoras e pontos de coleta para envio e retirada de mercadorias. A segunda opção é o Central do Frete, que lista as transportadoras disponíveis para realizar o frete com as características que o cliente informou. Logo, podemos identificar que essas alternativas disponíveis não conseguem fazer uma ligação direta entre o cliente e o freteiro, que é o proposto pela Fretex, dando assim uma maior liberdade e autonomia para o cliente e o freteiro.

### 7.	Visão geral do produto
**_Fretex_**, nova plataforma de fretes, deve ser desenvolvida para navegadores já existentes. Sua interface com o usuário deve ter uma boa usabilidade e ser clara para reduzir o tempo gasto de seus usuários.

O sistema se propõe a servir de facilitador para os **_clientes_**, que desejam encontrar um (**_freteiro_**) para suas situações diárias, e também para os **_freteiros_** que buscam aumentar e ter mais controle sobre a sua renda. Fornecendo uma negociação breve e rápida entre as duas partes.

### 8. Requisitos Funcionais
| Cod. | Nome | Descrição |
| :---: | :---: | :--- |
| RF001 | Autenticação | Fazer login na plataforma para acessar o conteúdo. |
| RF002 | Gerenciar pedidos de frete | Gerenciar os dados relacionadas a um pedido de frete |
| RF003 | Gerenciar clientes | Gerenciar os dados da conta de um cliente. |
| RF004 | Gerenciar fretistas | Gerenciar os dados da conta dos fretistas. |
| RF005 | Gerenciar veículos | Gerenciar os dados referentes aos veículos de um freteiro. |


### 9. Requisitos não-funcionais
| Cod. | Nome | Descrição | Categoria | Classificação |
| :---: | :---: | :--- | :---: | :---: |
| RNF01 | Autorizações | Somente usuários logados poderão acessar os recursos da plataforma. | Segurança | Obrigatório |
| RNF02 | Ferramentas | O sistema deve ser desenvolvido utilizando o banco de dados SQLite e a linguagem python por meio do framework django. | Implementação | Preferível |
| RNF03 | Tempo de resposta | O tempo de resposta do sistema não deve ultrapassar 5 segundos. | Performance | Obrigatório |
| RNF04 | Ambiente de execução | O sistema deve ser executado na web através de um navegador. | Interoperabilidade | Obrigatório |

### 10. Riscos
- Falta de tempo hábil entre os colaboradores para desenvolver soluções em tecnologias que são relativamente novas para a equipe
- Problemas relacionados a usabilidade e interface por falta de um membro na equipe com tais competências 
- Excesso de eventos e feriados no calendário que podem tomar tempo de desenvolvimento do projeto
- A implementação de muitas novas tecnologias que foram escolhidas pela equipe para a versão 2.0 do projeto
