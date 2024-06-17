<h4 align="center"> 
    :construction:  Projeto em construção  :construction:
</h4>

# Arquitetura de Microsserviços

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

Este repositório contém três serviços principais:

1. **Serviço de Cadastro de Alunos - Responsável por gerenciar os dados dos alunos.**
2. **Serviço de Acompanhamento de Presença - Responsável por registrar e consultar as presenças dos alunos.**
3. **Serviço de Relatório - Responsável por consulta os outros dois serviços para gerar relatórios de alunos específicos.**


## 🛠️ Abrir e rodar o projeto

- cd attendance-service
- npm install

- cd ../attendance-service
- npm install

- cd ../report-service
- npm install

### Terminal 1
- cd student-service
- node src/server.js

#### Métodos HTTP do REST para Serviço de Cadastro de Alunos
- POST /students - Cria um novo aluno -> Json enviado no body  { "name": "Nome estudante", "email": "emailEstudante@gmail.com", "course": "Nome do curso Ex. Inglês" }
- GET /students - Retorna todos os alunos
- GET /students/:id - Retorna um aluno específico pelo ID
- PUT /students/:id - Atualiza um aluno específico pelo ID
- DELETE /students/:id - Deleta um aluno específico pelo ID

### Terminal 2
- cd attendance-service
- node src/server.js

#### Métodos HTTP do REST para Serviço de Cadastro de Alunos
- POST /students - Cria um novo aluno -> Json enviado no body  { "studentId": "ID do aluno cadastrado", "date": "2024-06-15", "status": "Present" }
- GET /students - Retorna todos os alunos
- GET /students/:id - Retorna um aluno específico pelo ID
- PUT /students/:id - Atualiza um aluno específico pelo ID
- DELETE /students/:id - Deleta um aluno específico pelo ID

### Terminal 3
- cd report-service
- node src/server.js


