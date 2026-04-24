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
    {
        pergunta: "A empresa possui processos documentados para gestão de TI?",
        categoria: "Processos de TI",
        frameworks: {
            cobit: "APO03, BAI01",
            itil: "Service Design / Service Transition",
            iso27001: "A.5.1, A.5.2"
        }
    },
    {
        pergunta: "São utilizados frameworks como ITIL para gestão de serviços?",
        categoria: "Processos de TI",
        frameworks: {
            cobit: "BAI09",
            itil: "Service Transition / Change Enablement",
            iso27001: "A.7.2, A.9.2"
        }
    },
    {
        pergunta: "Há implementação de processos de mudança controlada?",
        categoria: "Processos de TI",
        frameworks: {
            cobit: "BAI06",
            itil: "Change Enablement",
            iso27001: "A.12.1"
        }
    },
    {
        pergunta: "A empresa monitora continuamente o desempenho da infraestrutura de TI?",
        categoria: "Uso de Ferramentas",
        frameworks: {
            cobit: "MEA01",
            itil: "Monitoring and Event Management",
            iso27001: "A.12.4"
        }
    },
    {
        pergunta: "São utilizadas ferramentas de automação para tarefas repetitivas?",
        categoria: "Uso de Ferramentas",
        frameworks: {
            cobit: "BAI03",
            itil: "Automation / Orchestration",
            iso27001: "A.12.2"
        }
    },
    {
        pergunta: "Há integração entre sistemas de TI (ex: ERP, CRM)?",
        categoria: "Uso de Ferramentas",
        frameworks: {
            cobit: "APO10",
            itil: "Service Integration and Management",
            iso27001: "A.14.1"
        }
    },
    {
        pergunta: "A empresa define e mede SLAs (Service Level Agreements) para serviços de TI?",
        categoria: "Nível de Serviço",
        frameworks: {
            cobit: "DSS01",
            itil: "Service Level Management",
            iso27001: "A.9.1"
        }
    },
    {
        pergunta: "Há relatórios regulares de disponibilidade e performance dos serviços?",
        categoria: "Nível de Serviço",
        frameworks: {
            cobit: "MEA03",
            itil: "Continual Improvement / Service Reporting",
            iso27001: "A.12.1"
        }
    },
    {
        pergunta: "Os usuários recebem suporte técnico eficiente e rápido?",
        categoria: "Nível de Serviço",
        frameworks: {
            cobit: "DSS02",
            itil: "Service Desk / Incident Management",
            iso27001: "A.16.1"
        }
    },
    {
        pergunta: "A TI está alinhada com os objetivos estratégicos da empresa?",
        categoria: "Alinhamento Estratégico",
        frameworks: {
            cobit: "APO02",
            itil: "Strategy Management",
            iso27001: "A.6.1"
        }
    },
    {
        pergunta: "Há participação da TI nas decisões estratégicas do negócio?",
        categoria: "Alinhamento Estratégico",
        frameworks: {
            cobit: "APO02",
            itil: "Business Relationship Management",
            iso27001: "A.6.1"
        }
    },
    {
        pergunta: "São realizados investimentos em TI baseados em ROI (Retorno sobre Investimento)?",
        categoria: "Alinhamento Estratégico",
        frameworks: {
            cobit: "BAI08",
            itil: "Financial Management",
            iso27001: "A.18.1"
        }
    },
    {
        pergunta: "Existe um comitê de governança de TI com representação de diretores?",
        categoria: "Governança de TI",
        frameworks: {
            cobit: "EDM03",
            itil: "Governance",
            iso27001: "A.6.1"
        }
    },
    {
        pergunta: "São seguidas normas e regulamentações de TI (ex: LGPD, ISO 27001)?",
        categoria: "Governança de TI",
        frameworks: {
            cobit: "DSS05",
            itil: "Information Security Management",
            iso27001: "A.18.1"
        }
    },
    {
        pergunta: "Há políticas claras de responsabilidade e autoridade em TI?",
        categoria: "Governança de TI",
        frameworks: {
            cobit: "APO07",
            itil: "Governance",
            iso27001: "A.5.1"
        }
    },
    {
        pergunta: "A empresa realiza avaliações regulares de riscos de TI?",
        categoria: "Gestão de Riscos",
        frameworks: {
            cobit: "APO12",
            itil: "Risk Management",
            iso27001: "A.8.1"
        }
    },
    {
        pergunta: "Há planos de continuidade de negócio e recuperação de desastres?",
        categoria: "Gestão de Riscos",
        frameworks: {
            cobit: "DSS04",
            itil: "IT Service Continuity Management",
            iso27001: "A.17.1"
        }
    },
    {
        pergunta: "São implementadas medidas de segurança da informação?",
        categoria: "Gestão de Riscos",
        frameworks: {
            cobit: "DSS05",
            itil: "Information Security Management",
            iso27001: "A.12.1"
        }
    },
    {
        pergunta: "Há cultura de compartilhamento de conhecimento e aprendizado contínuo em TI?",
        categoria: "Cultura de TI",
        frameworks: {
            cobit: "APO07",
            itil: "Continual Improvement",
            iso27001: "A.7.2"
        }
    },
    {
        pergunta: "A equipe de TI é incentivada a inovar e propor melhorias?",
        categoria: "Cultura de TI",
        frameworks: {
            cobit: "APO14",
            itil: "Continual Improvement",
            iso27001: "A.7.2"
        }
    }
];

const categoryWeights = {
    "Processos de TI": 1.4,
    "Uso de Ferramentas": 1.0,
    "Nível de Serviço": 1.2,
    "Alinhamento Estratégico": 1.1,
    "Governança de TI": 1.4,
    "Gestão de Riscos": 1.5,
    "Cultura de TI": 0.9
};

// Função para login simples
function login() {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    const perfil = document.getElementById('perfil').value;

    // Simulação de login (em produção, verificar com backend)
    if (usuario && senha) {
        // Se for user, o usuário é a empresa
        const empresa = perfil === 'user' ? usuario : null;
        salvarDados('usuarioLogado', { usuario, perfil, empresa, timestamp: new Date().getTime() });
        alert('Login realizado com sucesso!');
        window.location.href = 'index.html';
    } else {
        alert('Preencha todos os campos!');
    }
}

// Função para logout
function logout() {
    localStorage.removeItem('usuarioLogado');
    localStorage.removeItem('respostas');
    localStorage.removeItem('score');
    localStorage.removeItem('maxScore');
    localStorage.removeItem('nivel');
    alert('Logout realizado!');
    window.location.href = 'login.html';
}

// Função para verificar permissão de acesso
function verificarPermissao(paginaRequerida) {
    const usuario = carregarDados('usuarioLogado');
    if (!usuario) {
        window.location.href = 'login.html';
        return false;
    }
    
    // Páginas restritas para Admin
    const paginasAdmin = ['cadastro_empresa.html', 'cadastro_questoes.html'];
    
    if (paginasAdmin.includes(paginaRequerida) && usuario.perfil !== 'admin') {
        alert('Acesso negado! Apenas administradores podem acessar esta página.');
        window.location.href = 'index.html';
        return false;
    }
    return true;
}

// Função para mostrar/ocultar menus baseado em perfil
function atualizarMenus() {
    const usuario = carregarDados('usuarioLogado');
    if (!usuario) return;
    
    const btnCadastroEmpresa = document.querySelector('a[href="cadastro_empresa.html"]');
    const btnCadastroQuestoes = document.querySelector('a[href="cadastro_questoes.html"]');
    
    if (usuario.perfil !== 'admin') {
        if (btnCadastroEmpresa) btnCadastroEmpresa.style.display = 'none';
        if (btnCadastroQuestoes) btnCadastroQuestoes.style.display = 'none';
    }
    
    // Adicionar botão de logout no header
    const header = document.querySelector('header');
    if (header && !document.getElementById('btnLogout')) {
        const btnLogout = document.createElement('button');
        btnLogout.id = 'btnLogout';
        btnLogout.textContent = `Logout (${usuario.usuario})`;
        btnLogout.onclick = logout;
        btnLogout.style.cssText = 'background:red;color:white;border:none;padding:0.5rem 1rem;cursor:pointer;border-radius:4px;margin-left:1rem;';
        const nav = header.querySelector('nav');
        if (nav) nav.appendChild(btnLogout);
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
    } else {
        // Garantir que questões carregadas anteriormente recebam o mapeamento de frameworks
        questoes = questoes.map(questao => {
            const padrao = questoesPadrao.find(q => q.pergunta === questao.pergunta);
            return padrao ? { ...padrao, ...questao } : questao;
        });
        salvarDados('questoes', questoes);
    }
    
    const container = document.getElementById('questionario');
    container.innerHTML = '';

    questoes.forEach((questao, index) => {
        const peso = categoryWeights[questao.categoria] || 1;
        const div = document.createElement('div');
        div.innerHTML = `
            <p><strong>${questao.categoria}:</strong> ${questao.pergunta}</p>
            <p class="framework-mapping"><em>Frameworks:</em> COBIT: ${questao.frameworks?.cobit || 'N/A'}; ITIL: ${questao.frameworks?.itil || 'N/A'}; ISO 27001: ${questao.frameworks?.iso27001 || 'N/A'}</p>
            <p class="category-weight"><em>Peso da categoria:</em> ${peso}</p>
            <label><input type="radio" name="q${index}" value="ok" required onclick="togglePlano(${index}, false)"> OK</label>
            <label><input type="radio" name="q${index}" value="parcial" onclick="togglePlano(${index}, true)"> Parcial</label>
            <label><input type="radio" name="q${index}" value="nok" onclick="togglePlano(${index}, true)"> NOK</label>
            <textarea placeholder="Evidência (se OK)" id="evidencia${index}"></textarea>
            <textarea placeholder="Justificativa (se Parcial ou NOK)" id="plano${index}" style="display:none;"></textarea>
        `;
        container.appendChild(div);
    });
}

// Função para determinar nível baseado no score
function determinarNivel(score, maxScore) {
    const percentual = maxScore > 0 ? (score / maxScore) * 100 : 0;
    if (percentual <= 25) return 'Artesanal';
    else if (percentual <= 50) return 'Intermediário';
    else if (percentual <= 75) return 'Eficaz';
    else return 'Otimizado';
}

// Função para calcular score
function calcularScore() {
    const questoes = carregarDados('questoes') || [];
    const usuario = carregarDados('usuarioLogado');
    let score = 0;
    const respostas = {};

    questoes.forEach((questao, index) => {
        const resposta = document.querySelector(`input[name="q${index}"]:checked`);
        const evidencia = document.getElementById(`evidencia${index}`).value;
        const plano = document.getElementById(`plano${index}`).value;
        const peso = categoryWeights[questao.categoria] || 1;
        if (resposta) {
            respostas[questao.categoria] = respostas[questao.categoria] || { ok: 0, parcial: 0, nok: 0 };
            if (resposta.value === 'ok') {
                respostas[questao.categoria].ok++;
                score += 5 * peso;
            } else if (resposta.value === 'parcial') {
                respostas[questao.categoria].parcial++;
                score += 3 * peso;
            } else {
                respostas[questao.categoria].nok++;
                score += 0;
            }
            // Salvar evidência, justificativa e mapeamento de frameworks
            respostas[questao.categoria].detalhes = respostas[questao.categoria].detalhes || [];
            respostas[questao.categoria].detalhes.push({
                pergunta: questao.pergunta,
                resposta: resposta.value,
                evidencia,
                justificativa: plano,
                frameworks: questao.frameworks || null,
                peso
            });
        }
    });

    const maxScore = questoes.reduce((total, questao) => total + (5 * (categoryWeights[questao.categoria] || 1)), 0);
    const scorePercentual = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
    
    // Armazenar com ID único por empresa (user = empresa)
    const avaliacoes = carregarDados('avaliacoes') || [];
    const empresa = usuario.perfil === 'user' ? usuario.usuario : null;
    const idAvaliacao = `${empresa || usuario.usuario}_${new Date().getTime()}`;
    
    avaliacoes.push({
        id: idAvaliacao,
        empresa: empresa || usuario.usuario,
        usuario: usuario.usuario,
        perfil: usuario.perfil,
        score: scorePercentual,
        maxScore: 100,
        scoreBruto: score,
        maxScoreBruto: maxScore,
        respostas: respostas,
        timestamp: new Date().getTime()
    });
    
    salvarDados('avaliacoes', avaliacoes);
    salvarDados('score', scorePercentual);
    salvarDados('maxScore', 100);

    // Determinar nível
    const nivel = determinarNivel(scorePercentual, 100);

    salvarDados('nivel', nivel);
    window.location.href = 'relatorio.html';
}

// Função para inicializar relatório
function inicializarRelatorio() {
    const usuario = carregarDados('usuarioLogado');
    const avaliacoes = carregarDados('avaliacoes') || [];
    
    if (usuario.perfil === 'admin') {
        // Admin vê seletor de relatórios
        const select = document.getElementById('relatorioSelect');
        select.innerHTML = '<option value="">Selecione um relatório...</option>';
        avaliacoes.forEach((avaliacao, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = `${avaliacao.empresa} - ${new Date(avaliacao.timestamp).toLocaleString()}`;
            select.appendChild(option);
        });
        document.getElementById('selecaoRelatorio').style.display = 'block';
    } else {
        // Usuário vê diretamente seu relatório
        exibirRelatorio();
        document.getElementById('relatorioContent').style.display = 'block';
    }
}

// Função para carregar relatório selecionado
function carregarRelatorioSelecionado() {
    const select = document.getElementById('relatorioSelect');
    const index = select.value;
    if (index !== '') {
        const avaliacoes = carregarDados('avaliacoes') || [];
        exibirRelatorio(avaliacoes[index]);
        document.getElementById('selecaoRelatorio').style.display = 'none';
        document.getElementById('relatorioContent').style.display = 'block';
    }
}

// Função para exibir relatório
function exibirRelatorio(avaliacaoAtual = null) {
    const usuario = carregarDados('usuarioLogado');
    const avaliacoes = carregarDados('avaliacoes') || [];
    
    if (!avaliacaoAtual) {
        // Lógica padrão: última avaliação
        if (usuario.perfil === 'user') {
            // Usuário vê apenas suas próprias avaliações (última mais recente)
            avaliacaoAtual = avaliacoes.filter(a => a.usuario === usuario.usuario).pop();
        } else {
            // Admin vê a última avaliação armazenada (fallback)
            avaliacaoAtual = avaliacoes[avaliacoes.length - 1];
        }
    }
    
    if (!avaliacaoAtual) {
        document.getElementById('detalhes').innerHTML = '<p>Nenhuma avaliação encontrada.</p>';
        return;
    }

    const score = avaliacaoAtual.score || 0;
    const maxScore = avaliacaoAtual.maxScore || 100;
    const nivel = determinarNivel(score, maxScore);
    const respostas = avaliacaoAtual.respostas || {};
    const empresa = avaliacaoAtual.empresa || 'Sem identificação';

    // Exibir nome da empresa no topo
    document.getElementById('empresaRelatorio').textContent = `Questionário da Empresa: ${empresa}`;
    document.getElementById('scoreTotal').textContent = `${score}/${maxScore}`;
    document.getElementById('nivelMaturidade').textContent = nivel;

    const detalhes = document.getElementById('detalhes');
    detalhes.innerHTML = '';
    for (const categoria in respostas) {
        if (categoria === 'detalhes') continue;
        const peso = categoryWeights[categoria] || 1;
        const div = document.createElement('div');
        div.innerHTML = `<h3>${categoria} (Peso: ${peso})</h3><p>OK: ${respostas[categoria].ok}<br>Parcial: ${respostas[categoria].parcial}<br>NOK: ${respostas[categoria].nok}</p>`;
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
                        p.innerHTML = `<strong>[${d.resposta.toUpperCase()}] ${d.pergunta}</strong><br>Justificativa: ${d.justificativa || 'N/A'}<br>Evidência: ${d.evidencia || 'N/A'}<br><small>Mapeamento: COBIT: ${d.frameworks?.cobit || 'N/A'}; ITIL: ${d.frameworks?.itil || 'N/A'}; ISO 27001: ${d.frameworks?.iso27001 || 'N/A'}</small>`;
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

// ==================== GESTÃO DE INCIDENTES ====================

function mostrarFormularioIncidente() {
    document.getElementById('novoIncidente').style.display = 'block';
    document.getElementById('listaIncidentes').style.display = 'none';
}

function cancelarIncidente() {
    document.getElementById('formIncidente').reset();
    document.getElementById('novoIncidente').style.display = 'none';
    document.getElementById('listaIncidentes').style.display = 'block';
}

function salvarIncidente() {
    const titulo = document.getElementById('titulo').value;
    const descricao = document.getElementById('descricao').value;
    const prioridade = document.getElementById('prioridade').value;
    const categoria = document.getElementById('categoria').value;
    const status = document.getElementById('status').value;

    if (titulo && descricao && prioridade && categoria && status) {
        const incidentes = carregarDados('incidentes') || [];
        const usuario = carregarDados('usuarioLogado');

        const incidente = {
            id: `INC${Date.now()}`,
            titulo,
            descricao,
            prioridade,
            categoria,
            status,
            usuario: usuario.usuario,
            dataCriacao: new Date().toISOString(),
            dataAtualizacao: new Date().toISOString()
        };

        incidentes.push(incidente);
        salvarDados('incidentes', incidentes);

        alert('Incidente salvo com sucesso!');
        cancelarIncidente();
        carregarIncidentes();
    } else {
        alert('Preencha todos os campos obrigatórios!');
    }
}

function carregarIncidentes() {
    const incidentes = carregarDados('incidentes') || [];
    const container = document.getElementById('incidentesList');
    container.innerHTML = '';

    if (incidentes.length === 0) {
        container.innerHTML = '<p>Nenhum incidente registrado.</p>';
        return;
    }

    incidentes.forEach(incidente => {
        const div = document.createElement('div');
        div.className = 'incidente-item';
        div.innerHTML = `
            <h3>${incidente.id}: ${incidente.titulo}</h3>
            <p><strong>Status:</strong> ${incidente.status}</p>
            <p><strong>Prioridade:</strong> ${incidente.prioridade}</p>
            <p><strong>Categoria:</strong> ${incidente.categoria}</p>
            <p><strong>Descrição:</strong> ${incidente.descricao}</p>
            <p><strong>Criado por:</strong> ${incidente.usuario} em ${new Date(incidente.dataCriacao).toLocaleString()}</p>
        `;
        container.appendChild(div);
    });
}

// ==================== GESTÃO DE PROBLEMAS ====================

function mostrarFormularioProblema() {
    document.getElementById('novoProblema').style.display = 'block';
    document.getElementById('listaProblemas').style.display = 'none';
}

function cancelarProblema() {
    document.getElementById('formProblema').reset();
    document.getElementById('novoProblema').style.display = 'none';
    document.getElementById('listaProblemas').style.display = 'block';
}

function salvarProblema() {
    const titulo = document.getElementById('tituloProblema').value;
    const descricao = document.getElementById('descricaoProblema').value;
    const impacto = document.getElementById('impacto').value;
    const urgencia = document.getElementById('urgencia').value;
    const categoria = document.getElementById('categoriaProblema').value;
    const status = document.getElementById('statusProblema').value;
    const incidenteRelacionado = document.getElementById('incidenteRelacionado').value;

    if (titulo && descricao && impacto && urgencia && categoria && status) {
        const problemas = carregarDados('problemas') || [];
        const usuario = carregarDados('usuarioLogado');

        const problema = {
            id: `PRB${Date.now()}`,
            titulo,
            descricao,
            impacto,
            urgencia,
            categoria,
            status,
            incidenteRelacionado: incidenteRelacionado || null,
            usuario: usuario.usuario,
            dataCriacao: new Date().toISOString(),
            dataAtualizacao: new Date().toISOString()
        };

        problemas.push(problema);
        salvarDados('problemas', problemas);

        alert('Problema salvo com sucesso!');
        cancelarProblema();
        carregarProblemas();
    } else {
        alert('Preencha todos os campos obrigatórios!');
    }
}

function carregarProblemas() {
    const problemas = carregarDados('problemas') || [];
    const container = document.getElementById('problemasList');
    container.innerHTML = '';

    if (problemas.length === 0) {
        container.innerHTML = '<p>Nenhum problema registrado.</p>';
        return;
    }

    problemas.forEach(problema => {
        const div = document.createElement('div');
        div.className = 'problema-item';
        div.innerHTML = `
            <h3>${problema.id}: ${problema.titulo}</h3>
            <p><strong>Status:</strong> ${problema.status}</p>
            <p><strong>Impacto:</strong> ${problema.impacto} | <strong>Urgência:</strong> ${problema.urgencia}</p>
            <p><strong>Categoria:</strong> ${problema.categoria}</p>
            ${problema.incidenteRelacionado ? `<p><strong>Incidente Relacionado:</strong> ${problema.incidenteRelacionado}</p>` : ''}
            <p><strong>Descrição:</strong> ${problema.descricao}</p>
            <p><strong>Criado por:</strong> ${problema.usuario} em ${new Date(problema.dataCriacao).toLocaleString()}</p>
        `;
        container.appendChild(div);
    });
}

// ==================== GESTÃO DE MUDANÇAS ====================

function mostrarFormularioMudanca() {
    document.getElementById('novaMudanca').style.display = 'block';
    document.getElementById('listaMudancas').style.display = 'none';
}

function cancelarMudanca() {
    document.getElementById('formMudanca').reset();
    document.getElementById('novaMudanca').style.display = 'none';
    document.getElementById('listaMudancas').style.display = 'block';
}

function salvarMudanca() {
    const titulo = document.getElementById('tituloMudanca').value;
    const descricao = document.getElementById('descricaoMudanca').value;
    const tipo = document.getElementById('tipoMudanca').value;
    const categoria = document.getElementById('categoriaMudanca').value;
    const risco = document.getElementById('risco').value;
    const impacto = document.getElementById('impactoMudanca').value;
    const dataPlanejada = document.getElementById('dataPlanejada').value;
    const status = document.getElementById('statusMudanca').value;
    const aprovador = document.getElementById('aprovador').value;

    if (titulo && descricao && tipo && categoria && risco && impacto && dataPlanejada && status && aprovador) {
        const mudancas = carregarDados('mudancas') || [];
        const usuario = carregarDados('usuarioLogado');

        const mudanca = {
            id: `CHG${Date.now()}`,
            titulo,
            descricao,
            tipo,
            categoria,
            risco,
            impacto,
            dataPlanejada,
            status,
            aprovador,
            usuario: usuario.usuario,
            dataCriacao: new Date().toISOString(),
            dataAtualizacao: new Date().toISOString()
        };

        mudancas.push(mudanca);
        salvarDados('mudancas', mudancas);

        alert('Mudança salva com sucesso!');
        cancelarMudanca();
        carregarMudancas();
    } else {
        alert('Preencha todos os campos obrigatórios!');
    }
}

function carregarMudancas() {
    const mudancas = carregarDados('mudancas') || [];
    const container = document.getElementById('mudancasList');
    container.innerHTML = '';

    if (mudancas.length === 0) {
        container.innerHTML = '<p>Nenhuma mudança registrada.</p>';
        return;
    }

    mudancas.forEach(mudanca => {
        const div = document.createElement('div');
        div.className = 'mudanca-item';
        div.innerHTML = `
            <h3>${mudanca.id}: ${mudanca.titulo}</h3>
            <p><strong>Status:</strong> ${mudanca.status} | <strong>Tipo:</strong> ${mudanca.tipo}</p>
            <p><strong>Risco:</strong> ${mudanca.risco} | <strong>Impacto:</strong> ${mudanca.impacto}</p>
            <p><strong>Categoria:</strong> ${mudanca.categoria}</p>
            <p><strong>Data Planejada:</strong> ${new Date(mudanca.dataPlanejada).toLocaleString()}</p>
            <p><strong>Aprovador:</strong> ${mudanca.aprovador}</p>
            <p><strong>Descrição:</strong> ${mudanca.descricao}</p>
            <p><strong>Criado por:</strong> ${mudanca.usuario} em ${new Date(mudanca.dataCriacao).toLocaleString()}</p>
        `;
        container.appendChild(div);
    });
}

// ==================== CATÁLOGO DE SERVIÇOS ====================

function mostrarFormularioServico() {
    document.getElementById('novoServico').style.display = 'block';
    document.getElementById('listaServicos').style.display = 'none';
}

function cancelarServico() {
    document.getElementById('formServico').reset();
    document.getElementById('novoServico').style.display = 'none';
    document.getElementById('listaServicos').style.display = 'block';
}

function salvarServico() {
    const nome = document.getElementById('nomeServico').value;
    const descricao = document.getElementById('descricaoServico').value;
    const categoria = document.getElementById('categoriaServico').value;
    const nivel = document.getElementById('nivelServico').value;
    const disponibilidade = document.getElementById('disponibilidade').value;
    const tempoResposta = document.getElementById('tempoResposta').value;
    const custoMensal = document.getElementById('custoMensal').value;
    const status = document.getElementById('statusServico').value;
    const responsavel = document.getElementById('responsavel').value;

    if (nome && descricao && categoria && nivel && disponibilidade && tempoResposta && custoMensal && status && responsavel) {
        const servicos = carregarDados('servicos') || [];
        const usuario = carregarDados('usuarioLogado');

        const servico = {
            id: `SVC${Date.now()}`,
            nome,
            descricao,
            categoria,
            nivel,
            disponibilidade: parseFloat(disponibilidade),
            tempoResposta: parseFloat(tempoResposta),
            custoMensal: parseFloat(custoMensal),
            status,
            responsavel,
            usuario: usuario.usuario,
            dataCriacao: new Date().toISOString(),
            dataAtualizacao: new Date().toISOString()
        };

        servicos.push(servico);
        salvarDados('servicos', servicos);

        alert('Serviço salvo com sucesso!');
        cancelarServico();
        carregarServicos();
    } else {
        alert('Preencha todos os campos obrigatórios!');
    }
}

function carregarServicos() {
    const servicos = carregarDados('servicos') || [];
    const container = document.getElementById('servicosList');
    container.innerHTML = '';

    if (servicos.length === 0) {
        container.innerHTML = '<p>Nenhum serviço cadastrado.</p>';
        return;
    }

    servicos.forEach(servico => {
        const div = document.createElement('div');
        div.className = 'servico-item';
        div.innerHTML = `
            <h3>${servico.id}: ${servico.nome}</h3>
            <p><strong>Status:</strong> ${servico.status} | <strong>Nível:</strong> ${servico.nivel}</p>
            <p><strong>Categoria:</strong> ${servico.categoria}</p>
            <p><strong>Disponibilidade:</strong> ${servico.disponibilidade}% | <strong>Tempo de Resposta:</strong> ${servico.tempoResposta}h</p>
            <p><strong>Custo Mensal:</strong> R$ ${servico.custoMensal.toFixed(2)}</p>
            <p><strong>Responsável:</strong> ${servico.responsavel}</p>
            <p><strong>Descrição:</strong> ${servico.descricao}</p>
            <p><strong>Criado por:</strong> ${servico.usuario} em ${new Date(servico.dataCriacao).toLocaleString()}</p>
        `;
        container.appendChild(div);
    });
}

// ==================== DASHBOARD COM GRÁFICOS ====================

function carregarDashboard() {
    const usuario = carregarDados('usuarioLogado');
    const avaliacoes = carregarDados('avaliacoes') || [];

    if (usuario.perfil === 'admin') {
        // Admin vê todas as avaliações
        exibirDashboard(avaliacoes);
    } else {
        // Usuário vê apenas suas próprias avaliações
        const avaliacoesUsuario = avaliacoes.filter(a => a.usuario === usuario.usuario);
        exibirDashboard(avaliacoesUsuario);
    }
}

function exibirDashboard(avaliacoes) {
    if (avaliacoes.length === 0) {
        document.getElementById('insightsContent').innerHTML = '<p>Nenhuma avaliação encontrada. Realize uma avaliação primeiro.</p>';
        return;
    }

    // Última avaliação
    const ultimaAvaliacao = avaliacoes[avaliacoes.length - 1];
    const score = ultimaAvaliacao.score || 0;
    const nivel = determinarNivel(score, 100);

    // Métricas gerais
    document.getElementById('nivelAtual').textContent = nivel;
    document.getElementById('nivelAtual').className = `nivel-indicator nivel-${nivel.toLowerCase()}`;
    document.getElementById('scoreTotal').textContent = `${score}/100`;
    document.getElementById('totalAvaliacoes').textContent = avaliacoes.length;
    document.getElementById('ultimaAvaliacao').textContent = new Date(ultimaAvaliacao.timestamp).toLocaleDateString('pt-BR');

    // Criar gráficos
    criarGraficoCategoria(ultimaAvaliacao);
    criarGraficoStatus(ultimaAvaliacao);
    criarGraficoEvolucao(avaliacoes);
    criarGraficoPesos();

    // Gerar insights
    gerarInsights(ultimaAvaliacao);
}

function criarGraficoCategoria(avaliacao) {
    const ctx = document.getElementById('chartCategoria').getContext('2d');
    const respostas = avaliacao.respostas || {};

    const categorias = Object.keys(respostas).filter(cat => cat !== 'detalhes');
    const dadosOK = categorias.map(cat => respostas[cat].ok || 0);
    const dadosParcial = categorias.map(cat => respostas[cat].parcial || 0);
    const dadosNOK = categorias.map(cat => respostas[cat].nok || 0);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: categorias,
            datasets: [{
                label: 'OK',
                data: dadosOK,
                backgroundColor: 'rgba(40, 167, 69, 0.8)',
                borderColor: 'rgba(40, 167, 69, 1)',
                borderWidth: 1
            }, {
                label: 'Parcial',
                data: dadosParcial,
                backgroundColor: 'rgba(255, 193, 7, 0.8)',
                borderColor: 'rgba(255, 193, 7, 1)',
                borderWidth: 1
            }, {
                label: 'NOK',
                data: dadosNOK,
                backgroundColor: 'rgba(220, 53, 69, 0.8)',
                borderColor: 'rgba(220, 53, 69, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true,
                    beginAtZero: true
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Distribuição de Respostas por Categoria'
                }
            }
        }
    });
}

function criarGraficoStatus(avaliacao) {
    const ctx = document.getElementById('chartStatus').getContext('2d');
    const respostas = avaliacao.respostas || {};

    let totalOK = 0, totalParcial = 0, totalNOK = 0;
    for (const categoria in respostas) {
        if (categoria === 'detalhes') continue;
        totalOK += respostas[categoria].ok || 0;
        totalParcial += respostas[categoria].parcial || 0;
        totalNOK += respostas[categoria].nok || 0;
    }

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['OK', 'Parcial', 'NOK'],
            datasets: [{
                data: [totalOK, totalParcial, totalNOK],
                backgroundColor: [
                    'rgba(40, 167, 69, 0.8)',
                    'rgba(255, 193, 7, 0.8)',
                    'rgba(220, 53, 69, 0.8)'
                ],
                borderColor: [
                    'rgba(40, 167, 69, 1)',
                    'rgba(255, 193, 7, 1)',
                    'rgba(220, 53, 69, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Status Geral das Respostas'
                },
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function criarGraficoEvolucao(avaliacoes) {
    const ctx = document.getElementById('chartEvolucao').getContext('2d');

    // Ordenar avaliações por data
    const avaliacoesOrdenadas = avaliacoes.sort((a, b) => a.timestamp - b.timestamp);

    const labels = avaliacoesOrdenadas.map(a => new Date(a.timestamp).toLocaleDateString('pt-BR'));
    const scores = avaliacoesOrdenadas.map(a => a.score || 0);

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Score de Maturidade',
                data: scores,
                borderColor: 'rgba(0, 123, 255, 1)',
                backgroundColor: 'rgba(0, 123, 255, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Evolução da Maturidade ao Longo do Tempo'
                }
            }
        }
    });
}

function criarGraficoPesos() {
    const ctx = document.getElementById('chartPesos').getContext('2d');

    const categorias = Object.keys(categoryWeights);
    const pesos = categorias.map(cat => categoryWeights[cat]);

    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: categorias,
            datasets: [{
                label: 'Peso da Categoria',
                data: pesos,
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(153, 102, 255, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(153, 102, 255, 1)'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Importância das Categorias'
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 2
                }
            }
        }
    });
}

function gerarInsights(avaliacao) {
    const score = avaliacao.score || 0;
    const respostas = avaliacao.respostas || {};
    const insights = [];

    // Análise geral
    if (score >= 75) {
        insights.push('🏆 Excelente maturidade! A TI está bem posicionada e integrada aos objetivos do negócio.');
    } else if (score >= 50) {
        insights.push('📈 Boa maturidade. Há progresso significativo, mas ainda há oportunidades de melhoria.');
    } else if (score >= 25) {
        insights.push('⚠️ Maturidade intermediária. É necessário investir em processos e ferramentas.');
    } else {
        insights.push('🚨 Maturidade inicial. Priorize a implementação de processos básicos de TI.');
    }

    // Análise por categoria
    const categoriasCriticas = [];
    for (const categoria in respostas) {
        if (categoria === 'detalhes') continue;
        const total = (respostas[categoria].ok || 0) + (respostas[categoria].parcial || 0) + (respostas[categoria].nok || 0);
        const percentualOK = total > 0 ? ((respostas[categoria].ok || 0) / total) * 100 : 0;

        if (percentualOK < 50) {
            categoriasCriticas.push(categoria);
        }
    }

    if (categoriasCriticas.length > 0) {
        insights.push(`🎯 Foco necessário em: ${categoriasCriticas.join(', ')}`);
    }

    // Recomendações específicas
    if (respostas['Gestão de Riscos'] && respostas['Gestão de Riscos'].nok > 0) {
        insights.push('🛡️ Priorize a implementação de planos de continuidade e segurança da informação.');
    }

    if (respostas['Processos de TI'] && respostas['Processos de TI'].nok > 0) {
        insights.push('📋 Implemente processos documentados e frameworks como ITIL.');
    }

    if (respostas['Governança de TI'] && respostas['Governança de TI'].nok > 0) {
        insights.push('👥 Estabeleça um comitê de governança e políticas claras.');
    }

    const insightsHTML = insights.map(insight => `<div class="insight-item">${insight}</div>`).join('');
    document.getElementById('insightsContent').innerHTML = insightsHTML;
}

// Verificar se usuário está logado
function verificarLogin() {
    const usuario = carregarDados('usuarioLogado');
    if (!usuario) {
        window.location.href = 'login.html';
    } else {
        atualizarMenus();
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