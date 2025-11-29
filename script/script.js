const loginBtn = document.querySelector('#login');
const loginWindow = document.querySelector('.login-window');
const closeLoginBtn = document.querySelector('#fecharLogin');
const verifyLoginBtn = document.querySelector('#verificarLogin');
const inputName = document.querySelector('#nomeInput');
const inputPassword = document.querySelector('#senhaInput');
const addPieceDisplay = document.querySelector('.add-piece-display');
const modelDropzone = document.querySelector('.model-dropzone');
const closeAddPieceBtn = document.querySelector('#closeAddPiece');
const RoscBtn = document.querySelector('#Rosc');
const ParafBtn = document.querySelector('#paraf');
const EngreBtn = document.querySelector('#engre');
const EixoBtn = document.querySelector('#eixo');
const valvulaBtn = document.querySelector('#valvula');
const pieceWindow = document.querySelector('.pieceWindow');
const closePieceBtn = document.querySelector('#closePieceWindow');
const pieceIframe = document.querySelector('#PieceIframe');
const nameOfPiece = document.querySelector('#nameOfPiece');
const PieceIsoCode = document.querySelector('#PieceIsoCode');
const pieceInformationDesc = document.querySelector('#pieceInformationDesc');
const mainCont = document.querySelector('.main-container');

// Função para mostrar uma janela
function showWindow(window) {
    window.style.animation = 'aparecer 0.5s ease-in-out 1';
    window.style.animationFillMode = 'forwards';
    window.classList.add('active');
}

// Função para esconder uma janela
function hideWindow(window) {
    window.style.animation = 'desaparecer 0.5s ease-in-out 1';
    window.style.animationFillMode = 'forwards';
    window.classList.remove('active');
}

// Login
loginBtn.addEventListener('click', function() {
    showWindow(loginWindow);
});

closeLoginBtn.addEventListener('click', function() {
    hideWindow(loginWindow);
});

verifyLoginBtn.addEventListener('click', function() {
    if(inputName.value == 'teste' && inputPassword.value == 'teste') {
        hideWindow(loginWindow);
        // Pequeno delay para a transição ficar suave
        setTimeout(() => {
            showWindow(addPieceDisplay);
        }, 300);
    } else {
        alert('Usuário ou senha incorretos');
    }
});

// Adicionar peça
modelDropzone.addEventListener('click', function() {
    const url = prompt('Cole o link do iframe 3D ou URL do GLB:');
    if (!url || url == '') {
        return;
    }
    
    const newIframe = document.createElement('iframe');
    newIframe.src = url;
    newIframe.className = 'model-iframe';
    newIframe.loading = 'lazy';
    newIframe.allow = 'fullscreen; accelerometer; autoplay; camera; gyroscope; magnetometer; xr-spatial-tracking';
    newIframe.sandbox = 'allow-scripts allow-same-origin allow-forms allow-presentation';
    modelDropzone.innerHTML = '';
    modelDropzone.appendChild(newIframe);
    modelDropzone.classList.add('has-content');
});

closeAddPieceBtn.addEventListener('click', function() {
    hideWindow(addPieceDisplay);
});

// Visualizar peças
function openPieceWindow(src, name, iso, desc) {
    pieceIframe.src = src;
    nameOfPiece.textContent = name;
    PieceIsoCode.textContent = iso;
    pieceInformationDesc.textContent = desc;
    showWindow(pieceWindow);
    mainCont.style.pointerEvents = 'none';
}

RoscBtn.addEventListener('click', function() {
    openPieceWindow(
        'https://tinyglb.com/viewer/d6eea691bec74c7d94c0dae002a12195',
        'Rosca',
        'ISO 68-1',
        'A rosca é um elemento de fixação amplamente utilizado em diversas aplicações industriais e mecânicas. Ela consiste em uma série de filetes helicoidais que permitem a união de componentes através do encaixe com parafusos ou porcas correspondentes. As roscas podem ser classificadas em diferentes tipos, como roscas métricas, roscas Whitworth, roscas trapezoidais, entre outras, cada uma com suas especificações e aplicações específicas. A escolha da rosca adequada depende de fatores como o material a ser fixado, a carga aplicada e as condições ambientais.'
    );
});

ParafBtn.addEventListener('click', function() {
    openPieceWindow(
        'https://tinyglb.com/viewer/1e50501ea6864089989b30a1d614d89c',
        'Parafuso',
        'ISO 4014',
        'O parafuso é um elemento de fixação amplamente utilizado em diversas aplicações industriais e domésticas. Ele consiste em um cilindro com uma rosca helicoidal que permite a união de componentes através do encaixe com porcas ou diretamente em materiais perfurados. Os parafusos podem ser fabricados em diferentes materiais, como aço, inox, latão, entre outros, e estão disponíveis em uma variedade de tamanhos, tipos de cabeça e perfis de rosca para atender às necessidades específicas de cada aplicação. A escolha do parafuso adequado depende de fatores como a carga a ser suportada, o ambiente de uso e o tipo de material a ser fixado.'
    );
});

EngreBtn.addEventListener('click', function() {
    openPieceWindow(
        'https://tinyglb.com/viewer/9a552931215f49b4991254e83aa703c6',
        'Engrenagem',
        'ISO 1328',
        'A engrenagem é um componente mecânico fundamental utilizado para transmitir movimento e torque entre eixos em máquinas e dispositivos. Consiste em uma roda dentada que se encaixa com outra engrenagem, permitindo a transferência de força através do contato dos dentes. As engrenagens podem variar em tamanho, forma e número de dentes, o que influencia a relação de transmissão e a velocidade do movimento. Elas são amplamente empregadas em uma variedade de aplicações, desde relógios e bicicletas até motores automotivos e equipamentos industriais, desempenhando um papel crucial na eficiência e funcionalidade dos sistemas mecânicos.'
    );
});

EixoBtn.addEventListener('click', function() {
    openPieceWindow(
        'https://tinyglb.com/viewer/1e2246cece8041cfb8046ae78a3fa48c',
        'Eixo',
        'ISO 286-1',
        'O eixo é um componente mecânico essencial utilizado para transmitir torque e movimento rotacional entre diferentes partes de uma máquina ou sistema. Geralmente, é uma barra cilíndrica que suporta elementos como engrenagens, polias e rodas, permitindo a transferência eficiente de energia. Os eixos podem ser fabricados em diversos materiais, como aço, alumínio ou compostos, dependendo das exigências de resistência e durabilidade. Eles desempenham um papel crucial em uma ampla gama de aplicações, desde veículos automotores até equipamentos industriais, garantindo o funcionamento adequado e a eficiência dos sistemas mecânicos.'
    );
});

valvulaBtn.addEventListener('click', function() {
    openPieceWindow(
        'https://tinyglb.com/viewer/13b99b5432e64a0c85644da5572710d2',
        'Válvula de Gaveta',
        'ISO 5208',
        'A válvula de gaveta é um tipo de válvula utilizada para controlar o fluxo de fluidos em tubulações. Ela é composta por uma porta deslizante, conhecida como gaveta, que se move perpendicularmente ao fluxo do fluido para abrir ou fechar a passagem. Quando a gaveta está totalmente aberta, permite o fluxo livre do fluido, enquanto quando está fechada, bloqueia completamente o fluxo. As válvulas de gaveta são amplamente utilizadas em sistemas de água, esgoto, petróleo e gás devido à sua capacidade de fornecer uma vedação eficaz e resistência a altas pressões. Elas são ideais para aplicações onde é necessário um controle total do fluxo, mas não são recomendadas para regulagem de fluxo devido à sua operação de abertura e fechamento.'
    );
});

closePieceBtn.addEventListener('click', function() {
    hideWindow(pieceWindow);
    pieceIframe.src = '';
    mainCont.style.pointerEvents = 'all';
});

// Fechar janelas ao clicar fora delas
document.addEventListener('click', function(e) {
    // Fechar login se clicar fora
    if (loginWindow.classList.contains('active') && 
        !e.target.closest('.login-window') && 
        !e.target.closest('#login')) {
        hideWindow(loginWindow);
    }
    
    // Fechar addPiece se clicar fora
    if (addPieceDisplay.classList.contains('active') && 
        !e.target.closest('.add-piece-display') && 
        !e.target.closest('#login')) {
        hideWindow(addPieceDisplay);
    }
    
    // Fechar pieceWindow se clicar fora
    if (pieceWindow.classList.contains('active') && 
        !e.target.closest('.pieceWindow') && 
        !e.target.closest('.item-container button')) {
        hideWindow(pieceWindow);
        pieceIframe.src = '';
        mainCont.style.pointerEvents = 'all';
    }
});
