const nielsenHeuristics = [  // Ids dos problemas respectivos
    { id: '1', name: 'Visibilidade do Status do Sistema' },
    { id: '2', name: 'Correspondência entre o Sistema e o Mundo Real' },
    { id: '3', name: 'Controle e Liberdade do Usuário' },
    { id: '4', name: 'Consistência e padronização' },
    { id: '5', name: 'Prevenção de Erros' },
    { id: '6', name: 'Reconhecimento em vez de memorização' },
    { id: '7', name: 'Flexibilidade e Eficiência de Uso' },
    { id: '8', name: 'Estética e Design Minimalista' },
    { id: '9', name: 'Ajuda os Usuários a Reconhecerem, Diagnosticar e Recuperar de Erros' },
    { id: '10', name: 'Ajuda e Documentação' }
];


// Problemas de Usabilidade
const usabilityProblems = [
    {
        company: 'e-commerce',
        problemImage: 'assets/problems/problema1_e-commerce.png',
        description: 'O cliente efetuou uma compra no site, mas não encontrou o seu produto na aba de pedidos. \nQual heurística de usabilidade o site pode utilizar para evitar que esse erro ocorra novamente?',
        correctHeuristicId: '1',
        id: 'e-commerce-1',
        options: [
            { id: '1', text: 'Visibilidade do Status do Sistema' },
            { id: '9', text: 'Ajuda os Usuários a Reconhecerem, Diagnosticar e Recuperar de Erros' },
            { id: '2', text: 'Correspondência entre o Sistema e o Mundo Real' },
        ],
        shownRecently: false
    },
    {
        company: 'e-commerce',
        problemImage: 'assets/problems/problema2_e-commerce.png',
        description: 'Vendedor percebeu que houve uma queda nos acessos do site após a mudança no layout do site para uma proposta que o diferenciasse dos concorrentes.\n A falta de qual heurística pode ser a razão para essa queda?',
        correctHeuristicId: '4',
        id: 'e-commerce-2',
        options: [
            { id: '4', text: 'Consistência e padronização' },
            { id: '1', text: 'Visibilidade do Status do Sistema' },
            { id: '7', text: 'Flexibilidade e Eficiência de Uso' },
        ],
        shownRecently: false
    },
    {
        company: 'e-commerce',
        problemImage: 'assets/problems/problema3_e-commerce.png',
        description: 'Cliente fez uma avaliação negativa do site informando que não consegue retirar os produtos do carrinho e se recusa a fazer uma compra com itens que ele já desistiu de comprar.\nQual heurística de usabilidade está sendo ignorada?',
        correctHeuristicId: '3',
          id: 'e-commerce-3',
        options: [
            { id: '3', text: 'Controle e Liberdade do Usuário' },
            { id: '5', text: 'Prevenção de Erros' },
            { id: '10', text: 'Ajuda e Documentação' },
        ],
        shownRecently: false
    },
    {
        company: 'jogos',
        problemImage: 'assets/problems/problema1_jogo.png',
        description: 'A interface do jogo está tão cheia de informações, barras e botões que fica difícil focar no que realmente importa.\n Qual heurística de usabilidade está sendo ignorada?',
        correctHeuristicId: '8',
        id: 'jogos-1',
        options: [
            { id: '4', text: 'Consistência e padrões' },
            { id: '7', text: 'Flexibilidade e eficiência de uso '},
            { id: '8', text: 'Estética e design minimalista' },
        ],
        shownRecently: false
    },
    {
        company: 'jogos',
        problemImage: 'assets/problems/problema2_jogo.png',
        description: 'O sistema de runas apresenta diversos símbolos, informações ocultas e opções que nem sempre estão claras para jogadores novos.\n Qual princípio de usabilidade ajudaria a resolver esse problema?',
        correctHeuristicId: '6',
        id: 'jogos-2',
        options: [
            { id: '6', text: 'Reconhecimento em vez de memorização ' },
            { id: '3', text: 'Controle e liberdade para o usuário '},
            { id: '8', text: 'Estética e design minimalista' },
        ],
        shownRecently: false
    },
    {
        company: 'jogos',
        problemImage: 'assets/problems/problema3_jogo.png',
        description: 'Antigamente, o jogo Minecraft exigia que os jogadores decorassem ou buscassem externamente as combinações de materiais necessárias para criar itens. A partir de uma atualização, foi introduzido um livro de receitas dentro do jogo que mostra quais itens podem ser criados e quais materiais são necessários, facilitando o processo de criação. Com base nisso, qual heurística de usabilidade foi aplicada ao adicionar esse recurso?',
        correctHeuristicId: '10',
        id: 'jogos-3',
        options: [
            { id: '3', text: 'Controle e liberdade do usuário' },
            { id: '10', text: 'Ajuda e documentação'},
            { id: '8', text: 'Estética e design minimalista' },
        ],
        shownRecently: false
    },
    {
        company: 'banco',
        problemImage: 'assets/problems/problema1_banco.png',
        description: 'Após tocar no botão “Enviar PIX”, a tela mostra apenas um círculo girando com a palavra Processando… por mais de 40 segundos. \nNão há barra de progresso, porcentagem, estimativa de tempo nem confirmação parcial (como “Etiqueta de envio criada”).\n Qual heurística está sendo violada?',
        correctHeuristicId: '1',
        id: 'banco-1',
        options: [
            { id: '1', text: 'Visibilidade do Status do Sistema' },
            { id: '2', text: 'Correspondência entre sistema e mundo real'},
            { id: '4', text: 'Consistência e padronização' },
        ],
        shownRecently: false
    },
    {
        company: 'banco',
        problemImage: 'assets/problems/problema2_banco.png',
        description: 'Para acessar a conta, o aplicativo exige que o usuário digite manualmente o código da agência (ex.: 3414), sem fornecer um filtro de busca, lista suspensa ou sugestão automática para encontrar a agência correta. \nComo resultado, muitos usuários precisam sair do app para procurar essa informação em outro lugar, o que prejudica a experiência. \nQual heurística está sendo violada?',
        correctHeuristicId: '6',
        id: 'banco-2',
        options: [
            { id: '5', text: 'Prevenção de erros' },
            { id: '2', text: 'Correspondência entre sistema e mundo real' },
            { id: '6', text: 'Reconhecimento em vez de memorização' },
        ],
        shownRecently: false
    },
    {
        company: 'banco',
        problemImage: 'assets/problems/problema3_banco.png',
        description: 'Na tela inicial há três botões: TED, DOC e PIX. Nenhum deles traz rótulo descritivo ou ícone que explique as diferenças (prazo, horário, tarifa). \nUsuários novatos confundem as opções e escolhem a errada. \nQual heurística está sendo violada?.',
        correctHeuristicId: '2',
        id: 'banco-3',
        options: [
            { id: '2', text: 'Correspondência entre sistema e mundo real'},
            { id: '8', text: 'Estética e design minimalista'},
            { id: '3', text: 'Controle e liberdade do usuário'},
        ],
        shownRecently: false
    },
    {
        company: 'agencia',
        problemImage: 'assets/problems/problema1_agencia.png', 
        description: ` Usuários frequentes precisam repetir todo o processo de compra a cada voo, preenchendo as mesmas informações em várias telas (origem, destino, datas, CPF etc.). \nO site não salva perfis, não tem preenchimento automático nem atalhos.
            Qual heurística está sendo violada?`,
        correctHeuristicId: '7',
         id: 'agencia-1',
        options: [
            { id: '1', text: 'Visibilidade do Status do Sistema' },
            { id: '7', text: 'Flexibilidade e Eficiência de Uso' },
            { id: '5', text: 'Prevenção de Erros' }
        ],
        shownRecently: false
    },
    {
        company: 'agencia',
        problemImage: 'assets/problems/problema2_agencia.png', 
        description: `Para finalizar o pagamento, o usuário deve digitar a senha de compra. Se ele errar,
            \no botão Confirmar apenas fica cinza durante um segundo e retorna ao normal sem mensagem alguma;
            a tela não diz se houve falha nem o motivo.
            \nQual heurística corrige esse problema?`,
        correctHeuristicId: '9',
       id: 'agencia-2',
        options: [
            { id: '1', text: 'Consistência e padronização' },
            { id: '7', text: 'Flexibilidade e Eficiência de Uso' },
            { id: '9', text: 'Ajuda os Usuários a Reconhecerem, Diagnosticar e Recuperar de Erros' },
        ],
        shownRecently: false
    },
    {
        company: 'agencia',
        problemImage: 'assets/problems/problema3_agencia.png',   // falta essa imagem
        description: `O botão principal muda de cor, posição, idioma e formato em cada etapa (verde “Pesquisar”, azul “Selecionar”, 
            laranja “Checkout”, cinza “FINALIZAR”).\n A navegação também muda ou desaparece, confundindo o usuário.
            Consequência: Parece que o app muda a cada tela. Usuários se perdem e desistem da compra.
            Qual heurística de Nielsen resolveria melhor esse problema?`,
        correctHeuristicId: '4',
        id: 'agencia-3',
        options: [
            { id: '4', text: 'Consistência e padronização' },
            { id: '5', text: 'Prevenção de Erros' },
            { id: '9', text: 'Ajuda os Usuários a Reconhecerem, Diagnosticar e Recuperar de Erros' },
        ],
        shownRecently: false
    },
    {
        company: 'escola',
        problemImage: 'assets/problems/problema1_escola.png',
        description: 'Em um sistema acadêmico online, o aluno quer acessar suas matérias e conteúdos das aulas.No entanto, essa função está escondida sob o menu “Turmas Virtuais”,\n que não deixa claro o que contém. O aluno não entende que ali estão os links para suas disciplinas, e acaba tendo dificuldade para navegar. \nQual heurística de Nielsen está sendo violada?',
        correctHeuristicId: '2',
        id: 'escola-1',
        options: [
            { id: '1', text: 'Visibilidade do estado do sistema' },
            { id: '2', text: 'Correspondência entre o Sistema e o Mundo Real' },
            { id: '8', text: 'Estética e design minimalista' },
        ],
        shownRecently: false
    },
    {
        company: 'escola',
        problemImage: 'assets/problems/problema2_escola.png',
        description: 'No sistema da escola, o aluno acessa a área de "Cursos Promovidos". No entanto, aparecem disciplinas de outros cursos, turmas antigas e matérias que não fazem parte do seu plano atual. \nIsso confunde e dificulta a navegação.\nQual heurística de Nielsen está sendo violada?',
        correctHeuristicId: '8',
        id: 'escola-2',
        options: [
            { id: '1', text: 'Visibilidade do estado do sistema' },
            { id: '3', text: 'Controle e liberdade do usuário' },
            { id: '8', text: 'Estética e design minimalista' },
        ],
        shownRecently: false
    },
    {
        company: 'escola',
        problemImage: 'assets/problems/problema3_escola.png',
        description: 'Um estudante tenta se matricular online, mas o sistema exibe uma mensagem de erro:\n “Você está inapto para realizar a matrícula. Entre em contato com sua unidade escolar.” \nA mensagem não explica o motivo, nem oferece orientações para resolver o problema. \nQual heurística de Nielsen está sendo violada?',
        correctHeuristicId: '9',
        id: 'escola-3',
        options: [
            { id: '1', text: 'Visibilidade do estado do sistema' },
            { id: '9', text: 'Ajudar usuários a reconhecer, diagnosticar e recuperar-se de erros' },
            { id: '4', text: 'Consistência e padronização' },
        ],
        shownRecently: false
    },
    {
        company: 'restaurante',
        problemImage: 'assets/problems/problema1_restaurante.png',
        description: 'No aplicativo de um restaurante, usuários enfrentam dificuldades ao tentar inserir o endereço de entrega. As mensagens de erro são confusas, e não há opção para revisar ou editar facilmente as informações antes de concluir o pedido. Qual heurística de usabilidade de Nielsen está sendo violada nesse cenário?',
        correctHeuristicId: '5',
        id: 'restaurante-1',
        options: [
            { id: '5', text: 'Prevenção de erros' },
            { id: '8', text: 'Estética e Design Minimalista' },
            { id: '6', text: 'Reconhecimento em vez de memorização' },
        ],
        shownRecently: false
    },
    {
        company: 'restaurante',
        problemImage: 'assets/problems/problema2_restaurante.png',
        description: 'Durante o pagamento em um app de restaurante, o usuário tenta inserir os dados do cartão, mas o teclado não aparece.\n Não há mensagem de erro, nem resposta do sistema, impedindo a conclusão da compra. \nQual heurística de usabilidade de Nielsen está sendo violada nesse caso?',
        correctHeuristicId: '1',
        id: 'restaurante-2',
        options: [
            { id: '4', text: 'Consistência e padronização' },
            { id: '1', text: 'Visibilidade do estado do sistema' },
            { id: '6', text: 'Reconhecimento em vez de memorização' },
        ],
        shownRecently: false
    },
    {
        company: 'restaurante',
        problemImage: 'assets/problems/problema3_restaurante.png',
        description: 'O usuário tenta acessar a área do Clube do restaurante no aplicativo, mas encontra uma tela vermelha com a mensagem \n"Oops, tivemos um probleminha". Como resultado, ele não consegue utilizar os benefícios do clube e perde pontos. \nQual heurística de usabilidade de Nielsen está sendo violada nesse caso?',
        correctHeuristicId: '1',
        id: 'restaurante-3',
        options: [
            { id: '1', text: 'Visibilidade do estado do sistema' },
            { id: '8', text: 'Estética e design minimalista' },
            { id: '6', text: 'Consistência e padronização' },
        ],
        shownRecently: false
    },
];