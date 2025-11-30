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

loginBtn.addEventListener('click', () => {
    loginWindow.style.animation = 'show 0.5s ease-in-out forwards';
});

closeLoginBtn.addEventListener('click', () => {
    loginWindow.style.animation = 'unshow 0.5s ease-in-out forwards';
});