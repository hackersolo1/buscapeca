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
const submPiece = document.querySelector('#submitPiece');
const namePieceInput = document.querySelector('#piece-name');
const codePiece = document.querySelector('#piece-iso-code');

// Piece Buttons
const RoscBtn = document.querySelector('#Rosc');
const ParafBtn = document.querySelector('#paraf');
const EngreBtn = document.querySelector('#engre');
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
    pieceModel.style.display = 'block';
    pieceModel.src = 'modelos/rosca.glb';
    nameOfPiece.textContent = 'Rosca';
    PieceIsoCode.textContent = 'ISO 68-1';
    pieceInformationDesc.textContent = 'A rosca é um elemento de fixação utilizado para unir componentes mecânicos, permitindo desmontagem e montagem repetidas.';
    pieceWindow.style.animation = 'show 0.5s ease-in-out forwards';
});

ParafBtn.addEventListener('click', () => {
    pieceModel.style.display = 'block';
    pieceModel.src = 'modelos/parafusos.glb';
    nameOfPiece.textContent = 'Parafuso';
    PieceIsoCode.textContent = 'ISO 4014';
    pieceInformationDesc.textContent = 'O parafuso é um elemento de fixação que utiliza uma rosca externa para unir peças, sendo amplamente utilizado em diversas aplicações mecânicas.';
    pieceWindow.style.animation = 'show 0.5s ease-in-out forwards';
});

EngreBtn.addEventListener('click', () => {
    pieceModel.style.display = 'block';
    pieceModel.src = 'modelos/engrenagem.glb';
    nameOfPiece.textContent = 'Engrenagem';
    PieceIsoCode.textContent = 'ISO 1328';
    pieceInformationDesc.textContent = 'A engrenagem é um componente mecânico que transmite movimento e força entre eixos através do contato de seus dentes.';
    pieceWindow.style.animation = 'show 0.5s ease-in-out forwards';
});

valvulaBtn.addEventListener('click', () => {
    pieceModel.style.display = 'block';
    pieceModel.src = 'modelos/valvula.glb';
    nameOfPiece.textContent = 'Válvula';
    PieceIsoCode.textContent = 'ISO 5208';
    pieceInformationDesc.textContent = 'A válvula é um dispositivo utilizado para controlar o fluxo de fluidos em sistemas hidráulicos e pneumáticos.';
    pieceWindow.style.animation = 'show 0.5s ease-in-out forwards';
});

pieceCloseBtn.addEventListener('click', () => {
    pieceModel.style.display = 'none';
    pieceWindow.style.animation = 'unshow 0.5s ease-in-out forwards';
    pieceModel.src = '';
});
});

// Funções para adicionar peças 

submPiece.addEventListener('click' () => {
    if(namePieceInput == '' && codePiece == '') {
        alert('As áreas precisam ser preenchidas!');
        return;
    };

    const namePc = namePieceInput.value;
    const descPc = pieceDescInput.value;

    const newItem = document.createElement('div');
    newItem.classList.add('item-container');
    newItem.innerHTML = `
        <h1>${namePc}</h1>
        <p>${codePiece}</p>
        <button id="${namePc}">Ver mais</button>
    `;
});