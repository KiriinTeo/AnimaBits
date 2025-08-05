<div align="center">
  
![icone2d](gorillaz2D/assets/icones/icone2d.ico) 

# AnimaBits

</div>

**Animabits** são mascotes animados em GIF que o usuário pode interagir diretamente na área de trabalho do Windows. Este projeto foi criado como forma de praticar **JavaScript** com **Electron** e transformar ideias divertidas em pequenas experiências interativas de desktop — como pets virtuais animados, inspirados em assistentes clássicos como Clippy e o infame "pato chato".

> Em breve, versões feitas com C# e Win32
> para expandir interação com o "AnimaBit"
---

## 🧠 Sobre o Projeto

- Criado com **ElectronJS**
- Usa apenas HTML/CSS/JavaScript e arquivos `.gif` na pasta `assets/`
- Permite arrastar, clicar e ativar reações interativas (ex: idle, hold, bored, dancing, spin, transform...)
- Executa como janela transparente e sem borda, integrada à área de trabalho
- Pode ser configurado para **iniciar com o sistema**
- Cada Animabit pode ter **regras de interação específicas**

---

## 🎮 Como Funciona

1. O pet é exibido fixamente na tela em `idle.gif`
2. Interações como clique, duplo clique, tecla pressionada ou segurar o mouse disparam animações diferentes
3. Cada sprite é um `.gif` com nome correspondente ao comportamento (ex: `spin.gif`, `hold.gif`, `dancing.gif`)
4. Tudo é controlado via `index.html` e `main.js` com eventos DOM e lógica personalizada

---

## 📂 Estrutura do Projeto

+ /assets
  + /icones
    + icone2d.ico
  + idle.gif
  + hold.gif
  + sing.gif
  + dancing.gif
+ main.js
+ index.html
+ preload.js
+ style.css
+ package.json

---

## 🖼️ Como Criar Seu Próprio Animabit

1. Substitua ou adicione seus GIFs na pasta `/assets`
2. Use nomes que façam sentido para suas ações (ex: `idle.gif`, `click.gif`, `sing.gif`)
3. Altere os eventos no `index.html` para controlar essas animações
4. Teste com `npm start`

> ✅ Dica: Use imagens com fundo transparente para integração melhor com a área de trabalho.

---

## 🔧 Instalação e Execução

### Pré-requisitos

- Node.js e npm instalados

### Rodando localmente
> De preferência rodar no cmd como Administrador caso não funcionar na primeira tentativa
> Navegue até a pasta do projeto para executar o comando (princialmente 'npm run dist')

```bash
npm install       //Para instalar o npm
npm start         //Para rodar e testar (Ctrl + C para parar de rodar)
npm run dist      //Para gerar um installer e .exe
```
