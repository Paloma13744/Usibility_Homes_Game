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
        company: 'banco',
        problemImage: 'https://via.placeholder.com/400x200/00FF00/000000?text=Bot%C3%A3o+Invis%C3%ADvel',
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
        problemImage: 'https://via.placeholder.com/400x200/00FF00/000000?text=Bot%C3%A3o+Invis%C3%ADvel',
        description: 'Para adicionar um novo destinatário, o app exige que o cliente digite o código numérico de quatro dígitos da agência (ex.: 3414),\n sem campo de busca pelo nome do banco nem lista suspensa. \nMuitos usuários fecham o app para procurar a informação em outro lugar.\n Qual heurística está sendo violada?',

        correctHeuristicId: '5', 
        options: [
            { id: '5', text: 'Prevenção de erros' },
            { id: '2', text: 'Correspondência entre sistema e mundo real' },
            { id: '6', text: 'Reconhecimento em vez de memorização' },

           
            
        ]
    },


    {
        company: 'banco',
        problemImage: 'https://via.placeholder.com/400x200/00FF00/000000?text=Bot%C3%A3o+Invis%C3%ADvel',
        description: 'Na tela inicial há três botões: TED, DOC e PIX. \nNenhum deles traz rótulo descritivo ou ícone que explique as diferenças (prazo, horário, tarifa). Usuários novatos confundem as opções e escolhem a errada. \n Qual heurística está sendo violada?.',
        correctHeuristicId: '2', 
        options: [
            { id: '2', text: 'Correspondência entre sistema e mundo real'},
            { id: '8', text: 'Estética e design minimalista'},
            { id: '3', text: 'Controle e liberdade do usuário'},

            
            
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









 









];