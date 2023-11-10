# Dolado: Teste prático para Frontend
# Descrição do projeto

O projeto consiste em criar uma barra de pesquisa que, ao ser acionada, chama as APIs do YouTube e do Ticketmaster para recuperar informações relacionadas aos vídeos do YouTube. Além disso, integra informações disponibilizadas pela API do Ticketmaster.

# Descrição da implementação

Foi utilizado no projeto Next.js, React e TypeScript, assim como a biblioteca de componentes Tailwind CSS, e para a integração com as APIs do YouTube e TicketMaster, foi utilizada a biblioteca Axios. Em boas práticas, busquei implementar o princípio do single responsibility principle, mas acredito que pode ser mais bem abordado em refatorações do projeto. Em relação ao versionamento semântico, acabei ficando empolgado com o projeto e, decorrente disso, acabei não criando tantos commits semânticos quanto gostaria.

Na parte da exibição do modal dos vídeos do YouTube, acabei optando por seguir com o redirecionamento do link, pois ao tentar implementar o modal, acabei tendo problemas com a responsividade do mesmo. No entanto, acredito que em outro momento poderá ser implementado. De toda forma, foi muito interessante criar o projeto, pois pude aprender diversos conceitos e técnicas que o Next.js usa para resolver problemas e consegui colocar meus conhecimentos de React em prática.

Acredito que com o tempo e com o time tempo para adquirir mais desenvoltura na ferramenta e aumentar a velocidade de desenvolvimento utilizando a mesma. 

# Desafios Enfrentados no Projeto

1. Integração com Ambas as APIs
O desafio principal foi integrar eficientemente as APIs do YouTube e do Ticketmaster. Foi necessário lidar com diferentes formatos de resposta e garantir uma integração suave entre as duas fontes de dados.

2. Lidar com a Falta de Resposta da API do Ticketmaster
Foi necessário implementar estratégias para lidar com casos em que a API do Ticketmaster não retornava resultados, garantindo uma experiência do usuário consistente e informativa.

3. Adaptação à Estrutura do Next.js 14
A adaptação à estrutura mais recente do Next.js (v14) apresentou desafios na organização do projeto, para garantir a compatibilidade.

# Decisões tomadas no projeto

1. Escolha do Tailwind CSS
Optei por utilizar o Tailwind CSS como framework de estilos devido à sua ampla adoção na comunidade, documentação clara e eficiência na criação de componentes.

2. Uso do Axios para Integração com APIs
A escolha do Axios para a integração com as APIs foi motivada pela simplicidade da biblioteca e sua eficácia na manipulação de requisições HTTP, atendendo bem aos objetivos do projeto.

3. Separação de Componentes
Dividi o projeto em serviços (services), responsáveis pela integração com as APIs, e componentes (components), encarregados da criação de componentes e manipulação de dados.

# Dependencias instaladas

* axios: Biblioteca para realizar requisições HTTP de forma simplificada. Npm install axios
* tailwindcss: Framework de estilos utilizado para a construção de componentes. Npm install tailwindcss

# Instruções para rodar o projeto

* Execute o comando npm install para instalar as dependências.
* Criar o arquivo .env na pasta raiz do projeto com as chaves de API fornecidas:

NEXT_PUBLIC_REACT_APP_YOUTUBE_API_KEY = 'AIzaSyBObUSIOhl6bZ-9jQQyf766ymWe5vJSoVs'
NEXT_PUBLIC_REACT_APP_TICKETMASTER_API_KEY = 'x9TAS10ua31T7nONj8geuWe7Cnp7OixA'

* Rodar npm run dev
* Acesse o projeto em http://localhost:3000/.

# Ajustes pendentes

* Criar modal para visualização dos videos no site.
* Criação de testes unitarios.

# Considerações finais do projeto

Foi um projeto desafiador e bem gratificante. A implementação foi envolvente, proporcionando um ambiente propício ao aprendizado e desenvolvimento. Este teste prático destacou-se como uma das experiências mais divertidas em um processo seletivo que já participei.
# Estrutura do projeto

```plaintext
    ├── app
    │   ├── components
    │   │   ├── SearchComponent
    │   │   ├── SearchResultsComponent
    │   ├── services
    │   │   ├── apiService.ts
    │   ├── globals.css
    │   ├── layout.tsx    
    │   ├── page.tsx    
    ├── node_modules
    ├── .env
    ├── .gitignore
    ├── next-env.d.ts
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js   
    ├── README.md
    ├── tailwind.config.js
    └── tsconfig.json