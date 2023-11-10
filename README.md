# Dolado: Teste prático para Frontend
# Desafios Enfrentados no Projeto

1. Integração com Ambas as APIs
O desafio principal foi integrar eficientemente as APIs do YouTube e do Ticketmaster. Foi necessário lidar com diferentes formatos de resposta e garantir uma integração suave entre as duas fontes de dados.

2. Lidar com a Falta de Resposta da API do Ticketmaster
Foi necessário implementar estratégias para lidar com casos em que a API do Ticketmaster não retornava resultados, garantindo uma experiência do usuário consistente e informativa.

3. Adaptação à Estrutura do Next.js 14
A adaptação à estrutura mais recente do Next.js (v14) apresentou desafios na organização do projeto, garantindo a compatibilidade e tirando proveito das novas funcionalidades oferecidas pela versão mais recente.

# Decisões tomadas no projeto

1. Escolha do Tailwind CSS
Optei por utilizar o Tailwind CSS como framework de estilos devido à sua ampla adoção na comunidade, documentação clara e eficiência na criação de componentes.

2. Uso do Axios para Integração com APIs
A escolha do Axios para a integração com as APIs foi motivada pela simplicidade da biblioteca e sua eficácia na manipulação de requisições HTTP, atendendo bem aos objetivos do projeto.

3. Separação de Componentes
Dividi o projeto em serviços (services), responsáveis pela integração com as APIs, e componentes (components), encarregados da criação de componentes e manipulação de dados.

# Estrutura do projeto

O projeto foi organizado em pastas distintas para facilitar a manutenção e escalabilidade:

* services: Responsável pela conexão com as APIs.
* components: Encarregado da criação de componentes e manipulação de dados.
* app/page.tsx: Página principal (page.tsx).

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

# Considerações finais do projeto

Foi um projeto desafiador, porém extremamente gratificante. A implementação foi envolvente, proporcionando um ambiente propício ao aprendizado e desenvolvimento. Este teste prático destacou-se como uma das experiências mais divertidas em um processo seletivo que já participei.