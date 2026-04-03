// Funções para armazenar e recuperar dados do localStorage
function salvarDados(chave, dados) {
    localStorage.setItem(chave, JSON.stringify(dados));
}

function carregarDados(chave) {
    const dados = localStorage.getItem(chave);
    return dados ? JSON.parse(dados) : null;
}

// Questões padrão de gestão de TI
const questoesPadrao = [
    { pergunta: "A empresa possui processos documentados para gestão de TI?", categoria: "Processos de TI" },
    { pergunta: "São utilizados frameworks como ITIL para gestão de serviços?", categoria: "Processos de TI" },
    { pergunta: "Há implementação de processos de mudança controlada?", categoria: "Processos de TI" },
    { pergunta: "A empresa monitora continuamente o desempenho da infraestrutura de TI?", categoria: "Uso de Ferramentas" },
    { pergunta: "São utilizadas ferramentas de automação para tarefas repetitivas?", categoria: "Uso de Ferramentas" },
    { pergunta: "Há integração entre sistemas de TI (ex: ERP, CRM)?", categoria: "Uso de Ferramentas" },
    { pergunta: "A empresa define e mede SLAs (Service Level Agreements) para serviços de TI?", categoria: "Nível de Serviço" },
    { pergunta: "Há relatórios regulares de disponibilidade e performance dos serviços?", categoria: "Nível de Serviço" },
    { pergunta: "Os usuários recebem suporte técnico eficiente e rápido?", categoria: "Nível de Serviço" },
    { pergunta: "A TI está alinhada com os objetivos estratégicos da empresa?", categoria: "Alinhamento Estratégico" },
    { pergunta: "Há participação da TI nas decisões estratégicas do negócio?", categoria: "Alinhamento Estratégico" },
    { pergunta: "São realizados investimentos em TI baseados em ROI (Retorno sobre Investimento)?", categoria: "Alinhamento Estratégico" },
    { pergunta: "Existe um comitê de governança de TI com representação de diretores?", categoria: "Governança de TI" },
    { pergunta: "São seguidas normas e regulamentações de TI (ex: LGPD, ISO 27001)?", categoria: "Governança de TI" },
    { pergunta: "Há políticas claras de responsabilidade e autoridade em TI?", categoria: "Governança de TI" },
    { pergunta: "A empresa realiza avaliações regulares de riscos de TI?", categoria: "Gestão de Riscos" },
    { pergunta: "Há planos de continuidade de negócio e recuperação de desastres?", categoria: "Gestão de Riscos" },
    { pergunta: "São implementadas medidas de segurança da informação?", categoria: "Gestão de Riscos" },
    { pergunta: "Há cultura de compartilhamento de conhecimento e aprendizado contínuo em TI?", categoria: "Cultura de TI" },
    { pergunta: "A equipe de TI é incentivada a inovar e propor melhorias?", categoria: "Cultura de TI" }
];

// Função para login simples
function login() {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    const perfil = document.getElementById('perfil').value;

    // Simulação de login (em produção, verificar com backend)
    if (usuario && senha) {
        salvarDados('usuarioLogado', { usuario, perfil });
        alert('Login realizado com sucesso!');
        window.location.href = 'index.html';
    } else {
        alert('Preencha todos os campos!');
    }
}

// Função para cadastrar empresa
function cadastrarEmpresa() {
    const nome = document.getElementById('nomeEmpresa').value;
    const setor = document.getElementById('setor').value;

    if (nome && setor) {
        const empresas = carregarDados('empresas') || [];
        empresas.push({ nome, setor });
        salvarDados('empresas', empresas);
        alert('Empresa cadastrada com sucesso!');
        document.getElementById('formEmpresa').reset();
    } else {
        alert('Preencha todos os campos!');
    }
}

// Função para cadastrar questão
function cadastrarQuestao() {
    const pergunta = document.getElementById('pergunta').value;
    const categoria = document.getElementById('categoria').value;

    if (pergunta && categoria) {
        const questoes = carregarDados('questoes') || [];
        questoes.push({ pergunta, categoria });
        salvarDados('questoes', questoes);
        alert('Questão cadastrada com sucesso!');
        document.getElementById('formQuestao').reset();
    } else {
        alert('Preencha todos os campos!');
    }
}

// Função para carregar questionário
function carregarQuestionario() {
    let questoes = carregarDados('questoes');
    if (!questoes || questoes.length === 0) {
        questoes = questoesPadrao;
        salvarDados('questoes', questoes);
    }
    const container = document.getElementById('questionario');
    container.innerHTML = '';

    questoes.forEach((questao, index) => {
        const div = document.createElement('div');
        div.innerHTML = `
            <p><strong>${questao.categoria}:</strong> ${questao.pergunta}</p>
            <label><input type="radio" name="q${index}" value="ok" required onclick="togglePlano(${index}, false)"> OK</label>
            <label><input type="radio" name="q${index}" value="parcial" onclick="togglePlano(${index}, true)"> Parcial</label>
            <label><input type="radio" name="q${index}" value="nok" onclick="togglePlano(${index}, true)"> NOK</label>
            <textarea placeholder="Evidência (se OK)" id="evidencia${index}"></textarea>
                <textarea placeholder="Justificativa (se Parcial ou NOK)" id="plano${index}" style="display:none;"></textarea>
        `;
        container.appendChild(div);
    });
}

// Função para calcular score
function calcularScore() {
    const questoes = carregarDados('questoes') || [];
    let score = 0;
    const respostas = {};
    const maxScore = questoes.length * 5;

    questoes.forEach((questao, index) => {
        const resposta = document.querySelector(`input[name="q${index}"]:checked`);
        const evidencia = document.getElementById(`evidencia${index}`).value;
        const plano = document.getElementById(`plano${index}`).value;
        if (resposta) {
            respostas[questao.categoria] = respostas[questao.categoria] || { ok: 0, parcial: 0, nok: 0 };
            if (resposta.value === 'ok') {
                respostas[questao.categoria].ok++;
                score += 5;
            } else if (resposta.value === 'parcial') {
                respostas[questao.categoria].parcial++;
                score += 3;
            } else {
                respostas[questao.categoria].nok++;
                score += 0;
            }
            // Salvar evidência e justificativa
            respostas[questao.categoria].detalhes = respostas[questao.categoria].detalhes || [];
            respostas[questao.categoria].detalhes.push({ pergunta: questao.pergunta, resposta: resposta.value, evidencia, justificativa: plano });
        }
    });

    salvarDados('respostas', respostas);
    salvarDados('score', score);
    salvarDados('maxScore', maxScore);

    // Determinar nível
    let nivel;
    if (score <= 25) nivel = 'Artesanal';
    else if (score <= 50) nivel = 'Intermediário';
    else if (score <= 75) nivel = 'Eficaz';
    else nivel = 'Otimizado';

    salvarDados('nivel', nivel);
    window.location.href = 'relatorio.html';
}

// Função para exibir relatório
function exibirRelatorio() {
    const score = carregarDados('score') || 0;
    const nivel = carregarDados('nivel') || 'Não calculado';
    const maxScore = carregarDados('maxScore') || 100;
    const respostas = carregarDados('respostas') || {};

    document.getElementById('scoreTotal').textContent = `${score}/${maxScore}`;
    document.getElementById('nivelMaturidade').textContent = nivel;

    const detalhes = document.getElementById('detalhes');
    detalhes.innerHTML = '';
    for (const categoria in respostas) {
        if (categoria === 'detalhes') continue;
        const div = document.createElement('div');
        div.innerHTML = `<h3>${categoria}</h3><p>OK: ${respostas[categoria].ok}<br>Parcial: ${respostas[categoria].parcial}<br>NOK: ${respostas[categoria].nok}</p>`;
        detalhes.appendChild(div);
    }

        // Justificativas para respostas Parcial/NOK
        const justificativasDiv = document.createElement('div');
        justificativasDiv.innerHTML = '<h2>Justificativas (Parcial/NOK)</h2>';
        let hasJustificativas = false;
        for (const categoria in respostas) {
            if (categoria === 'detalhes') continue;
            if (respostas[categoria].detalhes) {
                respostas[categoria].detalhes.forEach(d => {
                    if (d.resposta !== 'ok' && d.justificativa) {
                        hasJustificativas = true;
                        const p = document.createElement('p');
                        p.innerHTML = `<strong>${d.pergunta} (${d.resposta}):</strong> ${d.justificativa}`;
                        justificativasDiv.appendChild(p);
                    }
                });
            }
        }
        if (!hasJustificativas) {
            justificativasDiv.innerHTML += '<p>Nenhuma justificativa registrada.</p>';
        }
        detalhes.appendChild(justificativasDiv);

        // Interpretação dos resultados (baseado na maior parte das respostas)
        const interpretacaoDiv = document.createElement('div');
        interpretacaoDiv.innerHTML = '<h2>Interpretação dos Resultados</h2>';
        let totalOk = 0, totalParcial = 0, totalNok = 0;
        for (const categoria in respostas) {
            if (categoria === 'detalhes') continue;
            totalOk += respostas[categoria].ok || 0;
            totalParcial += respostas[categoria].parcial || 0;
            totalNok += respostas[categoria].nok || 0;
        }

        if (totalOk >= totalParcial && totalOk >= totalNok) {
            interpretacaoDiv.innerHTML += '<p><strong>Maioria de OK:</strong> O ambiente de TI demonstra maturidade e procedimentos robustos, com práticas estáveis e previsíveis.</p>';
        } else if (totalParcial > totalOk && totalParcial >= totalNok) {
            interpretacaoDiv.innerHTML += '<p><strong>Prevalência de Parcial:</strong> Há avanço, mas ainda existem lacunas operacionais e de controles que dependem de ajustes e continuidade de iniciativas.</p>';
        } else if (totalNok > totalOk && totalNok > totalParcial) {
            interpretacaoDiv.innerHTML += '<p><strong>Maioria de NOK:</strong> O cenário mostra fragilidades relevantes e exige intervenções rápidas para reduzir riscos e apoiar a jornada de governança.</p>';
        }

        const totalRespostas = totalOk + totalParcial + totalNok;
            // Exibir contagem total de respostas
            const resumoContagem = document.createElement('div');
            resumoContagem.innerHTML = `
                <h2>Resumo de Quantidade de Respostas</h2>
                <p><strong>OK:</strong> ${totalOk}</p>
                <p><strong>Parcial:</strong> ${totalParcial}</p>
                <p><strong>NOK:</strong> ${totalNok}</p>
                <p><strong>Total:</strong> ${totalRespostas}</p>
            `;
            interpretacaoDiv.appendChild(resumoContagem);
        if (totalRespostas > 0 && ((totalRespostas - (totalOk + totalParcial + totalNok)) > 0)) {
            interpretacaoDiv.innerHTML += '<p><strong>N/A frequente:</strong> Verifique o escopo do checklist para garantir que todas as áreas relevantes estão avaliadas.</p>';
        }

        // Lista de questões com Parcial/NOK para interpretação adicional
        const listaProblemas = document.createElement('div');
        listaProblemas.innerHTML = '<h3>Questões Avaliadas como Parcial/NOK</h3>';
        let hasProblemas = false;
        for (const categoria in respostas) {
            if (categoria === 'detalhes') continue;
            if (respostas[categoria].detalhes) {
                respostas[categoria].detalhes.forEach(d => {
                    if (d.resposta !== 'ok') {
                        hasProblemas = true;
                        const p = document.createElement('p');
                        p.innerHTML = `<strong>[${d.resposta.toUpperCase()}] ${d.pergunta}</strong><br>Justificativa: ${d.justificativa || 'N/A'}<br>Evidência: ${d.evidencia || 'N/A'}`;
                        listaProblemas.appendChild(p);
                    }
                });
            }
        }
        if (!hasProblemas) {
            listaProblemas.innerHTML += '<p>Nenhuma questão parcial ou NOK.</p>';
        }
        interpretacaoDiv.appendChild(listaProblemas);
        detalhes.appendChild(interpretacaoDiv);
}

// Verificar se usuário está logado
function verificarLogin() {
    const usuario = carregarDados('usuarioLogado');
    if (!usuario) {
        window.location.href = 'login.html';
    }
}

// Função para mostrar/ocultar plano de contingência
function togglePlano(index, show) {
    const plano = document.getElementById(`plano${index}`);
    if (show) {
        plano.style.display = 'block';
    } else {
        plano.style.display = 'none';
        plano.value = '';
    }
}