# Simulação

descrição das ações do projeto

## Estrutura do Projeto

```plaintext
project/
├── src/
│   ├── domain/                                          # Regras de negócio
│   │   ├── entities/                                    # Entidades principais
│   ├── application/                                     # Interface com o mundo externo
│   ├── infrastructure/                                  # Configurações, servidores e conectores
│   │   ├── config/                                      # Configurações de ambiente
│   │   │   └── routers.ts                               # Configuração de rotas
│   │   ├── providers/
│   │   ├── utils/
│   │   └── server.ts                                    # Configuração do servidor
│   └── index.ts                                         # Ponto de entrada
├── tests/                                               # Testes unitários, integração e performance
├── Dockerfile                                           # Configuração do Docker
├── docker-compose.yml                                   # Arquivo Compose para ambiente local
├── tsconfig.json                                        # Configuração do TypeScript
└── package.json                                         # Dependências e scripts
```
> [!NOTE]
> Com esta estrutura, o projeto está preparado para (...).

## Tecnologias e Decisões de Arquitetura
- **Arquitetura Hexagonal:**
  As regras de negócio são separadas da interface com o mundo externo, facilitando testes, manutenção e extensibilidade do código.
- **TypeScript:**
  Maior segurança e clareza ao código.

## **Instruções de Setup**
Pré-requisitos
  - **Node.js: v20.x ou superior**

Passos para execução

#### 1. Instalar dependências:

```bash
npm install
```

#### 2. Executar o serviço localmente:

```bash
npm run dev
```

#### 3. Testar localmente:

```bash

npm test
```

#### 4. Construir a imagem Docker:

```bash

docker build -t project .
```

#### 5. Executar com Docker Compose:

```bash

docker-compose up
```

## Testes
### Testes de Unidade
Testam a lógica de cálculo de empréstimos:

```bash
npm run test
```
### Testes de Integração
Verificam os endpoints e a interação entre camadas:

```bash

npm run test
```