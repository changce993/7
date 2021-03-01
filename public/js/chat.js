const socket = io();

let sessionId = null;
const user = prompt('¿Como te llamas?')
const form = document.querySelector('#form');
const inputTo = document.querySelector('#inputTo');
const inputMessage = document.querySelector('#inputMessage');
const messages = document.querySelector('#messages');

socket.on('userId', payload => {
    !sessionId && (sessionId = payload.sessionId);
    console.log(payload)
});

form.addEventListener('submit', e => {
    e.preventDefault();
    
    socket.emit('message', {
        from: user || sessionId,
        to: inputTo.value,
        msg: inputMessage.value
    });

    inputTo.value = '';
    inputMessage.value = '';
});

socket.on('msg', message => messages.innerHTML += `<p>${message.info.from}: ${message.info.msg}</p>`);