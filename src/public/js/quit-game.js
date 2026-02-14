const { ipcRenderer } = require('electron');

const sair = document.getElementById('sair');

sair.addEventListener('click', () => ipcRenderer.send('close'));