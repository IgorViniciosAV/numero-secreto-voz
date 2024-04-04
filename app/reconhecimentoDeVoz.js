const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results [0] [0].transcript
    exibiChuteNaTela(chute)
    vericaSeChutePossuiValorValido(chute)
}

function exibiChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div class="numero-chute">Você disse:</div>
        <span class="box numero-chute">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())