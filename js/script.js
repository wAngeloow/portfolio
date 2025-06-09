document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
});

document.addEventListener('DOMContentLoaded', function() {
    // Pegar todos os elementos de imagem com a classe 'zoom-img'
    const imagens = document.querySelectorAll('.zoom-img');

    // Pegar o modal e a imagem dentro dele
    const modal = document.querySelector('.modal-zoom');
    const modalImg = document.querySelector('.modal-img');
    const closeBtn = document.querySelector('.close-zoom');

    // Função para abrir o modal e exibir a imagem com zoom
    imagens.forEach(imagem => {
        imagem.addEventListener('click', function() {
            const src = imagem.getAttribute('src');
            modalImg.setAttribute('src', src);
            modal.style.display = 'flex'; 
        });
    });

    // Função para fechar o modal ao clicar fora da imagem
    modal.addEventListener('click', function(e) {
        if (e.target === modal || e.target === closeBtn) { 
            modal.style.display = 'none';
        }
    });
});

// Função para criar os cards de projetos
function criarCardsProjetos(limit) {
    const container = document.getElementById('projetos');

    // Limpar o conteúdo antes de adicionar novos projetos
    container.innerHTML = '';

    // Limitar os projetos exibidos, se houver um limite especificado
    const projetosParaExibir = limit ? projetos.slice(0, limit) : projetos;

    // Iterar sobre os projetos e gerar os cards
    projetosParaExibir.forEach(projeto => {
        // Criar a estrutura do card
        const card = document.createElement('div');
        card.classList.add('card-projeto', 'd-flex', 'flex-column', 'align-items-center', 'justify-content-center');

        // Criar a imagem do projeto
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container', 'mt-4');
        const img = document.createElement('img');
        img.classList.add('img-projeto', 'zoom-img', 'hover-img');
        img.src = projeto.img;
        img.alt = projeto.nome;
        imgContainer.appendChild(img);

        // Criar a mensagem de hover (Clique para dar zoom)
        const zoomMessage = document.createElement('div');
        zoomMessage.classList.add('zoom-message');
        zoomMessage.textContent = "Clique aqui para dar zoom";
        imgContainer.appendChild(zoomMessage);

        // Criar as informações do projeto
        const infoDiv = document.createElement('div');
        infoDiv.classList.add('w-100', 'd-flex', 'justify-content-between', 'mt-2');
        
        const infoTextDiv = document.createElement('div');
        infoTextDiv.classList.add('ms-4');
        const nomeProjeto = document.createElement('h2');
        nomeProjeto.classList.add('nome-projeto');
        nomeProjeto.textContent = projeto.nome;
        const dataProjeto = document.createElement('p');
        dataProjeto.classList.add('data-projeto');
        dataProjeto.textContent = projeto.data;
        infoTextDiv.appendChild(nomeProjeto);
        infoTextDiv.appendChild(dataProjeto);

        // Criar os links para o GitHub, Figma e Site
        const linksDiv = document.createElement('div');
        linksDiv.classList.add('d-flex', 'align-items-center', 'me-4');
        const iconLink = document.createElement('i');
        iconLink.classList.add('fa-solid', 'fa-plus', 'fs-3');
        iconLink.title = projeto.nome;
        iconLink.setAttribute('data-bs-toggle', 'popover');
        iconLink.setAttribute('data-bs-content',  
            `<p class='desc'>
                ${projeto.descricao}
            </p>
            <div class='modal-info d-flex gap-2'>
                <a href='${projeto.site}' title='Visualizar site' class='${!projeto.site ? 'disabled' : ''}' target='${projeto.site ? '_blank' : ''}'>
                    <i class='fa-solid fa-eye'></i> Acessar site
                </a>
                <a href='${projeto.github}' title='Diretório do código' class='${!projeto.github ? 'disabled' : ''}' target='${projeto.github ? '_blank' : ''}'>
                    <i class='fa-brands fa-github'></i> GitHub
                </a>
                <a href='${projeto.figma}' title='Design do site' class='${!projeto.figma ? 'disabled' : ''}' target='${projeto.figma ? '_blank' : ''}'>
                    <i class='fa-brands fa-figma'></i> Figma
                </a>
            </div>`
        );
        iconLink.setAttribute('data-bs-html', 'true');
        iconLink.setAttribute('data-bs-placement', 'top');

        linksDiv.appendChild(iconLink);
        
        // Adicionar as divs de conteúdo ao card
        card.appendChild(imgContainer);
        card.appendChild(infoDiv);
        infoDiv.appendChild(infoTextDiv);
        infoDiv.appendChild(linksDiv);

        // Adicionar o card à seção de projetos
        container.appendChild(card);

        // Habilitar o zoom na imagem ao clicar
        img.addEventListener('click', () => {
            const modal = document.querySelector('.modal-zoom');
            const modalImg = document.querySelector('.modal-img');
            modal.style.display = 'flex';
            modalImg.src = projeto.img;

            const closeZoom = document.querySelector('.close-zoom');
            closeZoom.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        });
    });

    // Inicializar os popovers do Bootstrap (necessário após adicionar os elementos dinamicamente)
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    popoverTriggerList.forEach(popoverTriggerEl => {
        new bootstrap.Popover(popoverTriggerEl);
    });
}

// Verificar se estamos na página index.html ou projects.html
if (window.location.pathname === '/portfolio/' || window.location.pathname.endsWith('/index.html')) {
    // Se for o index.html, mostrar apenas os 6 primeiros projetos
    document.addEventListener('DOMContentLoaded', () => criarCardsProjetos(6));
} else if (window.location.pathname.includes('projects.html')) {
    // Se for a projects.html, mostrar todos os projetos
    document.addEventListener('DOMContentLoaded', () => criarCardsProjetos());
}
