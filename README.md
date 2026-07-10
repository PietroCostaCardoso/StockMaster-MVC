# Gerenciador de Inventário

<p align="center">
  <a href="#-português">Português</a> • 
  <a href="#-english">English</a> 
</p>

---
![Autor](https://img.shields.io/badge/Autor-Pietro%20Costa%20Cardoso-blue?style=flat-square&logo=github)
![Licença](https://img.shields.io/badge/Licença-MIT-yellow.svg?style=flat-square)
![Status](https://img.shields.io/badge/Status-Original%20Repo-green?style=flat-square)
## Português

### Sobre o Projeto
Este é um gerenciador de Inventário robusto desenvolvido em **Node.js**, seguindo a arquitetura **MVC (Model-View-Controller)**. O projeto foca em organização, segurança e persistência de dados, sendo ideal para aplicações escaláveis.

### Tecnologias Utilizadas
* **Backend:** Node.js com Express.
* **Banco de Dados & ORM:** MySQL com Sequelize (abstração de queries e segurança contra SQL Injection).
* **Template Engine:** Handlebars (Renderização Server-Side para melhor SEO).
* **Sessões:** `session-file-store` para persistência de login no disco (os.tmpdir()).
* **Segurança:** Cookies configurados como `httpOnly: true` para proteção contra ataques XSS.
* **Feedback:** `express-flash` para mensagens dinâmicas de sucesso ou erro.

### Estrutura de Pastas
* `/controllers`: Lógica de negócios e controle das requisições.
* `/db`: Configurações de conexão com o banco de dados.
* `/helpers`: Funções utilitárias e middlewares (ex: autenticação).
* `/models`: Definição dos esquemas das tabelas e interação com dados.
* `/public`: Arquivos estáticos como CSS e imagens.
* `/routes`: Definição de todas as rotas da aplicação.
* `/views`: Templates dinâmicos em Handlebars.

---

## English

### About the Project
A robust application manager developed in **Node.js**, following the **MVC (Model-View-Controller)** architectural pattern. This project prioritizes organization, security, and data persistence, making it a great foundation for scalable apps.

### Technologies Used
* **Backend:** Node.js with Express.
* **Database & ORM:** MySQL with Sequelize (query abstraction and SQL Injection protection).
* **Template Engine:** Handlebars (Server-Side Rendering for better SEO).
* **Sessions:** `session-file-store` for session persistence on disk (os.tmpdir()).
* **Security:** `httpOnly: true` cookie configuration to prevent XSS attacks.
* **Feedback:** `express-flash` for dynamic success/error notifications.

### Folder Structure
* `/controllers`: Business logic and request handling.
* `/db`: Database connection settings.
* `/helpers`: Utility functions and middlewares (e.g., auth checks).
* `/models`: Table schema definitions and data interaction.
* `/public`: Static assets like CSS and images.
* `/routes`: Application endpoint definitions.
* `/views`: Dynamic HTML templates (Handlebars).
---
### Screenshots
<div align="center">
 <img src="https://github.com/user-attachments/assets/a354201d-059c-49f7-b9d4-cdb7e4caea6f" width="45%" />
 <img src="https://github.com/user-attachments/assets/d3043e69-792f-4e28-a306-18f130100fb9" width="45%" />
 <img src="https://github.com/user-attachments/assets/10bcca32-37fd-4ae6-bfbd-96351e61a588" width="45%" />
 <img src="https://github.com/user-attachments/assets/d9e3f68a-399e-4fda-98d2-d02da0659960" width="45%" />
 <img src="https://github.com/user-attachments/assets/8815551d-0cf8-46d2-a03c-b8097ff54b47" width="45%" />



</div>
</div>


## 👤 Autor

Desenvolvido com dedicação por **Pietro Costa Cardoso**.  
Se este projeto te ajudou, considere dar uma ⭐ no repositório!



