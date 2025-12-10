# BuscaPeças

## 🔎 Visão Geral do Projeto

O **BuscaPeças** é um catálogo interativo de peças mecânicas e componentes industriais, desenvolvido com foco em empresas e profissionais da área. Seu principal objetivo é fornecer uma plataforma visual e funcional para a busca e visualização de modelos 3D de peças, facilitando a identificação e o estudo de componentes como roscas, parafusos, engrenagens e válvulas.

A aplicação utiliza a tecnologia de visualização 3D baseada em web, permitindo que o usuário interaja com os modelos diretamente no navegador, sem a necessidade de software externo.

## ✨ Funcionalidades Principais

*   **Visualização 3D Interativa:** Exibe modelos 3D de peças (formato GLB) que podem ser rotacionados e inspecionados pelo usuário.
*   **Catálogo de Peças:** Apresenta uma lista inicial de componentes com suas especificações e códigos ISO.
*   **Busca Rápida:** Permite a pesquisa de peças por nome ou código de norma (ISO), filtrando o catálogo em tempo real.
*   **Detalhes do Componente:** Ao selecionar uma peça, é exibida uma janela modal com o modelo 3D em destaque e informações detalhadas sobre o componente.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído com uma pilha de tecnologias web padrão, garantindo acessibilidade e facilidade de manutenção:

*   **HTML5:** Estrutura base da aplicação.
*   **CSS3:** Estilização e layout.
*   **JavaScript:** Lógica de interação e funcionalidade de busca.
*   **Google Model-Viewer:** Componente web essencial para a renderização e interação com os modelos 3D.

## 🚀 Como Executar Localmente

Para rodar o projeto em sua máquina local, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/hackersolo1/buscapeca.git
    cd buscapeca
    ```

2.  **Servidor Local:** Como o projeto utiliza a API `model-viewer`, é necessário executá-lo através de um servidor web local (não funciona apenas abrindo o `index.html` diretamente). Você pode usar o Python para isso:
    ```bash
    # Inicie um servidor HTTP simples na porta 8000
    python3 -m http.server 8000
    ```

3.  **Acesse no Navegador:** Abra seu navegador e acesse:
    ```
    http://localhost:8000
    ```

## 📂 Estrutura do Projeto

```
buscapeca/
├── index.html          # Página principal do catálogo
├── script/
│   └── script.js       # Lógica de busca e interação com o visualizador 3D
├── style/
│   └── style.css       # Estilos globais da aplicação
├── modelos/            # Contém os arquivos 3D no formato GLB
│   ├── rosca.glb
│   ├── parafusos.glb
│   ├── engrenagem.glb
│   └── valvula.glb
└── README.md           # Este arquivo
```

## 💡 Próximos Passos e Melhorias

*   Integrar um banco de dados ou um arquivo JSON para gerenciar o catálogo de peças de forma dinâmica.
*   Adicionar mais detalhes técnicos e especificações (material, peso, dimensões) para cada peça.
*   Implementar um sistema de filtragem mais avançado (por categoria, material, etc.).
*   Melhorar a responsividade e o design da interface.
