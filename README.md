# 🧟 Zombie Survival — Central de Missões dos Sobreviventes

> **A sobrevivência depende da organização.**

O sistema funciona como uma central de comando para um grupo de sobreviventes, permitindo controlar objetivos, responsáveis, prazos e resultados das missões.

---

## 📌 1. Identificação

* **Projeto:** Zombie Survival - Central de Missões dos Sobreviventes
* **Disciplina:** Laboratório de desenvolvimento web
* **Unidade:** 1
* **Tema escolhido:** Tema 5 — Quadro de tarefas da equipe
* **Integrante(s):** Leonardo Maciel da Paz
* **Turma:** Ciência da Computação - 6º Perídodo

---

## 🎯 2. Descrição do projeto

O projeto foi desenvolvido a partir do **Tema 5 - Quadro de tarefas da equipe**. A ideia consiste em um sistema para distribuir e acompanhar tarefas entre integrantes de uma equipe.

Para tornar o projeto mais legal, decidi adaptar a temática para um cenário de apocalipse zumbi. Em vez de gerenciar tarefas convencionais, o usuário administra missões necessárias para a sobrevivência de um grupo. Mesmo que a roupagem tenha sido alterada, preservei a ideia principal da proposta, apenas alterando os nomes convencionais de um quadro de tarefas. (Espero que não perca pontos por isso KKKKK)

Nessa adaptação:

* As tarefas são representadas por missões de sobrevivência.
* Os responsáveis pelas tarefas são os sobreviventes.
* As categorias representam tipos de missão, como suprimentos, resgate, exploração e defesa.
* Os locais indicam onde as missões devem acontecer.
* Os prazos representam os limites de tempo para concluir os objetivos.
* Os status indicam se uma missão está pendente, em andamento, concluída ou fracassada.

O público-alvo seria um grupo de sobreviventes que precisa distribuir responsabilidades e acompanhar seus objetivos de maneira organizada.

O objetivo é aplicar os fundamentos de HTML5, CSS3 e JavaScript na construção de uma aplicação interativa que atualiza sua interface sem recarregar a página. E assim foi feito.

---

## ⚙️ 3. Funcionalidades

### 📊 Dashboard

Apresenta um resumo das missões cadastradas, com indicadores de:

* Total de missões
* Missões pendentes
* Missões em andamento
* Missões concluídas
* Missões fracassadas 💀

Os indicadores são calculados pelo javaScriopt

### ➕ Cadastro de missões

Permite cadastrar novas missões com os seguintes dados:

* Identificador (ID)
* Nome da missão
* Descrição
* Categoria
* Local
* Prioridade
* Dificuldade
* Sobrevivente responsável
* Prazo

Garanti que seja verificado o preenchimento dos campos e utilizei regras de validação para evitar cadastros incompletos e textos muito curtos.

### 📋 Listagem de missões

As missões são apresentadas abaixo do registro em linhas de 2 colunas.

Cada cartão mostra apenas as informações principais:

* Nome da missão
* ID
* Sobrevivente responsável
* Prazo
* Status

As demais informações ficam disponíveis na área de detalhes da missão.

### 🔄 Alteração de status

O usuário pode alterar o status de uma missão por meio de um botão.

Os status utilizados são:

* **Pendente:** a missão ainda não foi iniciada
* **Fazendo:** a missão está em andamento
* **Feito:** a missão foi concluída
* **Fracasso:** a missão não foi concluída com sucesso

A alteração atualiza a listagem e os números do dashboard.

### 🔎 Busca e filtro

A aplicação possui:

* Busca textual pelo nome da missão
* Filtro por status

Esses recursos permitem localizar missões específicas e visualizar apenas aquelas que correspondem ao status selecionado.

### 🔍 Detalhes da missão

O botão **Ver detalhes** permite consultar as informações completas de uma missão, incluindo descrição, categoria, local, prioridade e dificuldade, além dos dados exibidos no cartão dos quais já mencionei.

### 🎨 Interface temática

Utilizei uma identidade visual com cores escuras, tons de verde, cartões destacados e uma imagem animada de fundo e cards semi-transparentes para dar um ar "futurista", pelo menos na minha cabeça funcionou.

---

## 🛠️ 4. Tecnologias utilizadas

| Tecnologia           | Utilização                                                                           |
| -------------------- | ------------------------------------------------------------------------------------ |
| HTML                 | Estrutura e organização do conteúdo da página.                                       |
| CSS                  | Estilização, cores, cartões, layout e efeitos visuais.                               |
| JavaScript           | Cadastro, validação, busca, filtros, alteração de status e atualização do dashboard. |
| DOM                  | Manipulação dos elementos da página sem recarregá-la.                                |
| Promise, async/await | Simulação de carregamento assíncrono inicial das missões.                            |
| Git                  | Controle de versões do projeto.                                                      |
| GitHub               | Armazenamento e disponibilização do repositório.                                     |

Não foram utilizados frameworks JavaScript ou bibliotecas externas para implementar as funcionalidades principais.

---

## 📁 5. Estrutura do projeto

A organização dos arquivos é a seguinte:

```text
Projeto/
│
├── index.html
├── style.css
├── script.js
├── README.md

```

### Descrição dos arquivos

* **`index.html`**: Contém a estrutura da página, o dashboard, o formulário de cadastro, os filtros, a listagem e a área de detalhes (o corpo do site).
* **`style.css`**: É onde está toda a estilização, incluindo o fundo animado.
* **`script.js`**: Controla os dados das missões, e a interação do usuário com o sistema.
* **`README.md`**: É isso daqui 😁 (Documentação do projeto)

---

## ▶️ 6. Como executar

1. Baixe ou clone o repositório do projeto;
2. Abra o arquivo `index.html` em um navegador;
3. Utilize o formulário para cadastrar missões, os botões de status, os filtros e a visualização de detalhes.

Quer algo mais fácil que isso?

---

## 🧑‍💻 7. Histórico de desenvolvimento

O desenvolvimento foi organizado em etapas: primeiro as funcionalidades essenciais e em seguida, personalizar 🎨.

### Etapas do projeto

1. **Estrutura inicial:** Criação da página HTML e organização das áreas principais;
2. **Cadastro e dados:** Criação dos objetos que representam as missões e do formulário para inserir novos registros;
3. **Listagem e interação:** Exibição das missões, alteração de status, busca, filtros e detalhes;
4. **Dashboard:** Cálculo e atualização dos registros e seus status para que fossem exibidos;
5. **Programação assíncrona:** Implementação de uma simulação de carregamento inicial utilizando Promise e async/await;
6. **Personalização visual:** Adaptação do Tema 5 para o universo de apocalipse zumbi e melhoria do CSS;
7. **Documentação:** Preparação deste README para explicar as decisões do projeto.

### Git e GitHub

O projeto utiliza Git para registrar as alterações e GitHub para armazenar o código.

**Repositório:** (https://github.com/Leomdpaz/Projeto-Front-end-Interativo)

O histórico pode ser consultado no repositório.

Durante o preenchimento desse README e acompanhando novamente o PDF base para o projeto, notei que utilizei somente a branch `main` durante todos os commits. Peço desde já desculpas pelo ocorrido, não tenho ainda o costume de realizar pushs fora da branch principal. Me atentarei na próxima!

---

## 🧠 8. Decisões técnicas

### 8.1. Escolha do Tema 5

O Tema 5 foi escolhido porque achei que seria um tema interessante de se trabalhar. A escolha da temática foi feita depois que já havia começado.

É um tema adequado para demonstrar manipulação do DOM, arrays, objetos, funções, eventos, validação de formulários e atualização de informações.

### 8.2. Adaptação para o apocalipse zumbi

A proposta original foi preservada, mas recebeu uma identidade temática diferente.

### 8.3. Utilização de cartões

As missões são exibidas em cartões, em vez de uma tabela. Isso facilita a leitura das informações principais e creio que combine mais com o tema de comando.

Os detalhes menos importantes para a consulta rápida são apresentados *separadamente*, quando o usuário solicita a visualização completa da missão.

### 8.4. Armazenamento dos dados em memória

As missões são mantidas em um array de objetos durante a execução da página. Como consequência, os dados cadastrados não são mantidos permanentemente após o recarregamento da página.

---

## ⏳ 9. Programação assíncrona

A aplicação utiliza programação assíncrona para simular o carregamento inicial das missões.

### Onde ela é utilizada?

A função `carregarMissoes()` retorna uma `Promise` e utiliza `setTimeout()` para simular uma espera antes de disponibilizar os dados.

A função `iniciar()` utiliza `async` e `await` para aguardar 5 segundos antes de atualizar a listagem e o dashboard.

### Qual operação é representada?

A operação representa o carregamento inicial dos registros de missão.

### O que aparece durante o carregamento?

A mensagem aparece junto às missões de sobrevivência. "☣️ Carregando missões... Aguarde." ao iniciar a página e "✅ Missões carregadas." após 5 segundos.

---

## 🚧 10. Limitações e melhorias futuras

* **Persistência:** os registros são armazenados apenas em memória e se perdem ao recarregar a página.
* **Banco de dados:** não há banco de dados para salvar as missões permanentemente.
* **Autenticação:** não existe sistema de login ou identificação individual dos sobreviventes.
* **Integração externa:** o carregamento assíncrono é simulado, sem integração com uma API real.
* **Notificações:** não há alertas automáticos de prazo ou notificações de novas missões.

---

## 🤖 11. Uso de IA

O chatGPT foi utilizado como apoio durante o desenvolvimento. As sugestões foram adaptadas às necessidades.

| Data       | Descrição do modelo | Prompt utilizado                                                                      | Onde foi usado                                 |
| ---------- | ------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------- |
| 07/10/2026 | ChatGPT     | Auxiliar na implementação de listagem e erros HTML | HTML     |
| 07/10/2026 | ChatGPT     | Ajuda para melhorar o visual do site com CSS | CSS |
| 08/10/2026 | ChatGPT     | Ajuda para resolver erros do script, implementação do promise e ajuda para a base da documentação | SCRIPT e README.md                                    |

---

## ✅ 12. Considerações finais

A adaptação do Tema 5 demonstra que é possível preservar os requisitos funcionais de um quadro de tarefas e, ao mesmo tempo, desenvolver uma identidade visual e conceitual própria.

O projeto também permite praticar organização de código, manipulação do DOM, eventos, validação, programação assíncrona e controle de versões, mantendo o escopo adequado à proposta da unidade

Apesar do uso de inteligência artificial para assitir o projeto, deixo claro que estudei juntamente à pratica, os conteúdos com menor domínio.
