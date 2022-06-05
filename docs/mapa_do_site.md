# Mapa do Site para plataforma Fretex.

Versão produzida em 02/06/2022

```mermaid
flowchart TD
  index(Página inicial da Fretex.)
  login(Página para Login do usuário.)
  cadastro_cliente(Página de cadastro de Cliente.)
  cadastro_freteiro(Página de cadastro de Freteiro.)
  cadastro_fretes(Página de cadastro de Fretes.)
  perfil_freteiro(Perfil do Freteiro cadastrado.)
  perfil_cliente(Perfil do Cliente cadastrado.)
  meus_fretes_freteiro(Dashboard_freteiro.)
  meus_fretes_cliente(Dashboard_cliente.)
  fretes_disponíveis_freteiro(Fretes disponíveis.)
  detalhes_meus_fretes_freteiro(Detalhes Meus Fretes - Freteiro.)
  detalhes_meus_fretes_cliente(Detalhes Meus Fretes - Cliente.)
  detalhes_fretes_disponíveis(Detalhes Fretes Disponíveis.)
  
  
  index -- Clicou em Login--> login
  index -- Clicou em Cadastro Freteiro--> cadastro_freteiro
  index -- Clicou em Cadastro Cliente--> cadastro_cliente
  
 
  cadastro_freteiro -- Clicou em Cadastrar --> fretes_disponíveis_freteiro
  cadastro_cliente -- Clicou em Cadastrar --> cadastro_fretes
  
  login -- Clicou em Entrar_freteiro--> fretes_disponíveis_freteiro
  login -- Clicou em Entrar_cliente--> cadastro_fretes
  
  perfil_freteiro -- Clicou em Meus Fretes--> meus_fretes_freteiro
  meus_fretes_freteiro -- Clicou no Perfil--> perfil_freteiro
  perfil_cliente -- Clicou em Meus Fretes--> meus_fretes_cliente
  perfil_cliente -- Clicou em Solicitar Frete--> cadastro_fretes
  meus_fretes_cliente -- Clicou no Perfil--> perfil_cliente
  meus_fretes_cliente -- Clicou em Solicitar Frete--> cadastro_fretes
  cadastro_fretes -- Clicou em Meus Fretes--> meus_fretes_cliente
  cadastro_fretes -- Clicou no Perfil--> perfil_cliente
  
  fretes_disponíveis_freteiro -- Clicou no Perfil --> perfil_freteiro
  perfil_freteiro -- Clicou em Fretes Disponíveis --> fretes_disponíveis_freteiro
  fretes_disponíveis_freteiro -- Clicou em Meus Fretes --> meus_fretes_freteiro
  meus_fretes_freteiro -- Clicou em Fretes Disponíveis --> fretes_disponíveis_freteiro
  
  meus_fretes_freteiro -- Clicou em Detalhes Meus Fretes --> detalhes_meus_fretes_freteiro
  detalhes_meus_fretes_freteiro -- Clicou em Meus Fretes --> meus_fretes_freteiro
  detalhes_meus_fretes_freteiro -- Clicou em Fretes Disponíveis --> fretes_disponíveis_freteiro
  detalhes_meus_fretes_freteiro -- Clicou no Perfil --> perfil_freteiro
  fretes_disponíveis_freteiro -- Clicou em Detalhes Frete --> detalhes_fretes_disponíveis
  detalhes_fretes_disponíveis -- Clicou em Meus Fretes --> meus_fretes_freteiro
  detalhes_fretes_disponíveis -- Clicou em Fretes Disponíveis --> fretes_disponíveis_freteiro
  detalhes_fretes_disponíveis -- Clicou no Perfil --> perfil_freteiro
  
  meus_fretes_cliente -- Clicou em Detalhes Meus Fretes--> detalhes_meus_fretes_cliente
  detalhes_meus_fretes_cliente -- Clicou em Meus Fretes--> meus_fretes_cliente
  detalhes_meus_fretes_cliente -- Clicou no Perfil--> perfil_cliente
  
```
