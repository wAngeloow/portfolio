// Dados dos projetos (em ordem alfabética)
const projetos = [
    {
        nome: 'CORRENTE DO BEM',
        data: '2025',
        descricao: 'O site Corrente do Bem foi desenvolvido com HTML, CSS, Bootstrap e JavaScript, oferecendo uma plataforma responsiva e intuitiva. Ele permite que usuários escolham sua cidade e local de coleta, visualizem pontos de doação confiáveis e se candidatem como novos pontos de apoio. A plataforma também exibe informações detalhadas sobre cada local, incluindo nome, foto, descrição e mapa. Além disso, conta com uma seção "Sobre Nós", com a missão do projeto e links para os perfis dos participantes no LinkedIn. Tudo isso visa facilitar a conexão entre doadores e pessoas em situação de vulnerabilidade de forma prática e acessível.',
        img: 'img/projects/corrente-do-bem.png',
        site: 'https://wangeloow.github.io/corrente-do-bem/',
        github: 'https://github.com/wAngeloow/corrente-do-bem',
        figma: 'https://www.figma.com/design/69cArpoFCQ2nx38Iace7Cu/Atividade-de-Extens%C3%A3o?node-id=0-1&t=Ih7vfzNsaD64vBEK-1'
    },
    {
        nome: 'BARBEARIA',
        data: '2025',
        descricao: 'O site da barbearia fictícia foi desenvolvido com HTML, CSS, Bootstrap e JavaScript, focando em um design responsivo e dinâmico. Ele oferece funcionalidades como navegação rápida, agendamento de horários, exibição de serviços e informações sobre a equipe. O projeto também inclui uma localização interativa e links para redes sociais, facilitando a interação com os usuários e proporcionando uma experiência completa e fácil de navegar.',
        img: 'img/projects/barber.png',
        site: 'https://wangeloow.github.io/barber/',
        github: 'https://github.com/wAngeloow/barber',
        figma: 'https://www.figma.com/design/EZcTjcuZzG8A91zlI2lMSw/Barber?node-id=0-1'
    },
    {
        nome: 'LOJA DE CROCHÊ',
        data: '2025',
        descricao: 'Este projeto é um e-commerce de crochê, desenvolvido com HTML, CSS, Bootstrap e JavaScript. A plataforma tem um design responsivo e permite uma navegação dinâmica, com categorias de produtos que mudam conforme a seleção do usuário. A interface foi otimizada com Bootstrap para garantir que a experiência seja agradável em qualquer dispositivo. O e-commerce também oferece funcionalidades como um catálogo interativo, FAQ e contato direto via WhatsApp, além de uma página inicial com imagens das categorias.',
        img: 'img/projects/croche.png',
        site: 'https://wangeloow.github.io/croche/',
        github: 'https://github.com/wAngeloow/croche',
        figma: 'https://www.figma.com/design/0XdkV2OtfiKNn05tSNj51g/Croch%C3%AA?node-id=0-1'
    },
    {
        nome: 'POMODORO',
        data: '2025',
        descricao: 'Este projeto foi desenvolvido para ajudar as pessoas a manter o foco durante o dia. Utilizando HTML, CSS e JavaScript, ele apresenta um cronômetro interativo que exibe o tempo restante no título da página, permitindo que o usuário continue navegando enquanto acompanha o timer. A aplicação também oferece a personalização dos timers para atender às necessidades de cada usuário, e quando o tempo se esgota, um som é tocado para alertar. A simplicidade e eficiência do design tornam o projeto acessível em qualquer dispositivo.',
        img: 'img/projects/pomodoro.png',
        site: 'https://wangeloow.github.io/pomodoro/',
        github: 'https://github.com/wAngeloow/pomodoro',
        figma: 'https://www.figma.com/design/FvJBkMgB2Nhq7Ln6j4bxAr/Pomodoro?node-id=0-1&t=HYy57QZ0CV7XGG3f-0'
    },
    {
        nome: 'CRONÔMETRO',
        data: '2025',
        descricao: 'Este cronômetro interativo e responsivo foi desenvolvido com HTML, CSS e JavaScript. Ele permite que o usuário adicione marcas de tempo enquanto o cronômetro está funcionando e exibe um alerta caso o usuário tente adicionar uma marca com o cronômetro parado. O projeto também oferece a opção de resetar o cronômetro a qualquer momento, oferecendo uma experiência fluida e eficiente para o usuário.',
        img: 'img/projects/cronometro.png',
        site: 'https://wangeloow.github.io/cronometro/',
        github: 'https://github.com/wAngeloow/cronometro',
        figma: ''
    },
    {
        nome: 'TO DO LIST',
        data: '2024',
        descricao: 'A To Do List é uma plataforma onde o usuário pode adicionar, editar e remover tarefas de forma prática. Criado com HTML, CSS e JavaScript, o projeto usa o armazenamento local (localStorage) para garantir que os dados sejam preservados mesmo quando o navegador for fechado. A interface é simples e intuitiva, exibindo o número total de tarefas criadas e concluídas, permitindo uma organização eficiente das atividades diárias.',
        img: 'img/projects/to-do-list.png',
        site: 'https://wangeloow.github.io/to-do-list/',
        github: 'https://github.com/wAngeloow/to-do-list',
        figma: 'https://www.figma.com/design/jMLDmWsBFTw0Yfb9ynFH5b/Lista-de-Tarefas?t=IfaERMOApAPKQuCR-0'
    },
    {
        nome: 'BURGUERITO',
        data: '2024',
        descricao: 'Este é um site responsivo de uma hamburgueria fictícia, desenvolvido utilizando HTML, CSS e JavaScript. A interface foi projetada com o auxílio do TailwindCSS, garantindo um design moderno e responsivo. Além disso, o Node.js foi empregado para otimizar a estrutura e a interatividade do site. O projeto inclui funcionalidades como adicionar/remover itens do carrinho, limpar carrinho, preencher dados de pagamento, observações e endereço. O status de abertura da hamburgueria é exibido conforme o horário, e é possível visualizar imagens dos hambúrgueres em tamanho maior ao clicar nelas.',
        img: 'img/projects/burguerito.png',
        site: 'https://wangeloow.github.io/burguerito/',
        github: 'https://github.com/wAngeloow/burguerito',
        figma: ''
    },
    {
        nome: 'CALCULADORA DE IMC',
        data: '2024',
        descricao: 'A Calculadora de IMC foi projetada para fornecer uma maneira simples de calcular o Índice de Massa Corporal (IMC) do usuário. Usando HTML, CSS e JavaScript, o projeto permite que o usuário insira seu peso e altura para obter o resultado, que é classificado em categorias como "baixo peso", "peso normal", "sobrepeso" e "obesidade". A aplicação é fácil de usar e oferece uma solução prática para monitorar a saúde.',
        img: 'img/projects/calculadora-imc.png',
        site: 'https://wangeloow.github.io/calculadora-IMC/',
        github: 'https://github.com/wAngeloow/calculadora-IMC',
        figma: ''
    },
    {
        nome: 'GALLERY',
        data: '2024',
        descricao: 'A Galeria de Imagens é uma aplicação simples, mas eficiente, desenvolvida com HTML e CSS. Ela exibe uma coleção de imagens de heróis, sendo totalmente responsiva e adaptável a diferentes tamanhos de tela. O projeto proporciona uma experiência visual otimizada, permitindo que o usuário navegue pelas imagens de forma intuitiva e agradável, independentemente do dispositivo que esteja utilizando.',
        img: 'img/projects/gallery.png',
        site: 'https://wangeloow.github.io/gallery/',
        github: 'https://github.com/wAngeloow/gallery',
        figma: ''
    },
];