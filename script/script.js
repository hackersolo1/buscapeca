const loginBtn = document.querySelector('#login');
const loginWindow = document.querySelector('.login-window');
const closeLoginBtn = document.querySelector('#fecharLogin');
const verifyLoginBtn = document.querySelector('#verificarLogin');
const inputName = document.querySelector('#nomeInput');
const inputPassword = document.querySelector('#senhaInput');
const addPieceDisplay = document.querySelector('.add-piece-display');
const modelDropzone = document.querySelector('.model-dropzone');


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
