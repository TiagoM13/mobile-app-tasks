# Mobile App Tasks

Aplicação de uma lista de tarefas, com as seguintes características, criação, listagem, atualização e deleção de tarefas, as tarefas são exibidas em tempo real, mostrando a hora da criação e sua descrição. O usuário pode interagir para concluir a tarefa ou desmarcar como incompleta, uma funcionalidade de toggle (checkbox).

## Screenshots

<div>
  <img src="./src/assets/home.png" width="200" style="border-radius: 16px" alt="" />
  <img src="./src/assets/create.png" width="200" style="border-radius: 16px" alt="" />
  <img src="./src/assets/update.png" width="200" style="border-radius: 16px" alt="" />
</div>

## Como rodar o projeto

Clone esse repositório `mobile-app-tasks` em uma pasta de sua escolha

```bash
  # clone o repositório
  git clone https://github.com/TiagoM13/mobile-app-tasks.git

  # abra a pasta do projeto 
  cd mobile-app-tasks 

  # instale as dependecias
  npm install

  # abra o projeto usando o visual studido code (ou outro editor de sua escolha) 
  code .

  # rode o projeto usando
  npx expo start
```
    
## Funcionalidades

- Criação de tarefas
- Listagem das tarefas
- Atualização da tarefa
- Deleção da tarefa
- Checkbox de tarefa
- Intergração de a [api-tasks](https://github.com/TiagoM13/api-tasks.git)


## Stack utilizada

**Front-end:** React, React Native, Expo, Expo Router, Pullstate, React Hook Form
