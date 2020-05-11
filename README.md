# NodeJs - projeto conceito

Um estudo organizado por um grupo de pesquisadores desocupados demonstrou que as pessoas tendem a preferir diferentes gêneros musicais de acordo com a temperatura ambiente. Baseado nesta incrível descoberta, contratamos você para desenvolver um serviço revolucionário que irá sugerir músicas ao usuário de acordo com a temperatura atual da cidade dele! Não é sensacional?

## Requisitos Funcionais

- Serviço acessível através de uma API REST
- Nome de uma cidade como parâmetro, e a partir disso retorna uma playlist (somente o nome das músicas já é o suficiente) de acordo com a temperatura atual na cidade fornecida
- Se a temperatura:
    - for maior que 25°C, o serviço deve sugerir músicas pop
    - estiver entre 10°C e 25°C, o serviço deve sugerir músicas de rock
    - estiver abaixo de 10°C, o serviço deve sugerir músicas clássicas

- Linguagem [Node.js](https://nodejs.org) principal.
- Utlizado a temperatura real naquele momento da cidade. Para ter acesso a este dado, utilizado API aberta de serviços meteorológicos [API do OpenWeatherMaps](https://openweathermap.org/api).
