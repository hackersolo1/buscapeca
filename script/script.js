const PIECEINFO = {
    rosca: {
        name: 'Rosca',
        iso_code: 'ISO 68-1',
        desc: 'A rosca é um elemento de fixação utilizado para unir componentes mecânicos, permitindo desmontagem e montagem repetidas. Medidas: 10mm × 1.5mm',
        glb_path: 'modelos/rosca.glb',
    },
    parafuso: {
        name: 'Parafuso',
        iso_code: 'ISO 4014',
        desc: 'O parafuso é um elemento de fixação que utiliza uma rosca externa para unir peças, sendo amplamente utilizado em diversas aplicações mecânicas. Medidas: 12mm × 50mm',
        glb_path: 'modelos/parafusos.glb',
    },
    engrenagem: {
        name: 'Engrenagem',
        iso_code: 'ISO 1328',
        desc: 'A engrenagem é um componente mecânico que transmite movimento e força entre eixos através do contato de seus dentes. Medidas: 80mm × 20mm',
        glb_path: 'modelos/engrenagem.glb',
    },
    valvula: {
        name: 'Válvula de Gaveta',
        iso_code: 'ISO 5996',
        desc: 'A válvula de gaveta é um dispositivo utilizado para controlar o fluxo de fluidos em sistemas hidráulicos e pneumáticos. Medidas: 150mm × 250mm',
        glb_path: 'modelos/valvula.glb',
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const pieceWindow = document.querySelector('.pieceWindow');
    const pieceModel = document.querySelector('#pieceModelViewer');
    const searchInput = document.querySelector('.search-input');
    const itemContainers = document.querySelectorAll('.item-container');
    const autoRotateBtn = document.querySelector('#autoRotate');

    // Event Listeners para os botões das peças
    document.querySelector('#Rosc').addEventListener('click', () => {
        showPieceDetails('rosca');
    });

    document.querySelector('#paraf').addEventListener('click', () => {
        showPieceDetails('parafuso');
    });

    document.querySelector('#engre').addEventListener('click', () => {
        showPieceDetails('engrenagem');
    });

    document.querySelector('#valvula').addEventListener('click', () => {
        showPieceDetails('valvula');
    });

    // Event Listener para fechar a janela
    document.querySelector('#closePieceWindow').addEventListener('click', () => {
        reset();
        pieceWindow.style.animation = 'unshow 0.3s ease-in-out forwards';
    });

    // Funcionalidade de busca
    searchInput.addEventListener('input', () => {
        const inputValue = searchInput.value.toLowerCase();
        itemContainers.forEach(item => {
            if (item.textContent.toLowerCase().includes(inputValue)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });

    // Auto rotação
    autoRotateBtn.addEventListener('click', () => {
        if (pieceModel.hasAttribute('auto-rotate')) {
            pieceModel.removeAttribute('auto-rotate');
            autoRotateBtn.textContent = 'Iniciar auto rotação';
        } else {
            pieceModel.setAttribute('auto-rotate', '');
            autoRotateBtn.textContent = 'Parar auto rotação';
        }
    });

    function showPieceDetails(pieceKey) {
        const piece = PIECEINFO[pieceKey];
        
        // Atualiza as informações na tela
        document.querySelector('#nameOfPiece').textContent = piece.name;
        document.querySelector('#PieceIsoCode').innerText = piece.iso_code;
        document.querySelector('#pieceInformationDesc').innerText = piece.desc;
        pieceModel.src = piece.glb_path;
        pieceModel.style.display = 'block';

        // Mostra a janela modal
        setTimeout(() => {
            pieceWindow.style.animation = 'show 0.3s ease-in-out forwards';
        }, 100);
    }

    function reset() {
        // Código para remover os conteúdos dos parágrafos, títulos e tudo mais...
        document.querySelector('#nameOfPiece').textContent = '';
        document.querySelector('#PieceIsoCode').innerText = '';
        document.querySelector('#pieceInformationDesc').innerText = '';
        
        // No "Src" do elemento 3D, coloque "none"
        pieceModel.src = 'none';
        pieceModel.style.display = 'none';
    }
});
