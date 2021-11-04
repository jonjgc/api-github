
# Objetivo deste projeto

Usar a API do Github para listar todos os repositórios de um usuário específico na tela.

## Linguagens usadas nesse projeto

React.js, JavaScript, Html, CSS e Bootstrap.<br>
IDE utilizada: VSCode.
 

## Para executar é necessário ter o yarn instalado na máquina

A instalação do Yarn pode ser feita de forma bem simples por meio de outro gerenciador de pacotes, como o NPM, Scoop, Chocolatey, entre outros. Além disso, o Yarn download pode ser feito no site oficial da ferramenta (https://blog.betrybe.com/desenvolvimento-web/yarn/#8). Para executar o Yarn install pelo NPM, por exemplo, basta escrever o comando a seguir:

npm install -g yarn

### Após a brir o projeto, execute oo comando yarn start que vai exibir um servidor na porta 3000 com o a tela do projeto

OBS: caso apareça algum erro, execute o seguite comando: yarn add react-scripts

### Mudando o usuário para aparecer seus reposiórios

No código na parte de App.js, foi implementado um hook do react chaamdo useEffect, onde foi usado a função do javaScript Fetch para consumir os dados de da API do github, especificamente de um usuário. 

# Perguntas

## O que é uma tecnologia de SPA? Quais são suas bordagens e as principais tecnologias de mercado.

SPA é uma abreviação de Single Page Aplication, ou Aplicação de Página Única. O conceito dessa tecnologia é basicamente quando alternamos de uma rota para outra não é preciso ter um recarregamento completo da tela, todos os elementos que são iguais a página anterior permanecem estáticas, apenas fazendo o recarregamento do conteúdo que diferencia de uma página pra outra. Alguns exemplos de frameworks que são populares atualmente são React, Angular e Vue.js. 

## Qual sua maior motivação para utilizar uma biblioteca/framework de SPA para construir uma aplicação de front-end?

Os frameworks são feitos para facilitar a vida do programador, implementar uma tarefa que leva mais código de uma maneira tradicional, fazer isso de uma maneira mais simples essas bibliotecas.  

## O que é Typescript e qual a vantagem de adicioná-lo em um projeto?

Typescript ele é um superset que nos dar a possibilidde de adicionar tipagens. Códigos legado em que um novo programador que usa javascript e está se habituando com os novos códigos e conhecendo suas funções, pode ser um pouco difícil para ele encontrar quais tipagens corretas. Ao usar uma IDE como o VS Code, o mesmo tem a inteligência de ao digitar uma variável, saber quais são suas propriedades, mas nem sempre isso é possível, pois essa possibilidade só é conseguida através do Typescript.

## Exemplos de formas de autenticação ao consumir APIs de terceiros.

O Auth é um protocolo avançado para delegar acesso seguro de um usuário em um sistema para outro sistema que permite várias configurações.
o JSON Web Tokens (JWT) são uma forma de complexdade intermediária para fornecer acesso seguro de uma usuário a uma Web API.

    
