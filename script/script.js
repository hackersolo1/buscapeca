document.addEventListener('DOMContentLoaded', () => {
// Login Elements
const loginBtn = document.querySelector('#login');
const loginWindow = document.querySelector('.login-window');
const closeLoginBtn = document.querySelector('#closeLogin');

// Login Form Elements
const inputName = document.querySelector('#nameInput');
const inputPassword = document.querySelector('#passInput');
const verifyLoginBtn = document.querySelector('#verifyLogin');

// Add Piece Elements
const addPieceDisplay = document.querySelector('.add-piece-display');
const modelDropzone = document.querySelector('.model-dropzone');
const closeAddPieceBtn = document.querySelector('#closeAddPiece');

// Piece Buttons
const RoscBtn = document.querySelector('#Rosc');
const ParafBtn = document.querySelector('#paraf');
const EngreBtn = document.querySelector('#engre');
const EixoBtn = document.querySelector('#eixo');
const valvulaBtn = document.querySelector('#valvula');

// Piece Information Window Elements
const pieceWindow = document.querySelector('.pieceWindow');
const closePieceBtn = document.querySelector('#closePieceWindow');
const pieceModel = document.querySelector('.model3D');
const nameOfPiece = document.querySelector('#nameOfPiece');
const PieceIsoCode = document.querySelector('#PieceIsoCode');
const pieceInformationDesc = document.querySelector('#pieceInformationDesc');
const pieceCloseBtn = document.querySelector('#closePieceWindow');

// Event Listeners
loginBtn.addEventListener('click', () => {
    loginWindow.style.animation = 'show 0.5s ease-in-out forwards';
});

closeLoginBtn.addEventListener('click', () => {
    loginWindow.style.animation = 'unshow 0.5s ease-in-out forwards';
});

verifyLoginBtn.addEventListener('click', () => {
    const name = inputName.value;
    const password = inputPassword.value;

    if (name === 'admin' && password === 'admin123') {
        loginWindow.style.animation = 'unshow 0.5s ease-in-out forwards';
        addPieceDisplay.style.animation = 'show 0.5s ease-in-out forwards';
    } else {
        alert('Invalid credentials. Please try again.');
    }
});

closeAddPieceBtn.addEventListener('click', () => {
    addPieceDisplay.style.animation = 'unshow 0.5s ease-in-out forwards';
});

RoscBtn.addEventListener('click', () => {
    pieceModel.src = 'modelos/rosca.glb';
    nameOfPiece.textContent = 'Rosca';
    PieceIsoCode.textContent = 'ISO 68-1';
    pieceInformationDesc.textContent = 'A rosca é um elemento de fixação utilizado para unir componentes mecânicos, permitindo desmontagem e montagem repetidas.';
    pieceWindow.style.animation = 'show 0.5s ease-in-out forwards';
});

ParafBtn.addEventListener('click', () => {
    pieceModel.src = 'modelos/parafusos.glb';
    nameOfPiece.textContent = 'Parafuso';
    PieceIsoCode.textContent = 'ISO 4014';
    pieceInformationDesc.textContent = 'O parafuso é um elemento de fixação que utiliza uma rosca externa para unir peças, sendo amplamente utilizado em diversas aplicações mecânicas.';
    pieceWindow.style.animation = 'show 0.5s ease-in-out forwards';
});

EngreBtn.addEventListener('click', () => {
    pieceModel.src = 'modelos/engrenagem.glb';
    nameOfPiece.textContent = 'Engrenagem';
    PieceIsoCode.textContent = 'ISO 1328';
    pieceInformationDesc.textContent = 'A engrenagem é um componente mecânico que transmite movimento e força entre eixos através do contato de seus dentes.';
    pieceWindow.style.animation = 'show 0.5s ease-in-out forwards';
});

EixoBtn.addEventListener('click', () => {
    pieceModel.src = 'modelos/eixo.glb';
    nameOfPiece.textContent = 'Eixo';
    PieceIsoCode.textContent = 'ISO 286-1';
    pieceInformationDesc.textContent = 'O eixo é um componente mecânico que serve como suporte para outros elementos, transmitindo torque e movimento rotacional.';
    pieceWindow.style.animation = 'show 0.5s ease-in-out forwards';
});

valvulaBtn.addEventListener('click', () => {
    pieceModel.src = 'modelos/valvula.glb';
    nameOfPiece.textContent = 'Válvula';
    PieceIsoCode.textContent = 'ISO 5208';
    pieceInformationDesc.textContent = 'A válvula é um dispositivo utilizado para controlar o fluxo de fluidos em sistemas hidráulicos e pneumáticos.';
    pieceWindow.style.animation = 'show 0.5s ease-in-out forwards';
});

pieceCloseBtn.addEventListener('click', () => {
    pieceWindow.style.animation = 'unshow 0.5s ease-in-out forwards';
    pieceModel.src = '';
    alert('Fechando a janela de informações da peça.');
});
});