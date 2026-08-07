# 🎮 Neon Assault

![Status](https://img.shields.io/badge/status-Em%20Desenvolvimento-orange)
![Engine](https://img.shields.io/badge/Engine-Phaser%203-4CC61E)
![Build](https://img.shields.io/badge/Build-Vite-646CFF)
![License](https://img.shields.io/badge/license-MIT-blue)

Neon Assault é um jogo 2D de ação inspirado em clássicos como **Metal Slug**, porém ambientado em um universo **Cyberpunk** com gráficos modernos, animações modulares e arquitetura escalável.

O objetivo do projeto é criar um shooter de alta qualidade utilizando **Phaser 3**, permitindo futuras expansões como novos personagens, armas, inimigos, chefes e fases.

---

# 📸 Preview

> Em desenvolvimento

- Gameplay estilo Metal Slug
- Gráficos Cyberpunk
- Sprites separados por partes
- Sistema modular de armas
- Física Arcade Phaser
- Arquitetura orientada a componentes

---

# 🎯 Características

- Movimento lateral (Side Scroller)
- Pulo
- Corrida
- Agachar
- Mira independente
- Sistema de armas
- Sistema de munição
- Balas físicas
- Inimigos
- IA modular
- Animações suaves
- HUD
- Barra de vida
- Sistema de partículas
- Background em Parallax
- Sons e Música
- Sistema de colisão

---

# 🛠 Tecnologias

- JavaScript ES6+
- Phaser 3
- Vite
- HTML5
- CSS3

---

# 📂 Estrutura do Projeto

```
src/

│
├── animation/
│   └── AnimationFactory.js
│
├── entities/
│   ├── Player.js
│   ├── Enemy.js
│   ├── Bullet.js
│   └── Weapon.js
│
├── input/
│   └── InputManager.js
│
├── managers/
│   ├── AssetManager.js
│   └── AudioManager.js
│
├── scenes/
│   ├── BootScene.js
│   ├── PreloadScene.js
│   ├── MenuScene.js
│   └── Level1Scene.js
│
├── ui/
│   ├── HUD.js
│   ├── HealthBar.js
│   └── AmmoCounter.js
│
├── utils/
│   └── AssetKeys.js
│
└── main.js
```

---

# 🎨 Organização dos Sprites

```
public/

sprites/

player/

    body/

        idle1.png
        idle2.png
        walk1.png
        walk2.png
        run1.png
        run2.png
        jump1.png
        jump2.png
        sitdown1.png
        sitdown2.png

    arms/

        arm01.png
        arm02.png
        ...
        arm10.png

    weapons/

        weapon01.png
        weapon02.png
        ...
        weapon10.png

effects/

    muzzleflash.png

bullets/

    bullet01.png

enemies/

backgrounds/

ui/
```

---

# 🎮 Controles

| Tecla | Ação |
|--------|------|
| A | Andar para esquerda |
| D | Andar para direita |
| Shift | Correr |
| Espaço | Pular |
| S | Agachar |
| Mouse | Mirar |
| Botão esquerdo | Atirar |
| R | Recarregar |
| 1-9 | Trocar arma |

---

# 🔫 Sistema de Armas

Cada arma possui:

- Dano
- Cadência
- Alcance
- Tipo de munição
- Tempo de recarga
- Efeitos sonoros
- Flash de disparo
- Recuo

Exemplos:

- Pistola
- SMG
- Shotgun
- Rifle
- Sniper
- Minigun

---

# 💥 Sistema de Balas

Cada bala possui:

- Velocidade
- Direção
- Colisão
- Tempo de vida
- Dano
- Partículas

---

# ❤️ Sistema de Vida

O jogador possui:

- HP
- Invencibilidade temporária
- Barra de vida
- Animação de dano
- Morte

---

# 👾 Sistema de Inimigos

Tipos planejados:

- Soldado
- Drone
- Robô
- Cyborg
- Heavy
- Sniper
- Boss

Cada inimigo possui IA independente.

---

# 🗺 Roadmap

## Fase 1

- [x] Estrutura do projeto
- [x] Configuração Phaser
- [x] Player
- [x] Movimento
- [x] Pulo
- [x] Sistema de armas
- [x] Sistema de balas

## Fase 2

- [ ] HUD
- [ ] Barra de vida
- [ ] Sons
- [ ] Partículas
- [ ] Câmera dinâmica

## Fase 3

- [ ] IA dos inimigos
- [ ] Patrulha
- [ ] Ataque
- [ ] Boss

## Fase 4

- [ ] Fase completa
- [ ] Checkpoints
- [ ] Game Over
- [ ] Vitória

---

# 🚀 Como executar

Instale as dependências

```bash
npm install
```

Inicie o servidor

```bash
npm run dev
```

Abra

```
http://localhost:5173
```

---

# 🏗 Arquitetura

O projeto segue uma arquitetura modular para facilitar manutenção e expansão.

```
Player
│
├── InputManager
├── Weapon
├── Bullet
├── AnimationFactory
└── HUD
```

Cada componente possui responsabilidade única.

---

# 🎨 Inspirações

- Metal Slug
- Contra
- Cyberpunk 2077
- Broforce
- Huntdown
- Blazing Chrome

---

# 📈 Objetivos do Projeto

- Código limpo
- Arquitetura escalável
- Fácil manutenção
- Separação de responsabilidades
- Alta performance
- Fácil adição de novos conteúdos

---

# 👨‍💻 Desenvolvedor

**AlissonClaroDev**

Projeto desenvolvido para estudos de desenvolvimento de jogos utilizando Phaser 3, com foco em boas práticas de programação, arquitetura modular e criação de um shooter 2D inspirado em Metal Slug com temática Cyberpunk.

---

# 📜 Licença

Este projeto está licenciado sob a licença MIT.

---

# ⭐ Futuro

Após a conclusão do Neon Assault, o próximo grande projeto será um **MMORPG inspirado em DarkEden**, com gráficos modernos, jogabilidade atualizada e arquitetura escalável para multiplayer.
