# CSI606-2026-01 – Trabalho Final

**Discente:** Túlio Vilela Lopes

## Título do Trabalho

Sistema Web para Comparação de Preços de Jogos Digitais

---

# Resumo

O mercado de jogos digitais apresenta grande variação de preços entre diferentes lojas online, dificultando que usuários encontrem rapidamente as melhores ofertas disponíveis. Além disso, promoções ocorrem com frequência e variam conforme plataforma, região e período do ano, tornando o acompanhamento manual pouco eficiente. Diante desse cenário, este trabalho consistiu no desenvolvimento e implementação de uma aplicação web voltada para comparação, monitoramento e análise de preços de jogos digitais.

O sistema permite que usuários pesquisem jogos e acompanhem informações relevantes, como preços atuais em diferentes lojas, menor preço histórico registrado, promoções ativas e variações de preço ao longo do tempo mediante gráficos. Também foram implementadas funcionalidades de autenticação de usuários, sistema de favoritos (Wishlist) armazenado em banco de dados e filtros de listagem.

Os dados em tempo real são obtidos por meio da API pública especializada IsThereAnyDeal. O projeto foi construído utilizando uma arquitetura cliente-servidor moderna, com frontend (React/Vite) e backend (NestJS) separados, banco de dados NoSQL MongoDB e persistência orquestrada pelo Prisma ORM.

---

# 1. Tema

O trabalho final teve como tema o desenvolvimento de uma aplicação web full-stack para comparação de preços de jogos digitais em diferentes plataformas de venda online. O sistema centraliza informações de preços, promoções e histórico de valores, permitindo que usuários encontrem melhores ofertas e acompanhem as tendências do mercado.

---

# 2. Escopo

O projeto finalizado contempla as seguintes funcionalidades funcionais e técnicas:

* Cadastro e autenticação de usuários com criptografia de senhas (bcrypt) e controle de acesso utilizando tokens JWT.


* Pesquisa dinâmica de jogos por título via integração com a API externa IsThereAnyDeal.


* Comparação de preços entre diferentes lojas digitais na página de detalhes do jogo.


* Aplicação de filtros avançados por faixa de preço, descontos, lojas disponíveis e gêneros na página de listagem de ofertas.


* Exibição do histórico de preços dos jogos através de gráficos interativos na interface de detalhes.


* Sistema de favoritos (Wishlist) interligado ao perfil do usuário no banco de dados, permitindo salvar e gerenciar os jogos de interesse.


* Armazenamento de jogos recentes no *LocalStorage* do navegador para uma navegação personalizada na página inicial.


* Arquitetura baseada em NestJS no Backend e persistência de dados em MongoDB utilizando o Prisma ORM para a definição de *schemas* e *types*.



---

# 3. Restrições

Para manter o foco no objetivo da aplicação, as seguintes restrições foram aplicadas:

* Não ocorre a compra direta de jogos pela plataforma (o sistema atua como um comparador e redireciona o usuário para as respectivas lojas).
* Não há integração com gateways ou meios de pagamento próprios.
* Não há marketplace entre usuários.
* Não possui sistema de chat ou comentários.
* A aplicação é focada em ambiente web, não havendo um aplicativo mobile nativo.
* Não abrange a comparação de preços de jogos em mídia física.
* A atualização e a exatidão das informações de preços dependem diretamente da disponibilidade, da estabilidade e dos dados retornados pela API externa IsThereAnyDeal.



---

# 4. Interfaces e Implementação

O planejamento estrutural e visual da aplicação foi inicialmente elaborado utilizando a ferramenta Figma (com o plugin UX Pilot), focando na organização das informações e usabilidade. Os protótipos podem ser consultados em:
[https://www.figma.com/design/1RK0AqVwu4swHSRK0xifLJ/Sem-t%C3%ADtulo?node-id=0-1&t=AqP2qtH2jniBh37Q-1](https://www.figma.com/design/1RK0AqVwu4swHSRK0xifLJ/Sem-t%C3%ADtulo?node-id=0-1&t=AqP2qtH2jniBh37Q-1)

A implementação final do sistema em React refletiu o planejamento de design, estruturando as seguintes páginas funcionais:

* **Página Inicial:** Apresentação da proposta, vitrine de jogos recentes (baseados na sessão do usuário) e as melhores ofertas do momento sincronizadas.
* **Ofertas e Pesquisa:** Listagem em *grid* de jogos com descontos, contendo uma barra lateral com múltiplos filtros combináveis (loja, faixa de preço, porcentagem de desconto) e ordenação dinâmica.
* **Detalhes do Jogo:** Um painel aprofundado contendo a capa do título, *tags*, pontuação e um comparativo de preços detalhado por loja, além da visualização gráfica do histórico de preços vs. mínimo histórico.
* **Autenticação:** Telas simples e diretas de Login e Cadastro para acesso restrito.
* **Meus Favoritos (Wishlist):** Dashboard autenticado com os jogos que o usuário decidiu monitorar, exibindo o desconto atualizado para cada um deles.

---

# 5. Referências

DOCKER. Docker Documentation. Disponível em:

[https://docs.docker.com/](https://docs.docker.com/)

Acesso em: 15 maio 2026.

IS THERE ANY DEAL. API Documentation. Disponível em:

[https://api.isthereanydeal.com/](https://api.isthereanydeal.com/)

Acesso em: 15 maio 2026.

JWT.IO. Introduction to JSON Web Tokens. Disponível em:

[https://jwt.io/](https://jwt.io/)

Acesso em: 15 maio 2026.

MONGODB. MongoDB Documentation. Disponível em:

[https://www.mongodb.com/docs/](https://www.mongodb.com/docs/)

Acesso em: 17 jul. 2026.

NESTJS. NestJS Documentation. Disponível em:

[https://nestjs.com/](https://nestjs.com/)

Acesso em: 15 maio 2026.

PRISMA ORM. Prisma Documentation. Disponível em:

[https://www.prisma.io/docs](https://www.prisma.io/docs)

Acesso em: 15 maio 2026.

REACT. React Documentation. Disponível em:

[https://react.dev/](https://react.dev/)

Acesso em: 15 maio 2026.