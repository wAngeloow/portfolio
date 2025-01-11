AOS.init({
    once: true,
});

// Obtém o botão de rolar para o topo
const scrollTopBtn = document.getElementById('scrollTopBtn');

// Exibe o botão quando a rolagem for para baixo
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.classList.add('show'); 
    } else {
        scrollTopBtn.classList.remove('show'); 
    }
};

// Quando o botão for clicado, rola para o topo
scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Função para abrir o modal e preencher as informações com base no projeto clicado
function abrirModal(projetoId) {
    const projetos = [
        {
            title: { pt: 'BURGUERITO' },
            description: { pt: 'Site responsivo de uma hamburgueria fictícia, com funcionalidades de adicionar/remover itens do carrinho, limpar carrinho, preencher dados de pagamento, observações e endereço. Exibe o status de abertura da hamburgueria conforme o horário e permite visualizar imagens interativas dos hambúrgueres em tamanho maior ao clicar nelas.' + '\n\n' + 'HTML, CSS, JavaScript, TailwindCSS, Node.js' },
            image: 'img/burguerito.png',
            deploy: 'https://wangeloow.github.io/burguerito/',
            github: 'https://github.com/wAngeloow/burguerito',
            figma: ''
        },
        {
            title: { pt: 'POMODORO' },
            description: { pt: 'Sistema baseado na técnica de estudo Pomodoro, que divide o tempo de estudo em intervalos de 25 minutos de foco seguidos por uma pausa de 5 minutos. O objetivo é otimizar a produtividade e manter o foco durante o estudo. O usuário também pode configurar o tempo das sessões de estudo, pausa e até mesmo o cronômetro para tarefas específicas, tudo ajustável a partir de um botão de configurações.' + '\n\n' + 'HTML, CSS, JavaScript' },
            image: 'img/pomodoro.png',
            deploy: '',
            github: '',
            figma: 'https://www.figma.com/design/FvJBkMgB2Nhq7Ln6j4bxAr/Pomodoro?node-id=0-1&t=nEA1dbmKlQE8A0jM-1'
        },
        {
            title: { pt: 'TO DO LIST' },
            description: { pt: 'Sistema de lista de tarefas onde o usuário pode adicionar, editar e remover tarefas com facilidade. A plataforma exibe um contador mostrando o número total de tarefas criadas e concluídas, além de armazenar as informações localmente no navegador (local storage), garantindo que o progresso seja preservado mesmo se a aba do navegador for fechada.' + '\n\n' + 'HTML, CSS, JavaScript' },
            image: 'img/to-do-list.png',
            deploy: 'https://wangeloow.github.io/to-do-list/',
            github: 'https://github.com/wAngeloow/to-do-list',
            figma: 'https://www.figma.com/design/jMLDmWsBFTw0Yfb9ynFH5b/Lista-de-Tarefas?t=nEA1dbmKlQE8A0jM-1'
        },
        {
            title: { pt: 'CALCULADORA DE IMC' },
            description: { pt: 'Ferramenta simples e prática para calcular o Índice de Massa Corporal (IMC). Com base no peso e altura do usuário, a calculadora informa se a pessoa está dentro do peso ideal, abaixo ou acima do peso, ajudando a monitorar a saúde de forma fácil e direta.' + '\n\n' + 'HTML, CSS, JavaScript' },
            image: 'img/calculadora-imc.png',
            deploy: 'https://wangeloow.github.io/calculadora-IMC/',
            github: 'https://github.com/wAngeloow/calculadora-IMC',
            figma: ''
        },
        {
            title: { pt: 'GALLERY' },
            description: { pt: 'Galeria de imagens responsiva que exibe uma coleção de heróis, com foco em personagens que o usuário aprecia. A galeria foi projetada para se adaptar a diferentes dispositivos, garantindo uma experiência visual otimizada em qualquer tamanho de tela.' + '\n\n' + 'HTML, CSS' },
            image: 'img/gallery.png',
            deploy: 'https://wangeloow.github.io/gallery/',
            github: 'https://github.com/wAngeloow/gallery',
            figma: ''
        },
    ];

    const projeto = projetos[projetoId];

    // Preencher os dados no modal
    document.getElementById('modal-title').innerText = projeto.title.pt;
    document.getElementById('modal-description').innerText = projeto.description.pt;
    document.getElementById('modal-img').src = projeto.image;

    // Definir os links
    const deployLink = document.getElementById('modal-deploy');
    const githubLink = document.getElementById('modal-github');
    const figmaLink = document.getElementById('modal-figma');

    // Limpar as classes "disabled" antes de redefinir os links
    deployLink.classList.remove('disabled');
    githubLink.classList.remove('disabled');
    figmaLink.classList.remove('disabled');

    // Definir hrefs dos links, adicionar classe disabled para links vazios
    deployLink.href = projeto.deploy || '#';
    githubLink.href = projeto.github || '#';
    figmaLink.href = projeto.figma || '#';

    // Se o link for vazio, adiciona a classe "disabled"
    if (!projeto.deploy) {
        deployLink.classList.add('disabled');
    }

    if (!projeto.github) {
        githubLink.classList.add('disabled');
    }

    if (!projeto.figma) {
        figmaLink.classList.add('disabled');
    }

    // Exibir o modal
    document.getElementById('modal').style.display = 'flex';
}

// Função para mostrar o Toastify
function showToast(message) {
    Toastify({
        text: message,
        duration: 3000,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
            background: "#ef4444",
            color: "#fff",
            borderRadius: "8px",
            padding: "10px",
            boxShadow: "none",
        },
    }).showToast();
}

// Adicionar evento de clique para todos os links do modal
document.querySelectorAll('#modal-deploy, #modal-github, #modal-figma').forEach(link => {
    link.addEventListener('click', function (event) {
        // Verifica se o link está desativado (classe "disabled")
        if (this.classList.contains('disabled')) {
            event.preventDefault();
            event.stopPropagation();

            // Mostra o Toastify com a mensagem
            const tipoLink = this.id.replace('modal-', '');
            showToast(`Este projeto não possui link de ${tipoLink}.`);
        }
    });
});

// Fechar o modal
function fecharModal() {
    document.getElementById('modal').style.display = 'none';
}

// Fechar modal quando clicar fora do bloco do modal
document.querySelector('.modal').addEventListener('click', function (event) {
    if (event.target === this) {
        fecharModal();
    }
});

// Adicionar evento de clique para o botão de fechar
document.querySelector('.btn-close').addEventListener('click', function () {
    fecharModal();
});

// Adicionar evento de clique para todas as imagens de projeto
document.querySelectorAll('.top-projetos img, .sessao-projetos .photo.project').forEach(img => {
    img.addEventListener('click', function () {
        const projetoId = this.getAttribute('data-id');
        abrirModal(projetoId);
    });
});

// Adicionar evento de clique para todas as divs dos projetos, não apenas nas imagens
document.querySelectorAll('.top-1, .top-2, .top-3').forEach(div => {
    div.addEventListener('click', function () {
        const projetoId = this.querySelector('img').getAttribute('data-id');
        abrirModal(projetoId);
    });
});
