# Introdução ao SOLID

Nesse desáfio foi feita uma API para cadastro e busca de usuários, porém o foco foi a organização do código, foram seguidos ao mínimo 3 dos princípios SOLID, são eles Single Responsability Principle, Liskov Substitution Principle e Dependency Inversion Principle.

---
## Estrutura
- Routes: Declara as rotas e chama o controller.

- Controller: Recebe informações da requisição, chama o UseCase e retorna a resposta.

- UseCase: Aplica as resgras de negócio antes de chamar o Repository.

- Repository: Faz o contato direto com a base de dados.

- Model: Serão as modelagens ou entidades referentes as tabelas do banco de dados.