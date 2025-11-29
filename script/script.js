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


loginBtn.addEventListener('click', function() {
  loginWindow.style.animation = 'aparecer 0.5s ease-in-out 1';
  loginWindow.style.animationFillMode = 'forwards';
});

closeLoginBtn.addEventListener('click', function() {
  loginWindow.style.animation = 'desaparecer 0.5s ease-in-out 1';
  loginWindow.style.animationFillMode = 'forwards';
});

verifyLoginBtn.addEventListener('click', function() {
  if(inputName.value == 'teste' && inputPassword.value == 'teste') {
    addPieceDisplay.style.animation = 'aparecer 0.5s ease-in-out 1';
    addPieceDisplay.style.animationFillMode = 'forwards';
    loginWindow.style.animation = 'desaparecer 0.5s ease-in-out 1';
    loginWindow.style.animationFillMode = 'forwards';
  } else {
    alert('Senha errada');
  }
});

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
});

closeAddPieceBtn.addEventListener('click', function() {
  addPieceDisplay.style.animation = 'desaparecer 0.5s ease-in-out 1';
  addPieceDisplay.style.animationFillMode = 'forwards';
});

RoscBtn.addEventListener('click', function() {
    pieceWindow.style.animation = 'aparecer 0.5s ease-in-out 1';
    pieceWindow.style.animationFillMode = 'forwards';
    pieceIframe.src = 'https://tinyglb.com/viewer/d6eea691bec74c7d94c0dae002a12195';
    nameOfPiece.textContent = 'Rosca';
    PieceIsoCode.textContent = 'ISO 68-1';
    pieceInformationDesc.textContent = 'A rosca é um elemento de fixação amplamente utilizado em diversas aplicações industriais e mecânicas. Ela consiste em uma série de filetes helicoidais que permitem a união de componentes através do encaixe com parafusos ou porcas correspondentes. As roscas podem ser classificadas em diferentes tipos, como roscas métricas, roscas Whitworth, roscas trapezoidais, entre outras, cada uma com suas especificações e aplicações específicas. A escolha da rosca adequada depende de fatores como o material a ser fixado, a carga aplicada e as condições ambientais.';
});



ParafBtn.addEventListener('click', function() {
    pieceWindow.style.animation = 'aparecer 0.5s ease-in-out 1';
    pieceWindow.style.animationFillMode = 'forwards';
    pieceIframe.src = 'https://tinyglb.com/viewer/1e50501ea6864089989b30a1d614d89c';
    nameOfPiece.textContent = 'Parafuso';
    PieceIsoCode.textContent = 'ISO 4014';
    pieceInformationDesc.textContent = 'O parafuso é um elemento de fixação amplamente utilizado em diversas aplicações industriais e domésticas. Ele consiste em um cilindro com uma rosca helicoidal que permite a união de componentes através do encaixe com porcas ou diretamente em materiais perfurados. Os parafusos podem ser fabricados em diferentes materiais, como aço, inox, latão, entre outros, e estão disponíveis em uma variedade de tamanhos, tipos de cabeça e perfis de rosca para atender às necessidades específicas de cada aplicação. A escolha do parafuso adequado depende de fatores como a carga a ser suportada, o ambiente de uso e o tipo de material a ser fixado.';
});

EngreBtn.addEventListener('click', function() {
    pieceWindow.style.animation = 'aparecer 0.5s ease-in-out 1';
    pieceWindow.style.animationFillMode = 'forwards';
    pieceIframe.src = 'https://tinyglb.com/viewer/9a552931215f49b4991254e83aa703c6';
    nameOfPiece.textContent = 'Engrenagem';
    PieceIsoCode.textContent = 'ISO 1328';
    pieceInformationDesc.textContent = 'A engrenagem é um componente mecânico fundamental utilizado para transmitir movimento e torque entre eixos em máquinas e dispositivos. Consiste em uma roda dentada que se encaixa com outra engrenagem, permitindo a transferência de força através do contato dos dentes. As engrenagens podem variar em tamanho, forma e número de dentes, o que influencia a relação de transmissão e a velocidade do movimento. Elas são amplamente empregadas em uma variedade de aplicações, desde relógios e bicicletas até motores automotivos e equipamentos industriais, desempenhando um papel crucial na eficiência e funcionalidade dos sistemas mecânicos.';
});

EixoBtn.addEventListener('click', function() {
    pieceWindow.style.animation = 'aparecer 0.5s ease-in-out 1';
    pieceWindow.style.animationFillMode = 'forwards';
    pieceIframe.src = 'https://tinyglb.com/viewer/1e2246cece8041cfb8046ae78a3fa48c';
    nameOfPiece.textContent = 'Eixo';
    PieceIsoCode.textContent = 'ISO 286-1';
    pieceInformationDesc.textContent = 'O eixo é um componente mecânico essencial utilizado para transmitir torque e movimento rotacional entre diferentes partes de uma máquina ou sistema. Geralmente, é uma barra cilíndrica que suporta elementos como engrenagens, polias e rodas, permitindo a transferência eficiente de energia. Os eixos podem ser fabricados em diversos materiais, como aço, alumínio ou compostos, dependendo das exigências de resistência e durabilidade. Eles desempenham um papel crucial em uma ampla gama de aplicações, desde veículos automotores até equipamentos industriais, garantindo o funcionamento adequado e a eficiência dos sistemas mecânicos.';
});

valvulaBtn.addEventListener('click', function() {
    pieceWindow.style.animation = 'aparecer 0.5s ease-in-out 1';
    pieceWindow.style.animationFillMode = 'forwards';
    pieceIframe.src = 'https://tinyglb.com/viewer/13b99b5432e64a0c85644da5572710d2';
    nameOfPiece.textContent = 'Válvula de Gaveta';
    PieceIsoCode.textContent = 'ISO 5208';
    pieceInformationDesc.textContent = 'A válvula de gaveta é um tipo de válvula utilizada para controlar o fluxo de fluidos em tubulações. Ela é composta por uma porta deslizante, conhecida como gaveta, que se move perpendicularmente ao fluxo do fluido para abrir ou fechar a passagem. Quando a gaveta está totalmente aberta, permite o fluxo livre do fluido, enquanto quando está fechada, bloqueia completamente o fluxo. As válvulas de gaveta são amplamente utilizadas em sistemas de água, esgoto, petróleo e gás devido à sua capacidade de fornecer uma vedação eficaz e resistência a altas pressões. Elas são ideais para aplicações onde é necessário um controle total do fluxo, mas não são recomendadas para regulagem de fluxo devido à sua operação de abertura e fechamento.';
});

closePieceBtn.addEventListener('click', function() {
    pieceWindow.style.animation = 'desaparecer 0.5s ease-in-out 1';
    pieceWindow.style.animationFillMode = 'forwards';
    pieceIframe.src = '';
});
