# Mapa do Site para plataforma Fretex.

Versão produzida em 02/06/2022

```mermaid
flowchart TD
  index(Página inicial da Fretex.)
  login(Página para Login do usuário.)
  escolha_de_cadastro(Página de escolha de cadastro.)
  cadastro_cliente(Página de cadastro de Cliente.)
  cadastro_freteiro(Página de cadastro de Freteiro.)
  perfil_freteiro(Perfil do Freteiro cadastrado.)
  perfil_cliente(Perfil do Cliente cadastrado.)
  meus_fretes_freteiro(Listar Fretes do Freteiro.)
  meus_fretes_cliente(Listar Fretes do Cliente.)
  fretes_disponíveis_freteiro(Fretes disponíveis.)
  
  
  index -- Clicou em Cadastro--> escolha_de_cadastro
  index -- Clicou em Login--> login
  
  escolha_de_cadastro -- Clicou em Cadastro Freteiro --> cadastro_freteiro
  escolha_de_cadastro -- Clicou em Cadastro Cliente --> cadastro_cliente
  cadastro_freteiro -- Clicou em Cadastrar --> fretes_disponíveis_freteiro
  cadastro_cliente -- Clicou em Cadastrar --> meus_fretes_cliente
  
  login -- Clicou em Entrar--> fretes_disponíveis_freteiro
  login -- Clicou em Entrar--> meus_fretes_cliente
  
  perfil_freteiro -- Clicou em Meus Fretes--> meus_fretes_freteiro
  meus_fretes_freteiro -- Clicou no Perfil--> perfil_freteiro
  perfil_cliente -- Clicou em Minhas solicitações--> meus_fretes_cliente
  meus_fretes_cliente -- Clicou no Perfil--> perfil_cliente
  
  fretes_disponíveis_freteiro -- Clicou no Perfil --> perfil_freteiro
  perfil_freteiro -- Clicou em Fretes Disponíveis --> fretes_disponíveis_freteiro
  fretes_disponíveis_freteiro -- Clicou em Meus Fretes --> meus_fretes_freteiro
  meus_fretes_freteiro -- Clicou em Fretes Disponíveis --> fretes_disponíveis_freteiro
  
```
