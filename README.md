# Sistema de Avaliação de Maturidade da TI

Este é um site simples para avaliar a maturidade da Tecnologia da Informação em empresas através de um questionário interativo.

## Funcionalidades

- **Cadastro de Acesso:** Login com perfis (Administrador/Usuário).
- **Cadastro de Empresa:** Registrar empresas para avaliação.
- **Cadastro de Questões:** Criar perguntas categorizadas (opcional, já inclui 20 questões padrão).
- **Questionário:** Responder às perguntas com opções OK, NOK, Parcial, e campo para evidência ou plano de ação.
- **Relatório:** Visualizar score e nível de maturidade.
- **Dashboard:** Visão geral dos dados.

## Questões Padrão

Inclui 20 questões divididas pelas categorias:
- Processos de TI (3 questões)
- Uso de Ferramentas (3 questões)
- Nível de Serviço (3 questões)
- Alinhamento Estratégico (3 questões)
- Governança de TI (3 questões)
- Gestão de Riscos (3 questões)
- Cultura de TI (2 questões)

## Pontuação

- OK: 5 pontos
- Parcial: 3 pontos
- NOK: 0 pontos

Máximo: 100 pontos

## Níveis de Maturidade

- **Artesanal:** 0-25 pontos
- **Intermediário:** 26-50 pontos
- **Eficaz:** 51-75 pontos
- **Otimizado:** 76-100 pontos

## Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Edge, etc.)
- Git (para clonar o repositório)

## Instalação e Uso

### 1. Clonar o Repositório

```bash
git clone https://github.com/lucaslferreira/av-maturidade-de-ti.git
cd av-maturidade-de-ti
```

### 2. Abrir no Navegador

- Abra o arquivo `index.html` diretamente no navegador (clique duplo ou arraste para o navegador).
- Para funcionalidades completas (como salvar dados localmente), é recomendado usar um servidor local para evitar restrições de segurança do navegador.

### 3. Usar com Servidor Local (Recomendado)

Para uma experiência completa, inicie um servidor local:

#### Opção 1: Usando Python (se instalado)

```bash
python -m http.server 8000
```

Acesse: `http://localhost:8000`

#### Opção 2: Usando Node.js (se instalado)

```bash
npx http-server
```

Acesse: `http://localhost:8080`

#### Opção 3: Usando VS Code Extension

Instale a extensão "Live Server" no VS Code e clique em "Go Live".

### 4. Navegação no Sistema

1. Na página inicial (`index.html`), faça login (credenciais padrão: admin/admin ou user/user).
2. Cadastre uma empresa se necessário.
3. Responda ao questionário com as 20 questões padrão.
4. Visualize o relatório de maturidade.
5. Use o dashboard para ver estatísticas.

## Acesso Online

O sistema também está disponível online via GitHub Pages:  
[https://lucaslferreira.github.io/av-maturidade-de-ti/](https://lucaslferreira.github.io/av-maturidade-de-ti/)

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)

## Estrutura do Projeto

- `index.html` - Página inicial e login
- `dashboard.html` - Dashboard principal
- `cadastro_empresa.html` - Cadastro de empresas
- `cadastro_questoes.html` - Cadastro de questões
- `questionario.html` - Formulário do questionário
- `relatorio.html` - Relatório de resultados
- `relatorios-comparativos.html` - Relatórios comparativos
- `incidentes.html` - Gestão de incidentes
- `mudancas.html` - Gestão de mudanças
- `problemas.html` - Gestão de problemas
- `servicos.html` - Gestão de serviços
- `style.css` - Estilos CSS
- `script.js` - Lógica JavaScript

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto é de uso educacional e acadêmico.
- JavaScript (localStorage para armazenamento temporário)

## Executar

Para executar localmente:

```bash
python -m http.server 8000
```

Acesse http://localhost:8000