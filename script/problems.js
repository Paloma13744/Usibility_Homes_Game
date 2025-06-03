const nielsenHeuristics = [
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
        description: 'O cliente efetuou uma compra no site, mas não encontrou o seu produto na aba de pedidos.\nQual heurística de usabilidade o site pode utilizar para evitar que esse erro ocorra novamente?',
        correctHeuristicId: '1', 
        options: [
            { id: '1', text: 'Visibilidade do Status do Sistema' },
            { id: '9', text: 'Ajuda os Usuários a Reconhecerem, Diagnosticar e Recuperar de Erros' },
            { id: '5', text: 'Prevenção de Erros' },
           
        ]
    },
    


    {
        company: 'e-commerce',
        problemImage: 'assets/problems/problema2_e-commerce.png', 
        description: 'Vendedor percebeu que houve uma queda nos acessos do site após a mudança \nno layout do site para uma proposta que o diferenciasse dos concorrentes.A falta de qual \nheurística pode ser a razão para essa queda?',
        correctHeuristicId: '4', 
        options: [
            { id: '4', text: 'Consistência e padronização' },
            { id: '1', text: 'Visibilidade do Status do Sistema' },
            { id: '7', text: 'Flexibilidade e Eficiência de Uso' },
           
        ]
    },

    {
        company: 'e-commerce',
        problemImage: 'assets/problems/problema3_e-commerce.png', 
        description: 'Cliente fez uma avaliação negativa do site informando que não consegue retirar \nos produtos do carrinho e se recusa a fazer uma compra com itens que ele já desistiu de comprar. ',
        correctHeuristicId: '3', 
        options: [
            { id: '3', text: 'Controle e Liberdade do Usuário' },
            { id: '5', text: 'Prevenção de Erros' },
            { id: '10', text: 'Ajuda e Documentação' },
           
        ]
    },


    {
        company: 'jogos',
        problemImage: 'assets/problems/problema1_jogo.png',
        description: 'A interface do jogo está tão cheia de informações, barras e botões que fica difícil focar no que realmente importa. \nQual heurística de usabilidade está sendo ignorada?',
        correctHeuristicId: '8', 
        options: [
            { id: '4', text: 'Consistência e padrões' },
            { id: '7', text: 'Flexibilidade e eficiência de uso '},
            { id: '8', text: 'Estética e design minimalista' },
            

            
        ]
    },


    {
        company: 'jogos',
        problemImage: 'assets/problems/problema2_jogo.png',
        description: 'O sistema de runas apresenta diversos símbolos, informações ocultas e opções que nem sempre estão claras para jogadores novos. \nQual princípio de usabilidade ajudaria a resolver esse problema?',
        correctHeuristicId: '6', 
        options: [
            { id: '6', text: 'Reconhecimento em vez de memorização ' },
            { id: '3', text: 'Controle e liberdade para o usuário '},
            { id: '8', text: 'Estética e design minimalista' },
            

            
        ]
    },


    {
        company: 'jogos',
        problemImage: 'assets/problems/problema3_jogo.png',
        description: 'Um jogador está tentando criar um circuito de Redstone, mas não há explicação no jogo sobre como ele funciona, como conectar, ou como usar os componentes. \nQual heurística de usabilidade está sendo quebrada aqui?',
        correctHeuristicId: '10', 
        options: [
            { id: '3', text: 'Controle e liberdade do usuário' },
            { id: '10', text: 'Ajuda e documentação'},
            { id: '8', text: 'Estética e design minimalista' },
            

            
        ]
    },



    {
        company: 'banco',
        problemImage: 'assets/problems/problema1_banco.png',
        description: 'Após tocar no botão“Enviar PIX”, a tela mostra apenas um círculo girando com a palavra Processando… por mais de 40 segundos.  \nNão há barra de progresso, porcentagem, estimativa de tempo nem confirmação parcial (como “Etiqueta de envio criada”).',
        correctHeuristicId: '1', 
        options: [
            { id: '1', text: 'Visibilidade do Status do Sistema' },
            { id: '2', text: 'Correspondência entre sistema e mundo real'},
            { id: '4', text: 'Consistência e padronização' },
            
        ]
    },


    {
        company: 'banco',
        problemImage: 'assets/problems/problema2_banco.png',
        description: 'Para acessar a conta, o aplicativo exige que o usuário digite manualmente o código da agência (ex.: 3414), sem fornecer um filtro de busca, lista suspensa ou sugestão automática para encontrar a agência correta. \nComo resultado, muitos usuários precisam sair do app para procurar essa informação em outro lugar, o que prejudica a experiência Qual heurística está sendo violada?',

        correctHeuristicId: '6', 
        options: [
            { id: '5', text: 'Prevenção de erros' },
            { id: '2', text: 'Correspondência entre sistema e mundo real' },
            { id: '6', text: 'Reconhecimento em vez de memorização' },

           
            
        ]
    },


    {
        company: 'banco',
        problemImage: 'assets/problems/problema3_banco.png',
        description: 'Na tela inicial há três botões: TED, DOC e PIX. \nNenhum deles traz rótulo descritivo ou ícone que explique as diferenças (prazo, horário, tarifa). Usuários novatos confundem as opções e escolhem a errada. \n Qual heurística está sendo violada?.',
        correctHeuristicId: '2', 
        options: [
            { id: '2', text: 'Correspondência entre sistema e mundo real'},
            { id: '8', text: 'Estética e design minimalista'},
            { id: '3', text: 'Controle e liberdade do usuário'},

            
            
        ]
    },



   

    {
        company: 'agencia',
        problemImage: 'https://via.placeholder.com/400x200/0000FF/FFFFFF?text=Icones+Confusos',
        description: `Usuários frequentes, como consultores que voam toda semana na mesma rota,
            são obrigados a percorrer sete telas idênticas em cada compra (origem/destino, datas, bagagem, documentos, faturamento etc.).
            O site não oferece:
            Botão “Repetir reserva anterior”;
            Perfis salvos de passageiro;
            Autopreenchimento de CPF ou programa de milhas;
            Atalhos de teclado (Tab/Enter) para avançar.
            Qual heurística está sendo violada?`,
        correctHeuristicId: '7',
        options: [
            { id: '1', text: 'Visibilidade do Status do Sistema' },
            { id: '7', text: 'Flexibilidade e Eficiência de Uso' },
            { id: '5', text: 'Prevenção de Erros' }
        ]
    },

    
    {
        company: 'agencia',
        problemImage: 'https://via.placeholder.com/400x200/0000FF/FFFFFF?text=Icones+Confusos',
        description: `Para finalizar o pagamento, o usuário deve digitar a senha de compra. Se ele errar,
        o botão Confirmar apenas fica cinza durante um segundo e retorna ao normal sem mensagem alguma;
        a tela não diz se houve falha nem o motivo.
        Qual heurística corrige esse problema?`,
        correctHeuristicId: '9',
        options: [
            { id: '1', text: 'Consistência e padronização' },
            { id: '7', text: 'Flexibilidade e Eficiência de Uso' },
            { id: '9', text: 'Ajuda os Usuários a Reconhecerem, Diagnosticar e Recuperar de Erros' },
            
        ]
    },

     
    {
        company: 'agencia',
        problemImage: 'https://via.placeholder.com/400x200/0000FF/FFFFFF?text=Icones+Confusos',
        description: `“Onde clico agora?”
        Busca de voos
        Interface segue o design-guide do banco de cores da marca: botão primário verde “Pesquisar” fixado na parte inferior da tela.
        Navegação principal em abas inferiores (Ínicio ✈ Minhas viagens 💳 Perfil).
        Página de resultados:
        O botão de ação vira azul e sobe para o canto superior direito com o texto “Selecionar” (sem ícone).
        A barra de navegação desaparece; para voltar o usuário depende de um pequeno “< Voltar”.
        Resumo da reserva
        O mesmo botão reaparece laranja, texto em inglês “Checkout”, agora posicionado no centro, logo acima do preço.
        Datas mudam de “10/07/2025” (dd/mm/aaaa) para “Jul 10, 2025” e a moeda troca de R$ 1.298,50 para USD 1,298.50.
        Pagamento
        A navegação retorna, mas no topo, com um ícone de hambúrguer ☰; o botão final é cinza “Finalizar” em maiúsculas.


        Usuários relatam que “parece trocar de app toda hora”, perdem o botão principal e abandonam a compra.
        Qual heurística de Nielsen resolveria melhor esse problema?
`,
        correctHeuristicId: '4',
        options: [
            { id: '4', text: 'Consistência e padronização' },
            { id: '5', text: 'Prevenção de Erros' },
            { id: '9', text: 'Ajuda os Usuários a Reconhecerem, Diagnosticar e Recuperar de Erros' },
      
            
        ]
    },


    {
        company: 'escola',
        problemImage: 'assets/problems/problema1_escola.png',
        description: 'Em um sistema acadêmico online, o aluno quer acessar suas matérias e conteúdos das aulas. No entanto, essa função está escondida sob o menu “Turmas Virtuais”, que não deixa claro o que contém. O aluno não entende que ali estão os links para suas disciplinas, e acaba tendo dificuldade para navegar. Qual heurística de Nielsen está sendo violada?',
        correctHeuristicId: '2', 
        options: [
            { id: '1', text: 'Visibilidade do estado do sistema' },
            { id: '2', text: 'Compatibilidade com o mundo real' },
            { id: '8', text: 'Estética e design minimalista' },

            
        ]
    },

    {
        company: 'escola',
        problemImage: 'assets/problems/problema2_escola.png',
        description: 'No sistema da escola, o aluno acessa a área de "Cursos Promovidos". No entanto, aparecem disciplinas de outros cursos, turmas antigas e matérias que não fazem parte do seu plano atual. Isso confunde e dificulta a navegação.',
        correctHeuristicId: '8', 
        options: [
            { id: '1', text: 'Visibilidade do estado do sistema' },
            { id: '3', text: 'Controle e liberdade do usuário' },
            { id: '8', text: 'Estética e design minimalista' },

           

            
        ]
    },



    {
        company: 'escola',
        problemImage: 'assets/problems/problema3_escola.png',
        description: 'Um estudante tenta se matricular online, mas o sistema exibe uma mensagem de erro: \n“Você está inapto para realizar a matrícula. Entre em contato com sua unidade escolar.”A mensagem não explica o motivo, nem oferece orientações para resolver o problema. \nQual heurística de Nielsen está sendo violada?',
        correctHeuristicId: '9', 
        options: [
            { id: '1', text: 'Visibilidade do estado do sistema' },
            { id: '9', text: 'Ajudar usuários a reconhecer, diagnosticar e recuperar-se de erros' },
            { id: '4', text: 'Consistência e padronização' },
            

            
        ]
    },


    {
        company: 'restaurante',
        problemImage: 'assets/problems/problema1_restaurante.png',
        description: 'No aplicativo de um restaurante,usuários enfrentam enfrentam dificuldades ao tentar inserir o endereço de entrega. \nAs mensagens de erro são confusas, e não há opção para revisar \nou editar facilmente as informações antes de concluir o pedido.\nQual heurística de usabilidade de Nielsen está sendo violada nesse cenário?',
        correctHeuristicId: '5',
        options: [
            { id: '5', text: 'Prevenção de erros' },
            { id: '8', text: 'Estética e Design Minimalista' },
            { id: '6', text: 'Reconhecimento em vez de memorização' },
            
        ]
    },


    
    {
        company: 'restaurante',
        problemImage: 'assets/problems/problema2_restaurante.png',
        description: 'Durante o pagamento em um app de restaurante, o usuário tenta inserir os dados do cartão, \nmas o teclado não aparece. \nNão há mensagem de erro, nem resposta do sistema, impedindo a conclusão da compra. \nQual heurística de usabilidade de Nielsen está sendo violada nesse caso?',

        correctHeuristicId: '1', 
        options: [
            { id: '4', text: 'Consistência e padronização' },
            { id: '1', text: 'Visibilidade do estado do sistema' },
            { id: '6', text: 'Reconhecimento em vez de memorização' },
           
        ]
    },


    
    {
        company: 'restaurante',
        problemImage: 'assets/problems/problema3_restaurante.png',
        description: 'O usuário tenta acessar a área do Clube  do restaurante no aplicativo, mas encontra uma tela vermelha com a mensagem "Oops, tivemos um probleminha". Como resultado, ele não consegue utilizar os benefícios do clube e perde pontos.\nQual heurística de usabilidade de Nielsen está sendo violada nesse caso?',
        correctHeuristicId: '1', 
        options: [
            { id: '1', text: 'Visibilidade do estado do sistema' },
            { id: '8', text: 'Estética e design minimalista' },
            { id: '6', text: 'Consistência e padronização' },

            
        ]
    },

    
    








];