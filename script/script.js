document.addEventListener('DOMContentLoaded', () => {
    // Piece Buttons
    const RoscBtn = document.querySelector('#Rosc');
    const ParafBtn = document.querySelector('#paraf');
    const EngreBtn = document.querySelector('#engre');
    const valvulaBtn = document.querySelector('#valvula');

    // Not found text
    const notFoundText = document.querySelector('.notFound');

    // Piece Information Window Elements
    const pieceWindow = document.querySelector('.pieceWindow');
    const closePieceBtn = document.querySelector('#closePieceWindow');
    const pieceModel = document.querySelector('.model3D');
    const nameOfPiece = document.querySelector('#nameOfPiece');
    const PieceIsoCode = document.querySelector('#PieceIsoCode');
    const pieceInformationDesc = document.querySelector('#pieceInformationDesc');
    const pieceCloseBtn = document.querySelector('#closePieceWindow');

    // Search elements
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    const itemContainers = document.querySelectorAll('.item-container');

    function buscarPecas() {
        const termoBusca = searchInput.value.toLowerCase().trim();

        itemContainers.forEach(container => {
            const nomePeca = container.querySelector('h1').textContent.toLowerCase();
            const codigoISO = container.querySelector('p').textContent.toLowerCase();

            if (nomePeca.includes(termoBusca) || codigoISO.includes(termoBusca)) {
                container.style.display = 'flex';
            } else {
                container.style.display = 'none'; 
                notFoundText.style.display = 'block';
            }
        });
    }

    searchBtn.addEventListener('click', buscarPecas);

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            buscarPecas();
        }
    });

    RoscBtn.addEventListener('click', () => {
        pieceModel.style.display = 'block';
        pieceModel.src = 'modelos/rosca.glb';
        pieceModel.setAttribute('auto-rotate', 'true');
        pieceModel.setAttribute('camera-controls', 'true');
        nameOfPiece.textContent = 'Rosca';
        PieceIsoCode.textContent = 'ISO 68-1';
        pieceInformationDesc.textContent = 'A rosca é um elemento de fixação utilizado para unir componentes mecânicos, permitindo desmontagem e montagem repetidas.';
        pieceWindow.style.animation = 'show 0.5s ease-in-out forwards';
    });

    ParafBtn.addEventListener('click', () => {
        pieceModel.style.display = 'block';
        pieceModel.src = 'modelos/parafusos.glb';
        pieceModel.setAttribute('auto-rotate', 'true');
        pieceModel.setAttribute('camera-controls', 'true');
        nameOfPiece.textContent = 'Parafuso';
        PieceIsoCode.textContent = 'ISO 4014';
        pieceInformationDesc.textContent = 'O parafuso é um elemento de fixação que utiliza uma rosca externa para unir peças, sendo amplamente utilizado em diversas aplicações mecânicas.';
        pieceWindow.style.animation = 'show 0.5s ease-in-out forwards';
    });

    EngreBtn.addEventListener('click', () => {
        pieceModel.style.display = 'block';
        pieceModel.src = 'modelos/engrenagem.glb';
        pieceModel.setAttribute('auto-rotate', 'true');
        pieceModel.setAttribute('camera-controls', 'true');
        nameOfPiece.textContent = 'Engrenagem';
        PieceIsoCode.textContent = 'ISO 1328';
        pieceInformationDesc.textContent = 'A engrenagem é um componente mecânico que transmite movimento e força entre eixos através do contato de seus dentes.';
        pieceWindow.style.animation = 'show 0.5s ease-in-out forwards';
    });

    valvulaBtn.addEventListener('click', () => {
        pieceModel.style.display = 'block';
        pieceModel.src = 'modelos/valvula.glb';
        pieceModel.setAttribute('auto-rotate', 'true');
        pieceModel.setAttribute('camera-controls', 'true');
        nameOfPiece.textContent = 'Válvula';
        PieceIsoCode.textContent = 'ISO 5996';
        pieceInformationDesc.textContent = 'A válvula é um dispositivo utilizado para controlar o fluxo de fluidos em sistemas hidráulicos e pneumáticos.';
        pieceWindow.style.animation = 'show 0.5s ease-in-out forwards';
    });

    pieceCloseBtn.addEventListener('click', () => {
        pieceModel.style.display = 'none';
        pieceWindow.style.animation = 'unshow 0.5s ease-in-out forwards';
        pieceModel.src = '';
        pieceModel.removeAttribute('auto-rotate');
        pieceModel.removeAttribute('camera-controls');
    });
});