# 🧮 Atividade Prática 04 - Calculadora Simples (React Native)

Este repositório contém a entrega da **Atividade Prática 04** desenvolvida para a disciplina de **Programação para Dispositivos Móveis II** do professor Jeferson de Souza Dias do curso de **Desenvolvimento de Software Multiplataforma** na **Fatec Itaquera**.

## 📌 Sobre o Projeto

O aplicativo consiste em uma calculadora mobile capaz de realizar as quatro operações matemáticas básicas. O foco da atividade é a modularização de componentes no React Native, separando a lógica visual de cada botão e do display de resultado, enquanto se mantém uma interface criativa e moderna.

## 🎯 Requisitos da Atividade e Como Foram Aplicados

| Requisito Solicitado | Como foi implementado |
| :--- | :--- |
| **Usar apenas uma tela** | Toda a interface gráfica foi construída no `App.js`. Os estados (`useState`) gerenciam os valores e o resultado na mesma view. |
| **Estrutura de 5 arquivos** | O projeto foi modularizado em componentes puros, importados no arquivo principal: `Soma.js`, `Multiplicacao.js`, `Divisao.js`, `Subtracao.js` e `Resultado.js`. |
| **Quatro operações básicas** | O motor de cálculo no `App.js` processa adição, subtração, multiplicação e divisão, incluindo validações para inputs vazios e tratamento para divisão por zero. |
| **Criatividade no Layout** | A interface foi desenhada utilizando um padrão "Dark Mode" moderno, com cores contrastantes para cada operação matemática, sombras (`elevation`) e bordas arredondadas, garantindo uma boa avaliação de design. |

---

## 🚀 Como Executar o Projeto

Você pode testar este projeto de duas maneiras: diretamente no navegador via Snack Expo (forma mais rápida) ou localmente na sua máquina.

### Opção 1: Pelo Snack Expo (Direto no Navegador)
1. Acesse o [Snack Expo](https://snack.expo.dev/).
2. No painel esquerdo de arquivos, crie a seguinte estrutura (apagando o conteúdo padrão):
   - `App.js`
   - `src/Soma.js`
   - `src/Subtracao.js`
   - `src/Multiplicacao.js`
   - `src/Divisao.js`
   - `src/Resultado.js`
3. Copie e cole os respectivos códigos deste repositório em cada arquivo.
4. Selecione a aba **Web**, **iOS** ou **Android** no painel direito para visualizar e interagir com o aplicativo em tempo real.

### Opção 2: Localmente na sua Máquina
**Pré-requisitos:** Node.js instalado e o aplicativo *Expo Go* no seu dispositivo móvel (opcional).

1. Clone este repositório para a sua máquina:
   ```bash
   git clone https://github.com/allanmsilva23/Calculadora-Simples-ReactNative.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd Calculadora-Simples-ReactNative
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor do Expo:
   ```bash
   npx expo start
   ```
5. Escaneie o QR Code que aparecerá no terminal usando a câmera do seu celular (iOS) ou o app do Expo Go (Android).

---

## 🛠️ Tecnologias Utilizadas
* **React Native**
* **Expo (v54.0.0)**
* **JavaScript (ES6+)**