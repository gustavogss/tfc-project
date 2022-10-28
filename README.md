# Projeto Trybe Futebol Clube!

## Requisitos :robot:
  
### Seção 1: Users e Login

- [x] 1 - Desenvolva em `/app/backend/src/database` nas pastas correspondentes, uma migration e um model para a tabela `users`

- [x] 2 - (`TDD`) Desenvolva testes que cubram no mínimo 5% dos arquivos back-end em `/src`, com um mínimo de 7 linhas cobertas
  
- [x] 3 - Desenvolva o endpoint `/login` no back-end de maneira que ele permita o acesso com dados válidos no front-end 

- [x] 4 - (`TDD`) Desenvolva testes que cubram no mínimo 10% dos arquivos back-end em `/src`, com um mínimo de 19 linhas cobertas

 
- [x] 5 - Desenvolva o endpoint `/login` no back-end de maneira que ele não permita o acesso sem informar um email no front-end

- [x] 6 - (`TDD`) Desenvolva testes que cubram no mínimo 15% dos arquivos back-end em `/src`, com um mínimo de 25 linhas cobertas

- [x] 7 - Desenvolva o endpoint `/login` no back-end de maneira que ele não permita o acesso sem informar uma senha no front-end

- [x] 8 - (`TDD`) Desenvolva testes que cubram no mínimo 20% dos arquivos back-end em `/src`, com um mínimo de 35 linhas cobertas

- [x] 9 - Desenvolva o endpoint `/login` no back-end de maneira que ele não permita o acesso com um email inválido no front-end
  
- [x] 10 - (`TDD`) Desenvolva testes que cubram no mínimo 30% dos arquivos back-end em `/src`, com um mínimo de 45 linhas cobertas

- [x] 11 - Desenvolva o endpoint `/login` no back-end de maneira que ele não permita o acesso com uma senha inválida no front-end

- [x] 12 - Desenvolva o endpoint `/login/validate` no back-end de maneira que ele retorne os dados corretamente no front-end

 ### Seção 2: Times

- [x] 13 - (`TDD`) Desenvolva testes que cubram no mínimo 45% dos arquivos back-end em `/src`, com um mínimo de 70 linhas cobertas

- [x] 14 - Desenvolva em `/app/backend/src/database` nas pastas correspondentes, uma migration e um model para a tabela de `teams`
 
- [x] 15 - Desenvolva o endpoint `/teams` no back-end de forma que ele possa retornar todos os times corretamente
 
- [x] 16 - Desenvolva o endpoint `/teams/:id` no back-end de forma que ele possa retornar dados de um time específico
 
- [x] 17 - (`TDD`) Desenvolva testes que cubram no mínimo 60% dos arquivos back-end em `/src`, com um mínimo de 80 linhas cobertas 

### Seção 3: Partidas

- [x] 18 - Desenvolva em `/app/backend/src/database` nas pastas correspondentes, uma migration e um model para a tabela de `matches`
 
- [x] 19 - Desenvolva o endpoint `/matches` de forma que os dados apareçam corretamente na tela de partidas no front-end.
  
- [x] 20 - Desenvolva o endpoint `/matches` de forma que seja possível filtrar as partidas em andamento na tela de partidas do front-end

- [x] 21 - Desenvolva o endpoint `/matches` de forma que seja possível filtrar as partidas finalizadas na tela de partidas do front-end  

- [x] 22 - (`Bônus`; `TDD`) Desenvolva testes que cubram no mínimo 80% dos arquivos back-end em `/src`, com um mínimo de 100 linhas cobertas
  
- [x] 23 - Desenvolva o endpoint `/matches` de modo que seja possível salvar uma partida com o status de inProgress como true no banco de dados

- [x] 24 - Desenvolva o endpoint `/matches/:id/finish` de modo que seja possível alterar o status inProgress de uma partida para false no banco de dados

- [x] 25 - Desenvolva o endpoint `/matches` de forma que não seja possível inserir uma partida com times iguais 

- [x] 26 - Desenvolva o endpoint `/matches` de forma que não seja possível inserir uma partida com um time que não existe na tabela teams

- [x] 27 - Desenvolva o endpoint `/matches` de forma que não seja possível inserir uma partida sem um token válido 

- [x] 28 - Desenvolva o endpoint `/matches/:id` de forma que seja possível atualizar partidas em andamento

### Leaderboard Home

- [x] 29 - Desenvolva o endpoint `/leaderboard/home` de forma que seja possível filtrar as classificações dos times `da casa` na tela de classificação do front-end com os dados iniciais do banco de dados

- [x] 30 - Desenvolva o endpoint `/leaderboard/home` de forma que seja possível filtrar as classificações dos times da casa na tela de classificação do front-end, e atualizar a tabela ao inserir a partida Corinthians 2 X 1 Internacional

### Leaderboard away

- [x] 31 - Desenvolva o endpoint `/leaderboard/away`, de forma que seja possível filtrar as classificações dos times quando visitantes na tela de classificação do front-end, com os dados iniciais do banco de dados

- [x] 32 - Desenvolva o endpoint `/leaderboard/away` de forma que seja possível filtrar as classificações dos times quando visitantes na tela de classificação do front-end e atualizar a tabela ao inserir a partida Corinthians 2 X 1 Internacional

### Leaderboard

- [x] 33 - Desenvolva o endpoint `/leaderboard` de forma que seja possível filtrar a classificação geral dos times na tela de classificação do front-end com os dados iniciais do banco de dados

- [x] 34 - Desenvolva o endpoint /leaderboard de forma que seja possível filtrar a classificação geral dos times na tela de classificação do front-end e atualizar a tabela ao inserir a partida Flamengo 3 X 0 Napoli-SC

- [x] 35 - Desenvolva o endpoint /leaderboard de forma que seja possível filtrar a classificação geral dos times na tela de classificação do front-end e atualizar a tabela ao inserir a partida Minas Brasília 1 X 0 Ferroviária

## Tecnologia e ferramentas utilizadas :rocket:
- VsCode
- NodeJs e ExpressJs
- Typescript
- POO
- Mocha, Chai e Sinon
- JWT
- Arquitetura MSC
