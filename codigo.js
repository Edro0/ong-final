/* ================================================= */
/* assets/js/scripts.js */
/* CÓDIGO JAVASCRIPT MODULAR (ENTREGA 3) */
/* ================================================= */

// ------------------------------------
// 1. DADOS (Simulando uma API ou Banco de Dados)
// ------------------------------------

const projetosData = [
    {
        id: 1,
        titulo: "Alfabetização Digital",
        descricao: "Cursos básicos de informática para idosos e comunidades carentes.",
        categoria: "Educação",
        meta: 5000,
        arrecadado: 3500,
        badgeClass: "badge--info",
        link: "#projeto-1"
    },
    {
        id: 2,
        titulo: "Saúde Comunitária",
        descricao: "Campanhas de vacinação e consultas básicas em áreas de difícil acesso.",
        categoria: "Saúde",
        meta: 10000,
        arrecadado: 8000,
        badgeClass: "badge--success",
        link: "#projeto-2"
    },
    {
        id: 3,
        titulo: "Voluntário na Cozinha",
        descricao: "Mobilização para produção de refeições para famílias em situação de rua.",
        categoria: "Alimentação",
        meta: 3000,
        arrecadado: 3000, // Completo
        badgeClass: "badge--warning",
        link: "#projeto-3"
    }
];


// ------------------------------------
// 2. SISTEMA DE TEMPLATES JS (Requisito)
// ------------------------------------

/**
 * Cria o template HTML para um card de projeto.
 * @param {Object} projeto - O objeto de dados do projeto.
 * @returns {string} O HTML formatado do card.
 */
function criarTemplateCardProjeto(projeto) {
    // Calcula a porcentagem para um possível indicador visual (uso futuro)
    const porcentagem = Math.round((projeto.arrecadado / projeto.meta) * 100);

    // Estrutura do Card (Utiliza as classes CSS da Entrega 2)
    return `
        <article class="card">
            <span class="badge ${projeto.badgeClass}">${projeto.categoria}</span>
            <h3 class="heading-3 card__title">${projeto.titulo}</h3>
            <p class="card__text">${projeto.descricao}</p>
            
            <div class="spacing-top-sm">
                <p class="text-sm">Meta: R$ ${projeto.meta.toLocaleString('pt-BR')}</p>
                <p class="text-sm">Arrecadado: R$ ${projeto.arrecadado.toLocaleString('pt-BR')}</p>
                <div style="height: 5px; background-color: #eee; border-radius: 2px; margin-top: 5px;">
                    <div style="width: ${porcentagem}%; height: 100%; background-color: var(--color-primary); border-radius: 2px;"></div>
                </div>
                <p class="text-sm">Progresso: ${porcentagem}%</p>
            </div>
            
            <a href="${projeto.link}" class="btn btn--secondary spacing-top-md">Ver Detalhes</a>
        </article>
    `;
}


// ------------------------------------
// 3. MANIPULAÇÃO DO DOM E INJEÇÃO DE CONTEÚDO
// ------------------------------------

/**
 * Renderiza todos os projetos no contêiner HTML.
 */
function renderizarProjetos() {
    const container = document.getElementById('projetos-container');
    
    // Verifica se o contêiner existe (útil para código modular em várias páginas)
    if (!container) {
        console.error("O contêiner #projetos-container não foi encontrado.");
        return;
    }

    // Mapeia os dados para templates e os une em uma única string
    const htmlProjetos = projetosData.map(projeto => {
        return criarTemplateCardProjeto(projeto);
    }).join(''); // O .join('') é crucial para juntar todos os templates em um HTML só

    // Injeta o HTML gerado no DOM
    container.innerHTML = htmlProjetos;
}


// ------------------------------------
// 4. INICIALIZAÇÃO
// ------------------------------------

// Garante que a função de renderização só seja chamada quando o DOM estiver pronto.
document.addEventListener('DOMContentLoaded', () => {
    // Chamada principal para renderizar os cards na página de Projetos
    if (document.getElementById('projetos-container')) {
        renderizarProjetos();
    }
    
    // Outras funcionalidades do projeto (como SPA ou verificação de formulário) 
    // seriam chamadas aqui.
    // inicializarSPA();
    // bindValidacaoFormulario();
});