const nielsenHeuristics = [
    { id: '1', name: 'Visibilidade do Status do Sistema' },
    { id: '2', name: 'Correspondência entre o Sistema e o Mundo Real' },
    { id: '3', name: 'Controle e Liberdade do Usuário' },
    { id: '4', name: 'Consistência e Padrões' },
    { id: '5', name: 'Prevenção de Erros' },
    { id: '6', name: 'Reconhecimento em vez de Recordação' },
    { id: '7', name: 'Flexibilidade e Eficiência de Uso' },
    { id: '8', name: 'Estética e Design Minimalista' },
    { id: '9', name: 'Ajuda os Usuários a Reconhecerem, Diagnosticar e Recuperar de Erros' },
    { id: '10', name: 'Ajuda e Documentação' }
];

// Problemas de Usabilidade
const usabilityProblems = [
    {
        company: 'Empresa de E-commerce',
        problemImage: 'https://via.placeholder.com/400x200/FF0000/FFFFFF?text=Erro+404', // imagem de problema
        description: 'Ao clicar em um produto, o usuário é redirecionado para uma página de "Erro 404 - Página não encontrada". Não há informação sobre o que aconteceu.',
        correctHeuristicId: '9', // Ajuda os Usuários a Reconhecerem, Diagnosticar e Recuperar de Erros
        options: [
            { id: '1', text: 'Visibilidade do Status do Sistema' },
            { id: '9', text: 'Ajuda os Usuários a Reconhecerem, Diagnosticar e Recuperar de Erros' },
            { id: '5', text: 'Prevenção de Erros' },
            { id: '4', text: 'Consistência e Padrões' }
        ]
    },
    {
        company: 'Sistema Bancário Online',
        problemImage: 'https://via.placeholder.com/400x200/00FF00/000000?text=Bot%C3%A3o+Invis%C3%ADvel',
        description: 'O botão "Confirmar Transação" só aparece depois que o mouse passa por uma área específica da tela, sem nenhum aviso visual.',
        correctHeuristicId: '1', // Visibilidade do Status do Sistema
        options: [
            { id: '1', text: 'Visibilidade do Status do Sistema' },
            { id: '6', text: 'Reconhecimento em vez de Recordação' },
            { id: '8', text: 'Estética e Design Minimalista' },
            { id: '3', text: 'Controle e Liberdade do Usuário' }
        ]
    },
    {
        company: 'Aplicativo de Delivery',
        problemImage: 'https://via.placeholder.com/400x200/0000FF/FFFFFF?text=Icones+Confusos',
        description: 'Os ícones do menu principal são completamente abstratos e não correspondem a nenhuma função conhecida, dificultando a navegação.',
        correctHeuristicId: '2', // Correspondência entre o Sistema e o Mundo Real
        options: [
            { id: '2', text: 'Correspondência entre o Sistema e o Mundo Real' },
            { id: '4', text: 'Consistência e Padrões' },
            { id: '7', text: 'Flexibilidade e Eficiência de Uso' },
            { id: '10', text: 'Ajuda e Documentação' }
        ]
    },
    {
        company: 'Software de Edição de Imagens',
        problemImage: 'https://via.placeholder.com/400x200/FFFF00/000000?text=Sem+Desfazer',
        description: 'Não há uma opção de "Desfazer" para ações realizadas, forçando o usuário a refazer todo o trabalho se cometer um erro.',
        correctHeuristicId: '3', // Controle e Liberdade do Usuário
        options: [
            { id: '5', text: 'Prevenção de Erros' },
            { id: '3', text: 'Controle e Liberdade do Usuário' },
            { id: '9', text: 'Ajuda os Usuários a Reconhecerem, Diagnosticar e Recuperar de Erros' },
            { id: '1', text: 'Visibilidade do Status do Sistema' }
        ]
    },
    {
        company: 'Rede Social',
        problemImage: 'https://via.placeholder.com/400x200/FF00FF/FFFFFF?text=Bot%C3%B5es+Diferentes',
        description: 'O botão de "Curtir" muda de cor e posição aleatoriamente em diferentes posts, causando confusão.',
        correctHeuristicId: '4', // Consistência e Padrões
        options: [
            { id: '2', text: 'Correspondência entre o Sistema e o Mundo Real' },
            { id: '4', text: 'Consistência e Padrões' },
            { id: '6', text: 'Reconhecimento em vez de Recordação' },
            { id: '8', text: 'Estética e Design Minimalista' }
        ]
    },
    {
        company: 'Formulário de Cadastro',
        problemImage: 'https://via.placeholder.com/400x200/00FFFF/000000?text=Campos+Sem+Valida%C3%A7%C3%A3o',
        description: 'Ao preencher um formulário, o usuário só descobre que um campo obrigatório está vazio após tentar enviar, sem nenhuma validação em tempo real.',
        correctHeuristicId: '5', // Prevenção de Erros
        options: [
            { id: '5', text: 'Prevenção de Erros' },
            { id: '9', text: 'Ajuda os Usuários a Reconhecerem, Diagnosticar e Recuperar de Erros' },
            { id: '1', text: 'Visibilidade do Status do Sistema' },
            { id: '3', text: 'Controle e Liberdade do Usuário' }
        ]
    }
];