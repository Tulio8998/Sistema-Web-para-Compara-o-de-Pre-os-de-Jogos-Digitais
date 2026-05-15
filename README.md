# CSI606-2026-01 – Remoto – Proposta de Trabalho Final

**Discente:** Túlio Vilela Lopes

## Título do Trabalho

Sistema Web para Comparação de Preços de Jogos Digitais

---

# Resumo

O mercado de jogos digitais apresenta grande variação de preços entre diferentes lojas online, dificultando que usuários encontrem rapidamente as melhores ofertas disponíveis. Além disso, promoções ocorrem com frequência e variam conforme plataforma, região e período do ano, tornando o acompanhamento manual pouco eficiente. Diante desse cenário, o presente trabalho propõe o desenvolvimento de uma aplicação web voltada para comparação, monitoramento e análise de preços de jogos digitais.

O sistema permitirá que usuários pesquisem jogos e acompanhem informações relevantes, como preços atuais em diferentes lojas, menor preço histórico registrado, promoções ativas e variações de preço ao longo do tempo. Também serão disponibilizadas funcionalidades de autenticação de usuários, sistema de favoritos e dashboards com gráficos e estatísticas relacionadas aos preços monitorados.

Os dados serão obtidos por meio de APIs públicas especializadas, como IsThereAnyDeal e CheapShark. O projeto será desenvolvido utilizando arquitetura cliente-servidor moderna, com frontend e backend separados, banco de dados relacional e utilização de contêineres Docker para padronização do ambiente de desenvolvimento.

---

# 1. Tema

O trabalho final tem como tema o desenvolvimento de uma aplicação web para comparação de preços de jogos digitais em diferentes plataformas de venda online. O sistema busca centralizar informações de preços, promoções e histórico de valores, permitindo que usuários encontrem melhores ofertas e acompanhem tendências de preços de jogos digitais.

---

# 2. Escopo

Este projeto terá as seguintes funcionalidades:

- Cadastro e autenticação de usuários.
- Criptografia de senhas e controle de acesso utilizando JWT.
- Pesquisa de jogos por nome.
- Comparação de preços entre diferentes lojas digitais.
- Exibição de promoções ativas.
- Histórico de preços dos jogos.
- Dashboard com gráficos e estatísticas.
- Sistema de favoritos para acompanhamento de jogos.
- Integração com APIs externas especializadas em preços de jogos digitais.
- Interface responsiva para desktop e dispositivos móveis.

O sistema será desenvolvido utilizando arquitetura cliente-servidor, separando frontend e backend, além da utilização de banco de dados relacional para persistência das informações.

---

# 3. Restrições

Neste trabalho não serão considerados:

- Compra direta de jogos pela plataforma.
- Integração com meios de pagamento.
- Marketplace entre usuários.
- Sistema de chat ou comentários.
- Aplicativo mobile nativo.
- Funcionalidades avançadas de inteligência artificial em tempo real.
- Comparação de preços de jogos físicos.

Além disso, algumas funcionalidades dependerão da disponibilidade, estabilidade e limites de requisições das APIs externas utilizadas.

---

# 4. Protótipo

Protótipos das principais telas do sistema estão sendo elaborados utilizando a ferramenta Figma, com o objetivo de representar a estrutura visual e a navegação da aplicação antes da implementação completa, sendo utilizada apenas para design.

As interfaces contemplam tanto as páginas públicas (Página Inicial, Pesquisa, Detalhes do Jogo, Login e Cadastro) quanto as páginas autenticadas (Dashboard do Usuário, Favoritos e Histórico de Preços). O foco do design é demonstrar a organização visual das informações, o fluxo de navegação entre as telas e a distribuição clara dos gráficos comparativos e estatísticos.

A Página Inicial apresentará a proposta do sistema, jogos em destaque e promoções recentes. A página de Pesquisa permitirá buscas por títulos específicos e aplicação de filtros relacionados a lojas, preços e promoções disponíveis.

A tela de Detalhes do Jogo exibirá descrição, imagem de capa, preços atuais em diferentes lojas, menor preço histórico registrado e gráficos de variação de preços ao longo do tempo.

As páginas de Login e Cadastro terão foco em simplicidade, acessibilidade e usabilidade, permitindo autenticação segura dos usuários.

Nas áreas autenticadas, o Dashboard do Usuário reunirá estatísticas gerais, jogos favoritados e promoções monitoradas. A página de Favoritos permitirá acompanhar jogos salvos pelo usuário, enquanto a página de Histórico de Preços apresentará gráficos interativos relacionados à evolução dos preços dos jogos acompanhados.

Os protótipos também buscarão representar aspectos de responsividade e experiência do usuário, garantindo compatibilidade com diferentes tamanhos de tela.

Os designs dos protótipos foram gerados com auxílio do plugin UX Pilot, integrado ao Figma, e poderão ser encontrados em:

https://www.figma.com/design/1RK0AqVwu4swHSRK0xifLJ/Sem-t%C3%ADtulo?node-id=0-1&t=AqP2qtH2jniBh37Q-1

---

# 5. Referências

CHEAPSHARK. CheapShark API Documentation. Disponível em:  
https://apidocs.cheapshark.com/  
Acesso em: 15 maio 2026.

DOCKER. Docker Documentation. Disponível em:  
https://docs.docker.com/  
Acesso em: 15 maio 2026.

IS THERE ANY DEAL. API Documentation. Disponível em:  
https://api.isthereanydeal.com/  
Acesso em: 15 maio 2026.

JWT.IO. Introduction to JSON Web Tokens. Disponível em:  
https://jwt.io/  
Acesso em: 15 maio 2026.

NESTJS. NestJS Documentation. Disponível em:  
https://nestjs.com/  
Acesso em: 15 maio 2026.

POSTGRESQL. PostgreSQL Documentation. Disponível em:  
https://www.postgresql.org/docs/  
Acesso em: 15 maio 2026.

PRISMA ORM. Prisma Documentation. Disponível em:  
https://www.prisma.io/docs  
Acesso em: 15 maio 2026.

REACT. React Documentation. Disponível em:  
https://react.dev/  
Acesso em: 15 maio 2026.