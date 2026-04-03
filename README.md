# Sistema de Avaliação de Maturidade da TI

Este é um site simples para avaliar a maturidade da Tecnologia da Informação em empresas através de um questionário.

## Funcionalidades

- **Cadastro de Acesso:** Login com perfis (Administrador/Usuário).
- **Cadastro de Empresa:** Registrar empresas para avaliação.
- **Cadastro de Questões:** Criar perguntas categorizadas (opcional, já inclui 20 questões padrão).
- **Questionário:** Responder às perguntas com opções OK, NOK, Parcial, e campo para evidência ou plano de ação.
- **Relatório:** Visualizar score e nível de maturidade.

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

- **Artesanal/Reativo:** 0-29 pontos
- **Eficiente/Proativo:** 30-59 pontos
- **Eficaz/Otimizado:** 60-79 pontos
- **Estratégico:** 80-100 pontos

## Como Usar

1. Abra o `index.html` no navegador ou inicie um servidor local.
2. Faça login.
3. Cadastre uma empresa (opcional).
4. Responda ao questionário (questões padrão carregadas automaticamente).
5. Visualize o relatório.

## Tecnologias

- HTML
- CSS
- JavaScript (localStorage para armazenamento temporário)

## Executar

Para executar localmente:

```bash
python -m http.server 8000
```

Acesse http://localhost:8000